---
title: "Protections: plugging the leaks in your browser"
description: How Privacy Magic protects your privacy as you browse the web
permalink: /protections/
---

Privacy Magic is an open-source extension for Chrome that comprehensively protects your privacy as you browse the web. Browsers are very leaky, so Privacy Magic provides multiple layers of protection.

## Blocking ads and trackers

Across the web, advertisements, tracking scripts, and tracking pixels are following you around without your consent using a variety of invisible methods.

Privacy Magic uses popular filter lists to block many ads and trackers from being requested by your browser on the network. The filter lists also hide the empty boxes that are left when ads are blocked on a web page. Privacy Magic uses a pinned version of these filter lists so that the extension's blocking behavior is fully reproducible and identical for every user.

| Filter list | Items blocked |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Advertisements, including banners, ad scripts, images, and video ads. |
| [EasyPrivacy](https://easylist.to/) | Trackers, including tracking scripts, pixels, web bugs, and other information collectors. |
| [Fanboy's Annoyance List](https://easylist.to/) | Cookie notices, social media widgets, in-page pop-ups, and other annoyances. |
| [small oisd blocklist](https://oisd.nl/) | Additional advertising domains. |

## Protecting system information (fingerprinting)

Traditionally, browsers leak copious amounts of information about your computer to any website or tracking script that asks! And trackers gather this data to track you as you browse the web.

| Fingerprint | Standard web browsers | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Web browsers' audio processing functionality typically leaks information about your sound card. | Privacy Magic reduces such leaks by erasing the least significant bit from audio data whenever it is read by a script. This erasure has no audible effects. |
| Battery | Web browsers will typically tell any website that asks what your battery level is, whether your device is plugged into a power source, and an estimate for how much time remains before your battery is empty. | Privacy Magic stops this information leak by simulating a battery that is always at 100% and a power supply that is always plugged in. |
| Browser | A web page can interrogate your browser to get detailed information about the operating system it is running in. | Privacy Magic spoofs `navigator.platform` to a single value for each different operating system. |
| Device | Web browsers will tell any website that asks whether you are using a foldable device. | Privacy Magic always reports that your device is not foldable. |
| Disk | Web browsers will typically leak an amount of disk space available to the website, and how much that website is using, which can reveal the total disk space available on your computer and the way the data is stored. | Privacy Magic spoofs these values so they are the same for everyone. |
| Display | Traditionally web browsers leak display settings, including whether your system is set to "prefer reduced motion". | Privacy Magic prevents this leak. |
| Fonts | Standard web browsers leak what custom fonts you have installed on your system, potentially making your fingerprint very unique. | Privacy Magic hides custom fonts installed on your system from all scripts. Web pages can continue to use standard system fonts and downloaded web fonts. |
| Graphics | Canvas and WebGL are two major fingerprinting vectors that leak the kind of GPU (graphics chip) your computer is using. | Privacy Magic uses advanced techniques to hide the graphics chip while allowing you to continue to play games and use other websites that make heavy use of graphics. |
| Keyboard | By default, browsers leak the keyboard layout you are using to any website that asks. | Privacy Magic blocks your keyboard layout from being revealed to website scripts. |
| Language | Typically, web browsers will leak a list of languages that you have approved. While it's important to be able to specify which language you prefer for the websites you visit, browsers will typically reveal a list of the user's preferred languages, which can be too revealing. | Privacy Magic only allows a single language to be passed to websites you visit. |
| Math | Tracking scripts in web pages can use idiosyncratic behavior of Math functions, such as cosine or hyperbolic tangent, on your device to tell you apart from other web users. | Privacy Magic patches the JavaScript Math functions so that they behave identically across all platforms. |
| Memory | Websites are able to find out from most browsers how much memory is unused on your computer. | Privacy Magic hides the amount of memory available on your system from web pages and trackers. |
| Network | Browsers normally leak details about the kind of network connection you have. | Privacy Magic prevents these details from leaking by making them homogeneous across all users. |
| Processor | Browsers are designed to report the number of cores on your computer's processor. | Privacy Magic pretends that everyone has exactly `4`. |
| Screen | Web browsers will leak the dimensions of your screen to any website that asks, regardless of how big the browser window is. | Privacy Magic hides the true screen size. |
| Time Zone | Web browsers will leak your approximate location when scripts ask for your time zone. For example, if you are in Central European Time, the browser will provide a time zone identifier that indicates whether you are in Paris, Berlin, Luxembourg or any one of dozens of other cities. | Privacy Magic coalesces time zones so that every time zone offset has a single representative time zone. That way the browser does not leak unnecessary information about your location on the globe. |
| Timing | High resolution timing APIs allow scripts to characterise your system by measuring tiny differences in the timing of browser behaviors. | Privacy Magic rounds off the times provided by these APIs so that it is much harder for tracking scripts to use them to distinguish between browsers. |
| Touch | The Touch API leaks whether your device has touch and how many touch points it allows. | Privacy Magic hides this information from websites. |

## Removing tracking breadcrumbs

Some browser features are vulnerable to being used to share parts of your browsing history ("breadcrumbs") to different websites you visit. Privacy Magic hardens these features so they are less leaky.

| Breadcrumb | Standard web browsers | Privacy Magic |
| :--- | :--- | :--- |
| Cache Leaks | Browsers store data in local caches, so that when you visit a page or view it a second time, that data doesn't need to be loaded a second time. Unfortunately, those caches are sometimes leaky and will reveal something about your browsing history to a website you visit. | Privacy Magic clears vulnerable caches so that these leaks can't happen. |
| Referrer Policy | Traditionally, browsers will tell each web page you visit which web page you came from! | Privacy Magic deletes the exact page (or path) in the referrer, and for web compatibility, only allows the domain to be shared. |
| Tracking Parameters | Trackers can add extra "tracking parameters" to the addresses of the web pages you visit, so advertisers can keep track of who you are or where you have been browsing. | Privacy Magic deletes known tracking parameters from web addresses so that this information is not shared with the websites you visit. |
| Window Name | Normally, the `window.name` JavaScript API leaks data if you navigate between websites in the same tab. | Privacy Magic prevents this leak by enforcing a separate `window.name` for each website. |

## Stopping web leaks

Web browsers are complicated beasts! Leaks of private information can spring from many different browser features. Our approach in Privacy Magic is to plug leaks wherever they may be found.

| Feature | Standard web browsers | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | An iframe is a "web page within a web page." It's a box inside the page you are visiting, where a second web page can hide and use all of the same tracking techniques that a normal web page can use. | Privacy Magic injects all of its protections into every iframe on a web page, to ensure a tracker can't bypass those protections by hiding inside an iframe. |
| Service Workers | Service Workers are a browser feature that allows code to run in the background even when you aren't connected to the internet. Unfortunately, these Service Workers are easily able to leak private information. | Service workers are generally disabled on all sites, to prevent leaks of private information that cannot be patched otherwise. |
| Shared Storage | Shared Storage is a browser feature that allows data about your browsing to be aggregated and collected. While it was purported to be privacy-preserving, this feature raised strong privacy concerns and is due to be removed from browsers. | Privacy Magic makes sure that Shared Storage is disabled on all websites. |
| Shared Workers | Shared Workers are code that runs in the background and can be shared between websites. | Privacy Magic injects its protections into every Shared Worker loaded by any website. |
| Web Workers | Web Workers are code that runs in the background on a web page. Like the main page's scripts, web worker code can leak private data. | Privacy Magic injects its protections into every Web Worker on a page, to make sure trackers can't use Web Workers to bypass those protections. |

## Privacy signals

We're interested in improving your privacy in every way possible. So Privacy Magic's policy is to trigger pro-privacy policies in the websites you visit, if possible.

| Signal | Standard web browsers | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | The Global Privacy Control is a signal that can be sent to the websites you visit to indicate that you don't want your data sold or shared. Unfortunately, most web browsers do not send the Global Privacy Control preference by default. | Privacy Magic ensures that your browser sends the Global Privacy Control header with every request to every web page or embedded resource. It also injects a JavaScript signal in every page and iframe. |

## Browser protections

Browsers are badly behaved not only in how they render web pages, but also in how they send data to the parent company or to third-party advertising companies. Privacy Magic disables a variety of bad browser behaviors that would otherwise leak your private information.

### Disabling leaky web features

| Feature | Standard web browsers | Privacy Magic |
| :--- | :--- | :--- |
| Hyperlink Auditing | Standard browsers have a feature that allows websites to "ping" a tracking server with the links you click. | Privacy Magic disables this ping. |
| Third-Party Cookies | The most famous tracking feature of all. Chrome allows third-party cookies which allow you to be tracked from site to site. | Privacy Magic disables third-party cookies by default. |
| WebRTC non-proxied UDP | WebRTC is a web browser capability that allows you to communicate with other web users directly. Unfortunately, if you are using a browser proxy, standard Chrome-based browsers will leak WebRTC communications outside of the proxy. | Privacy Magic blocks the WebRTC leaks, while still allowing WebRTC to function on the websites that use it. |

### Disabling invasive cloud services

| Service | Standard web browsers | Privacy Magic |
| :--- | :--- | :--- |
| Alternate Error Pages | By default, Chrome will show alternate error pages when an error occurs. To show these pages, data about what pages you are visiting is sent to Google's servers. | Privacy Magic disables these alternate error pages so that no data is sent. |
| Safe Browsing Extended Reporting | When Safe Browsing blocks a page, Chrome may send the content of a blocked page to Google's servers. | Privacy Magic blocks this feature, so that no data is sent. |
| Search Suggest | By default, Chrome sends anything you type into the address bar to your default search engine (typically Google search) while you are typing, to make auto-suggestions. | Privacy Magic blocks this continuous monitoring, so that Chrome only sends your search when you press "enter". |
| Spelling Service | Chrome offers an "enhanced spell check" that sends what you type to Google's servers. | Privacy Magic disables this option and permits Chrome to use only the local "basic spell check." |

### Disabling ad targeting APIs

| API | Standard web browsers | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | The Ad Measurement API (and the related Private Aggregation API) sends data about your browsing, the ads you click, and other private data to advertising servers. | Privacy Magic disables these APIs to protect your data. |
| Protected Audience API | By default, this API is made available by Chrome to run an auction on your attention on behalf of advertisers. | Privacy Magic disables this API so your browsing data is not used this way. |
| Topics API | Chrome's Topics API gives advertisers a list of topics that supposedly interest you. | Privacy Magic disables the Topics API to keep that data private. |

### Disabling leaky Chrome settings

Chrome contains certain settings that are antithetical to your privacy: specifically, functionality that collects data on your browsing habits and sends them to Google's servers. These settings cannot be directly controlled by a browser extension, but during setup, Privacy Magic will help you find the settings and turn them off yourself.

| Setting | Standard web browsers | Privacy Magic |
| :--- | :--- | :--- |
| History syncing | When you're signed in to Chrome, it syncs your browsing history between devices. It also saves that same data on Google servers. | Privacy Magic guides you to the setting that disables history syncing to keep your browsing history private. |
| User experience metrics | Chrome silently sends metrics about your use of the browser back to Google's servers. | Privacy Magic helps you block this hidden data collection. |
| Per-URL data collection | For every URL you visit, Chrome collects "anonymized" data on your browsing on those pages and sends them to Google. | Privacy Magic helps you to disable this setting to prevent the data from being sent. |

## Remote setting control

Privacy Magic also has remote setting control for specific protections and specific websites. For example, if the Time Zone protection were to interfere with the proper functioning of website abc.com, then we would quickly respond by remotely disabling that particular protection on abc.com. We would remotely re-enable the protection once it had been fixed so that it no longer broke the site.

## Our privacy policy

The Privacy Magic browser extension contains no analytics or telemetry: it doesn't collect any private data about you or send any personal data to our servers. We don't know who you are, how you browse, or your browser settings, and we don't try to find out. We don't have any data to share about you with third parties. The extension regularly fetches a remote settings file (described above) but it's the same for everyone and we don't use it to collect information.

We will never use Privacy Magic for advertising or tracking. We will never make you the product. The only way we would ever make money from you is if you chose to be a customer.

Our website also contains no analytics. We don't know how many visitors it has, or who they are. We will never share or sell data about you. In short, we respect your privacy regardless of what browser or browser extension you might be using.
