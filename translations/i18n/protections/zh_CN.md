---
title: "保护措施：堵住浏览器中的漏洞"
description: Privacy Magic 如何在您浏览网页时保护隐私
backToTop: "↑ 返回顶部"
---

Privacy Magic 是一款面向 Chrome 的开源扩展，可在您浏览网页时全面保护隐私。浏览器漏洞很多，因此 Privacy Magic 提供多层保护，包括[拦截广告与跟踪器](#blocking-ads-and-trackers)、[保护系统信息](#protecting-system-information-fingerprinting)、[清除跟踪痕迹](#removing-tracking-breadcrumbs)、[阻止网页泄露](#stopping-web-leaks)、[发送隐私信号](#privacy-signals)，以及[强化浏览器保护](#browser-protections)。

## 拦截广告与跟踪器 {#blocking-ads-and-trackers}

在整个网络上，广告、跟踪脚本和跟踪像素正通过各种隐形手段，在未经您同意的情况下跟踪您。

Privacy Magic 使用流行的过滤列表，阻止浏览器在网络上请求许多广告和跟踪器。过滤列表还会隐藏网页上广告被拦截后留下的空白框。Privacy Magic 使用这些过滤列表的固定版本，使扩展的拦截行为完全可复现，并对每位用户保持一致。

| 过滤列表 | 拦截的内容 |
| :--- | :--- |
| [EasyList](https://easylist.to/) | 广告，包括横幅、广告脚本、图片和视频广告。 |
| [EasyPrivacy](https://easylist.to/) | 跟踪器，包括跟踪脚本、像素、网络臭虫以及其他信息收集器。 |
| [Fanboy's Annoyance List](https://easylist.to/) | Cookie 提示、社交媒体小部件、页内弹窗及其他干扰内容。 |
| [small oisd blocklist](https://oisd.nl/) | 额外的广告域名。 |

## 保护系统信息（指纹识别） {#protecting-system-information-fingerprinting}

传统上，浏览器会向任何询问的网站或跟踪脚本泄露大量关于您计算机的信息！跟踪器会收集这些数据，以便在您浏览网页时跟踪您。

| 指纹 | 标准网页浏览器 | Privacy Magic |
| :--- | :--- | :--- |
| 音频 | 网页浏览器的音频处理功能通常会泄露有关声卡的信息。 | Privacy Magic 通过在脚本读取音频数据时擦除最低有效位来减少此类泄露。这种擦除不会产生可听见的影响。 |
| 电池 | 网页浏览器通常会向任何询问的网站告知电池电量、设备是否接入电源，以及对电池剩余可用时间的估计。 | Privacy Magic 通过模拟始终为 100% 的电池和始终接入的电源来阻止这一信息泄露。 |
| 浏览器 | 网页可以询问您的浏览器，以获取其所运行操作系统的详细信息。 | Privacy Magic 将 `navigator.platform` 伪造为每个不同操作系统的单一值。 |
| 设备 | 网页浏览器会向任何询问的网站告知您是否正在使用可折叠设备。 | Privacy Magic 始终报告您的设备不可折叠。 |
| 磁盘 | 网页浏览器通常会泄露网站可用的磁盘空间量以及该网站正在使用的空间量，这可能暴露计算机上的总磁盘空间以及数据的存储方式。 | Privacy Magic 伪造这些值，使所有人都相同。 |
| 显示 | 传统上，网页浏览器会泄露显示设置，包括系统是否设置为“偏好减少动态效果”。 | Privacy Magic 阻止这一泄露。 |
| 字体 | 标准网页浏览器会泄露您系统上安装的自定义字体，可能使您的指纹非常独特。 | Privacy Magic 对所有脚本隐藏系统上安装的自定义字体。网页仍可继续使用标准系统字体和下载的网页字体。 |
| 图形 | Canvas 和 WebGL 是两个主要的指纹识别途径，会泄露计算机所使用的 GPU（图形芯片）类型。 | Privacy Magic 使用先进技术隐藏图形芯片，同时仍允许您继续玩游戏以及使用重度依赖图形的其他网站。 |
| 键盘 | 默认情况下，浏览器会向任何询问的网站泄露您正在使用的键盘布局。 | Privacy Magic 阻止向网站脚本透露您的键盘布局。 |
| 语言 | 通常，网页浏览器会泄露您已批准的语言列表。虽然能够指定访问网站时偏好的语言很重要，但浏览器通常会透露用户偏好语言的完整列表，这可能过于暴露。 | Privacy Magic 只允许将单一语言传递给您访问的网站。 |
| 数学 | 网页中的跟踪脚本可以利用设备上 Math 函数（例如余弦或双曲正切）的特异行为，将您与其他网络用户区分开来。 | Privacy Magic 修补 JavaScript Math 函数，使其在所有平台上表现一致。 |
| 内存 | 大多数浏览器允许网站获知计算机上有多少未使用的内存。 | Privacy Magic 对网页和跟踪器隐藏系统可用的内存量。 |
| 网络 | 浏览器通常会泄露有关网络连接类型的详细信息。 | Privacy Magic 通过使这些详情对所有用户保持一致来防止泄露。 |
| 处理器 | 浏览器被设计为报告计算机处理器的核心数量。 | Privacy Magic 假装每个人都恰好有 `4` 个核心。 |
| 屏幕 | 无论浏览器窗口有多大，网页浏览器都会向任何询问的网站泄露屏幕尺寸。 | Privacy Magic 隐藏真实的屏幕尺寸。 |
| 时区 | 当脚本询问时区时，网页浏览器会泄露您的大致位置。例如，如果您处于中欧时间，浏览器会提供一个时区标识符，表明您是在巴黎、柏林、卢森堡还是其他数十个城市之一。 | Privacy Magic 合并时区，使每个时区偏移量只有一个代表时区。这样浏览器就不会泄露关于您在地球上位置的不必要信息。 |
| 计时 | 高分辨率计时 API 允许脚本通过测量浏览器行为计时中的微小差异来刻画您的系统。 | Privacy Magic 对这些 API 提供的时间进行取整，使跟踪脚本更难用它们区分不同浏览器。 |
| 触控 | Touch API 会泄露您的设备是否支持触控以及允许多少触控点。 | Privacy Magic 对网站隐藏这些信息。 |

## 清除跟踪痕迹 {#removing-tracking-breadcrumbs}

某些浏览器功能容易被用来向您访问的不同网站分享浏览历史的部分内容（“痕迹”）。Privacy Magic 加固这些功能，使其不易泄露。

| 痕迹 | 标准网页浏览器 | Privacy Magic |
| :--- | :--- | :--- |
| 缓存泄露 | 浏览器会将数据存储在本地缓存中，以便您再次访问或查看页面时无需重新加载这些数据。不幸的是，这些缓存有时会泄露，并向您访问的网站透露有关浏览历史的信息。 | Privacy Magic 清除易受影响的缓存，使这些泄露无法发生。 |
| 引荐策略 | 传统上，浏览器会告诉您访问的每个网页您是从哪个网页过来的！ | Privacy Magic 删除引荐来源中的精确页面（或路径），并为了网页兼容性，只允许共享域名。 |
| 跟踪参数 | 跟踪器可以在您访问的网页地址中添加额外的“跟踪参数”，以便广告商跟踪您是谁或您浏览过哪些地方。 | Privacy Magic 从网址中删除已知的跟踪参数，使这些信息不会与您访问的网站共享。 |
| 窗口名称 | 通常，如果您在同一标签页中在不同网站之间导航，`window.name` JavaScript API 会泄露数据。 | Privacy Magic 通过为每个网站强制使用单独的 `window.name` 来阻止这一泄露。 |

## 阻止网页泄露 {#stopping-web-leaks}

网页浏览器非常复杂！私人信息的泄露可能来自许多不同的浏览器功能。Privacy Magic 的做法是：无论泄露出现在哪里，都将其堵住。

| 功能 | 标准网页浏览器 | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | iframe 是“网页中的网页”。它是您正在访问的页面内的一个框，第二个网页可以藏在其中，并使用普通网页所能使用的所有跟踪技术。 | Privacy Magic 将其所有保护注入网页上的每一个 iframe，以确保跟踪器无法通过藏在 iframe 中绕过这些保护。 |
| Service Workers | Service Workers 是一种浏览器功能，即使您未连接到互联网，也允许代码在后台运行。不幸的是，这些 Service Workers 很容易泄露私人信息。 | Service Workers 在所有网站上通常被禁用，以防止无法以其他方式修补的私人信息泄露。 |
| Shared Storage | Shared Storage 是一种浏览器功能，允许汇总和收集有关您浏览的数据。虽然它声称注重隐私保护，但该功能引发了强烈的隐私担忧，并将从浏览器中移除。 | Privacy Magic 确保在所有网站上禁用 Shared Storage。 |
| Shared Workers | Shared Workers 是在后台运行、并可在网站之间共享的代码。 | Privacy Magic 将其保护注入任何网站加载的每一个 Shared Worker。 |
| Web Workers | Web Workers 是在网页后台运行的代码。与主页面的脚本一样，Web Worker 代码可能泄露私人数据。 | Privacy Magic 将其保护注入页面上的每一个 Web Worker，以确保跟踪器无法利用 Web Workers 绕过这些保护。 |

## 隐私信号 {#privacy-signals}

我们希望尽可能全方位提升您的隐私。因此，Privacy Magic 会发送信号，要求您访问的网站遵循有利于隐私的政策。

| 信号 | 标准网页浏览器 | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control 是一种可向您访问的网站发送的信号，表明您不希望自己的数据被出售或共享。不幸的是，大多数网页浏览器默认不会发送 Global Privacy Control 偏好设置。 | Privacy Magic 确保您的浏览器在对每个网页或嵌入资源的每次请求中发送 Global Privacy Control 标头。它还会在每个页面和 iframe 中注入 JavaScript 信号。 |

## 浏览器保护 {#browser-protections}

浏览器表现不佳，不仅体现在如何呈现网页，还体现在如何向母公司或第三方广告公司发送数据。Privacy Magic 会禁用多种原本会泄露您私人信息的不良浏览器行为。

### 禁用易泄露的网页功能 {#disabling-leaky-web-features}

| 功能 | 标准网页浏览器 | Privacy Magic |
| :--- | :--- | :--- |
| 超链接审计 | 标准浏览器具有一项功能，允许网站在您点击链接时向跟踪服务器发送“ping”。 | Privacy Magic 禁用此 ping。 |
| 第三方 Cookie | 最著名的跟踪功能。Chrome 允许第三方 Cookie，从而使您可以跨网站被跟踪。 | Privacy Magic 默认禁用第三方 Cookie。 |
| WebRTC 非代理 UDP | WebRTC 是一种网页浏览器能力，允许您直接与其他网络用户通信。不幸的是，如果您使用浏览器代理，标准的基于 Chrome 的浏览器会将 WebRTC 通信泄露到代理之外。 | Privacy Magic 阻止 WebRTC 泄露，同时仍允许在使用它的网站上正常运行 WebRTC。 |

### 禁用侵入性云服务 {#disabling-invasive-cloud-services}

| 服务 | 标准网页浏览器 | Privacy Magic |
| :--- | :--- | :--- |
| 备用错误页面 | 默认情况下，当发生错误时，Chrome 会显示备用错误页面。为了显示这些页面，有关您正在访问哪些页面的数据会被发送到 Google 的服务器。 | Privacy Magic 禁用这些备用错误页面，从而不发送任何数据。 |
| Safe Browsing Extended Reporting | 当 Safe Browsing 拦截某个页面时，Chrome 可能会将已拦截页面的内容发送到 Google 的服务器。 | Privacy Magic 阻止此功能，从而不发送任何数据。 |
| 搜索建议 | 默认情况下，Chrome 会在您输入时，将您在地址栏中键入的任何内容发送到默认搜索引擎（通常是 Google 搜索），以提供自动建议。 | Privacy Magic 阻止这种持续监控，使 Chrome 仅在您按下“回车”时才发送搜索内容。 |
| 拼写服务 | Chrome 提供“增强型拼写检查”，会将您键入的内容发送到 Google 的服务器。 | Privacy Magic 禁用此选项，并仅允许 Chrome 使用本地的“基本拼写检查”。 |

### 禁用广告定向 API {#disabling-ad-targeting-apis}

| API | 标准网页浏览器 | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API（以及相关的 Private Aggregation API）会将有关您的浏览、您点击的广告以及其他私人数据发送到广告服务器。 | Privacy Magic 禁用这些 API 以保护您的数据。 |
| Protected Audience API | 默认情况下，Chrome 会提供此 API，代表广告商就您的注意力进行拍卖。 | Privacy Magic 禁用此 API，使您的浏览数据不会被这样使用。 |
| Topics API | Chrome 的 Topics API 会向广告商提供一份据称您感兴趣的主题列表。 | Privacy Magic 禁用 Topics API，以保持该数据私密。 |

### 禁用易泄露的 Chrome 设置 {#disabling-leaky-chrome-settings}

Chrome 包含某些与您的隐私相悖的设置：具体来说，是收集您的浏览习惯数据并将其发送到 Google 服务器的功能。这些设置无法由浏览器扩展直接控制，但在设置过程中，Privacy Magic 会帮助您找到这些设置并自行关闭。

| 设置 | 标准网页浏览器 | Privacy Magic |
| :--- | :--- | :--- |
| 历史记录同步 | 当您登录 Chrome 时，它会在设备之间同步浏览历史。它还会将相同的数据保存在 Google 服务器上。 | Privacy Magic 引导您找到禁用历史记录同步的设置，以保持浏览历史私密。 |
| 用户体验指标 | Chrome 会悄无地将您使用浏览器的指标发送回 Google 的服务器。 | Privacy Magic 帮助您阻止这种隐蔽的数据收集。 |
| 按 URL 的数据收集 | 对于您访问的每个 URL，Chrome 都会收集这些页面上“匿名化”的浏览数据，并将其发送给 Google。 | Privacy Magic 帮助您禁用此设置，以防止数据被发送。 |
