---
title: Technical Details
description: How Privacy Magic works under the hood
permalink: /technical/
---

## Overview

The goal of Privacy Magic is to protect user privacy as comprehensively as possible in Chrome, without breaking the browsing experience. The extension runs on any Chrome browser, and is designed to be easy to install and use. All included protections are enabled by default and are designed with the intention to avoid breaking websites. Nonetheless, unanticipated breakage can happen: therefore, individual protections can be disabled for specific websites using the UI or via a remote exceptions file.

Privacy Magic is a fully open-source extension (see the [source code on GitHub](https://github.com/littletechllc/privacymagic-extension/)), written in TypeScript, and licensed under the [GPL 3.0 license](https://www.gnu.org/licenses/gpl-3.0.html). The extension is designed for reproducible builds: that is, it is possible to confirm that the extension you install in your browser matches the public source code.

The Privacy Magic extension is written for the Manifest V3 API for Chrome extensions. To protect the user's privacy, Privacy Magic makes use of content script injection, network header modification, request blocking, CSS cosmetic injection and the Chrome privacy configuration API.

## Content script injection

Privacy Magic makes heavy use of the content script injection capability. In short, a series of protections, written in TypeScript, are compiled and bundled into a single JavaScript file, and injected at `document_start` of every web page and every available iframe to ensure that the hardening code runs before any remote web page scripts run.

The hardening code consists of a series of "monkey patches" that modify the behavior of functionality available in a web page's globally-available JavaScript context. For a simple example: to ensure that the `navigator.deviceMemory` [API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory) does not leak the amount of available RAM on your machine, we set its default value to `undefined` before any in-page scripts run, by injecting monkey patch code that is functionally equivalent to:

```js
Object.defineProperty(Navigator.prototype, 'deviceMemory', {
  get: () => undefined,
  configurable: true,
})
```

Notice that we're not simply redefining `navigator.deviceMemory` directly; instead we modify the property's prototype so that prototype tricks cannot be used by a fingerprinting script to subsequently retrieve the original unhardened value of `deviceMemory`.

## Iframes and Web Workers

One challenge with web pages that is not entirely addressed by the Manifest v3 API is that iframes and web workers (and SharedWorkers) all contain JavaScript contexts where a remote script can fingerprint the client. In order to harden these contexts, it's necessary to find ways to inject the hardening script *before* any remote code runs.

Unfortunately, although Manifest V3 is able to inject content scripts at `document_start` for most iframes, there are some iframes that do not receive a content script therefore, without further treatment, would remain unhardened. To solve this problem, Privacy Magic's hardening script recursively applies *itself* to each iframe, worker and SharedWorker found in context.

Whenever a new iframe is encountered, the hardening script applies its own code to that iframe. Whenever the web page attempts to create a new Web Worker, the hardening script first creates a web worker with *itself* in context, and then it loads the original worker script. In this way, nested iframes and workers are also hardened.

## Network hardening

Privacy Magic also includes code to modify request headers so that they reveal less about the client. 

## Browser hardening

