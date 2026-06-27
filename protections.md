

Privacy Magic is an open-source extension for Chrome that comprehensively protections your privacy as you browse the web.

## Open source

Privacy Magic is a fully open-source extension (see the [source code on GitHub](https://github.com/littletechllc/privacymagic-extension/)), licensed under the [GPL 3.0 license](https://www.gnu.org/licenses/gpl-3.0.html). The extension is designed for reproducible builds: that is, it is possible to confirm that the extension you install in your browser matches the public source code.

## Protections

### Blocking ads and trackers

Privacy Magic uses a number of popular filter lists: [EasyList](https://easylist.to/), [EasyPrivacy](https://easylist.to/), [Fanboy's Annoyance List](https://easylist.to/), and the [small oisd blocklist](https://oisd.nl/). These filter lists block ads from being requested by your browser on the network, and they also hide the empty spaces that are left when ads are blocked. Privacy Magic uses a pinned version of these filter lists so that the extension's blocking behavior is fully reproducible and identical for every user.

### Protecting system information (fingerprinting)

Traditionally, browsers leak copious amounts of information about your computer to any website or tracking script that asks! And trackers gather this data to track you as you browse the web.

- Audio: Web browsers' audio processing funcionality typically leaks information about your sound card. Privacy Magic stops this leak by erasing the least significant bit from audio data whenever it is read by a script. This erasure has no audible effects.
- Battery: Web browsers will typically tell any website that asks what your battery level is, whether your device is plugged into a power source, and an estimate for how much time remains before your battery is empty. Privacy Magic stops this information leak by simulating a battery that is always at 100% and always plugged in.
- Browser
- Device
- Disk
- Display
- Fonts: Privacy Magic hides custom fonts installed on your system. Web pages can continue to use standard system fonts and downloaded web fonts.
- Graphics
- Keyboard
- Language
- Math: Privacy Magic patches the JavaScript Math functions so that they behave identically across platforms. 
- Memory: Privacy Magic prevents hides amount of memory available on your system from web pages and trackers.
- Network
- Processor
- Screen
- Time Zone: Privacy Magic coalesces time zones so that every time zone has a single name. That way the browser does not leak unnecessary information about your location on the globe.
- Timing: Privacy Magic 
- Touch

### Removing tracking breadcrumbs

- Referrer Policy
- Tracking Parameters
- Window Name

### Stopping web leaks

- Iframes: Privacy Magic injects its protections into every iframe on a web page, to ensure a tracker can't bypass those protections.
- Service Workers: Service workers are generally disabled on all sites, to prevent leaks of private information that cannot be patched otherwise.
- Shared Storage: Shared Storage is disabled on all websites.
- Shared Workers: Privacy Magic injects its protections into every Shared Worker on a page.
- Web Workers: Privacy Magic injects its protections into every Web Worker on a page, to make sure trackers can't use Workers to bypass those protections.

### Privacy signals

- Global Privacy Control: Privacy Magic sends the Global Privacy Control header with every request to every web page or embedded resource. It also injects a JavaScript signal in every page and iframe.

### Browser protections

- 


### Remote setting control

Privacy Magic also has remote setting control for specific protections and specific websites. For example, if the Time Zone protection interfered with the proper functioning of Le Monde newspaper website, then we would quickly respond by remotely disabling that particular protection on the lemonde.fr website. Once the protection had been fixed so it no longer breaks the site, then it would be remotely re-enabled. This ability to rapidly and precisely disable a broken protection gives me confidence that we can offer Privacy Magic as a useful product.