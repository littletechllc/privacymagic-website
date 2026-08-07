---
title: Technical Details
description: How Privacy Magic works under the hood
permalink: /technical/
---

## Source code

Privacy Magic is a fully open-source extension (see the [source code on GitHub](https://github.com/littletechllc/privacymagic-extension/)), written in TypeScript, and licensed under the [GPL 3.0 license](https://www.gnu.org/licenses/gpl-3.0.html). The extension is designed for reproducible builds: that is, it is possible to confirm that the extension you install in your browser matches the public source code.

The Privacy Magic extension is strictly written to the Manifest V3 API for Chrome extensions. To protect the user's privacy, Privacy Magic makes use of content script injection, network header modification, request blocking, CSS cosmetic injection and the Chrome privacy configuration API, 

## Content script injection

Privacy Magic makes heavy use of the content script injection capability. In short, a series of protections, written in TypeScript, are compiled and bundled into a single JavaScript file, and injected at `document_start` of every web page and every available iframe to ensure that the hardening code runs before any remote web page scripts run.

## Iframes, Web Workers and SharedWorkers

One challenge with web pages that is not entirely addressed by the Manifest v3 API is that iframes, web workers and SharedWorkers all contain JavaScript contexts where a remote script can fingerprint the client. In order to harden these contexts, it's necessary to find ways to inject the hardening code *before* any remote code runs.

Unfortunately, although Manifest V3 is able to inject content scripts at `document_start` for most iframes, there are some iframes that do not receive a content script therefore, without further treatment, would remain unhardened. Privacy Magic addresses this issue by recursively apply its hardening script to each iframe, worker and SharedWorker found in a context.




## Network hardening

Privacy Magic also includes code to modify request headers so that they reveal less about the client. 

## Browser hardening

