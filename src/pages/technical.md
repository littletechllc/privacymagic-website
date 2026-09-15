---
title: Technical details
description: How Privacy Magic works under the hood
permalink: /technical/
---

We aim to make Privacy Magic work like magic. But of course it's actually engineering. The details of how the extension is built matter: only by taking pains to get the code right can we be sure that the protections really work.

The goal of Privacy Magic is to offer the best possible privacy for anyone using Chrome. The privacy protections are designed to be enabled by default, such that no websites should be broken. The extension constructs a multi-layered defense, including protections against fingerprinting, breadcrumbs, trackers, third-party cookies, browser leaks, and more. The user interface aims to be simple and intuitive.

For those who are interested: here we describe some of the nitty gritty technical details that went into making Privacy Magic a solid privacy extension.

## Source code

Privacy Magic is a fully open-source project (see the [source code on GitHub](https://github.com/littletechllc/privacymagic-extension/)), written in TypeScript, and licensed under the [GPL 3.0 license](https://www.gnu.org/licenses/gpl-3.0.html). The extension is designed for reproducible builds: that is, it is possible to confirm that the extension you install in your browser matches the public source code.

The Privacy Magic extension is strictly written to the Manifest V3 (MV3) API for Chrome extensions. To protect the user's privacy, Privacy Magic makes use of content script injection, network header modification, request blocking, CSS cosmetic injection and the Chrome privacy configuration API, 

## Content script injection

Privacy Magic makes heavy use of the MV3's [content script](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts) injection capability. In short, a series of protections, written in TypeScript, are compiled and bundled into a single JavaScript file, and injected at `document_start` in the `MAIN` world of every web page and every available iframe to ensure that the hardening code runs before any remote web page scripts run.

## Iframes, Web Workers and SharedWorkers

One challenge with web pages that is not entirely addressed by the Manifest v3 API is that iframes, web workers and SharedWorkers all contain JavaScript contexts where a remote script can fingerprint the client. In order to harden these contexts, it's necessary to find ways to inject the hardening code *before* any remote code runs.

Unfortunately, although Manifest V3 is able to inject content scripts at `document_start` for most iframes, there are some iframes that do not receive a content script therefore, without further treatment, would remain unhardened. Privacy Magic addresses this issue by recursively applying its hardening script to each iframe, worker and SharedWorker found in a context.

## Network hardening

Privacy Magic also includes code to modify request headers so that they reveal less about the client. 

## Browser settings fixes

Privacy Magic makes use of the [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy) API in MV3 to disable [certain features](/protections/#browser-protections) that are harmful to user privacy. Some features cannot be disabled using MV3; in those cases we navigate the user to the specific chrome://settings pages where the setting can be manually disabled and help them to do so by giving clear instructions in a side panel.

## Unit tests

Privacy Magic has an extensive suite of unit tests that check the privacy protections for correctness. End-to-end testing in the browser is under development.