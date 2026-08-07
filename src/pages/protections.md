---
title: Protections
description: How Privacy Magic protects your privacy as you browse the web
permalink: /protections/
---

Privacy Magic is an open-source extension for Chrome that comprehensively protects your privacy as you browse the web.

## Blocking ads and trackers

Privacy Magic uses a number of popular filter lists: [EasyList](https://easylist.to/), [EasyPrivacy](https://easylist.to/), [Fanboy's Annoyance List](https://easylist.to/), and the [small oisd blocklist](https://oisd.nl/). These filter lists block ads from being requested by your browser on the network, and they also hide the empty boxes that are left when ads are blocked on a web page. Privacy Magic uses a pinned version of these filter lists so that the extension's blocking behavior is fully reproducible and identical for every user.

## Protecting system information (fingerprinting resistance)

Traditionally, browsers leak copious amounts of information about your computer to any website or tracking script that asks! And trackers gather this data to track you as you browse the web.

### Audio
Web browsers' audio processing functionality typically leaks information about your sound card. Privacy Magic reduces such leaks by erasing the least significant bit from audio data whenever it is read by a script. This erasure has no audible effects.

### Battery
Web browsers will typically tell any website that asks what your battery level is, whether your device is plugged into a power source, and an estimate for how much time remains before your battery is empty. Privacy Magic stops this information leak by simulating a battery that is always at 100% and always plugged in.

### Browser
A web page can interrogate your browser to get detailed information about the operating system it is running in. Privacy Magic spoofs the `navigator.platform` to a single value for each different operating system.

### Device
Web browsers will leak whether your device is in a "continuous" (flat) or "folded" state. In other words -- is it a tablet or a laptop? Privacy Magic always spoofs this as being in the "continuous" state.

### Disk
Web browsers will typically leak an amount of disk space available to the website, and how much that website is using, which can reveal the total disk space available on your computer and the way the data is stored. Privacy Magic spoofs these values so they are the same for everyone.

### Display

### Fonts
Privacy Magic hides custom fonts installed on your system. Web pages can continue to use standard system fonts and downloaded web fonts.

### Graphics
Canvas and WebGL are two major fingerprinting vectors, that leak the kind of GPU (graphics chip) your computer is using. Privacy Magic uses advanced techniques to hide the graphics chip while allowing you to continue to play games and use other websites that make heavy use of graphics.

### Keyboard
Privacy Magic prevents the default behavior of Chrome, which is to leak the keyboard layout you are using to any website that asks.

### Language
Typically, web browsers will leak a list of languages that you have approved. While it's important to be able to specify which language you prefer for the websites you visit, browsers will typically reveal a list of the user's preferred languages, which can be too revealing. Privacy Magic only allows a single language to be passed to websites you visit.

### Math
Privacy Magic patches the JavaScript Math functions so that they behave identically across platforms.

### Memory
Websites are able to find out from most browsers how much memory is unused on your computer. Privacy Magic hides the amount of memory available on your system from web pages and trackers.

### Network

### Processor

### Screen

### Time Zone
Privacy Magic coalesces time zones so that every time zone has a single name. That way the browser does not leak unnecessary information about your location on the globe.

### Timing

### Touch

## Removing tracking breadcrumbs

- Referrer Policy: 
- Tracking Parameters: 
- Window Name: Normally, the `window.name` JavaScript API leaks data if you navigate between websites in the same tab. Privacy Magic prevents this leak.

## Stopping web leaks

- Iframes: Privacy Magic injects its protections into every iframe on a web page, to ensure a tracker can't bypass those protections.
- Service Workers: Service workers are generally disabled on all sites, to prevent leaks of private information that cannot be patched otherwise.
- Shared Storage: Shared Storage is disabled on all websites.
- Shared Workers: Privacy Magic injects its protections into every Shared Worker on a page.
- Web Workers: Privacy Magic injects its protections into every Web Worker on a page, to make sure trackers can't use Workers to bypass those protections.

## Privacy signals

- Global Privacy Control: Privacy Magic sends the Global Privacy Control header with every request to every web page or embedded resource. It also injects a JavaScript signal in every page and iframe.

## Browser protections



## Remote setting control

Privacy Magic also has remote setting control for specific protections and specific websites. For example, if the Time Zone protection interfered with the proper functioning of Le Monde newspaper website, then we would quickly respond by remotely disabling that particular protection on the lemonde.fr website. Once the protection had been fixed so it no longer breaks the site, then it would be remotely re-enabled. This ability to rapidly and precisely disable a broken protection gives me confidence that we can offer Privacy Magic as a useful product.
