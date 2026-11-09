---
title: "保護措施：堵住瀏覽器中的漏洞"
description: Privacy Magic 如何在您瀏覽網頁時保護隱私
backToTop: "↑ 返回頂部"
---

Privacy Magic 是一款適用於 Chrome 的開源擴充功能，可在您瀏覽網頁時全面保護隱私。瀏覽器漏洞很多，因此 Privacy Magic 提供多層保護，包括[封鎖廣告與追蹤器](#blocking-ads-and-trackers)、[保護系統資訊](#protecting-system-information-fingerprinting)、[清除追蹤痕跡](#removing-tracking-breadcrumbs)、[阻止網頁洩漏](#stopping-web-leaks)、[傳送隱私訊號](#privacy-signals)，以及[強化瀏覽器保護](#browser-protections)。

## 封鎖廣告與追蹤器 {#blocking-ads-and-trackers}

在整個網路上，廣告、追蹤腳本和追蹤像素正透過各種隱形手段，在未經您同意的情況下追蹤您。

Privacy Magic 使用熱門的過濾清單，阻止瀏覽器在網路上請求許多廣告和追蹤器。過濾清單也會隱藏網頁上廣告被封鎖後留下的空白框。Privacy Magic 使用這些過濾清單的固定版本，使擴充功能的封鎖行為完全可重現，並對每位使用者保持一致。

| 過濾清單 | 封鎖的內容 |
| :--- | :--- |
| [EasyList](https://easylist.to/) | 廣告，包括橫幅、廣告腳本、圖片和影片廣告。 |
| [EasyPrivacy](https://easylist.to/) | 追蹤器，包括追蹤腳本、像素、網路臭蟲以及其他資訊收集器。 |
| [Fanboy's Annoyance List](https://easylist.to/) | Cookie 提示、社群媒體小工具、頁內彈出視窗及其他干擾內容。 |
| [small oisd blocklist](https://oisd.nl/) | 額外的廣告網域。 |

## 保護系統資訊（指紋辨識） {#protecting-system-information-fingerprinting}

傳統上，瀏覽器會向任何詢問的網站或追蹤腳本洩漏大量關於您電腦的資訊！追蹤器會收集這些資料，以便在您瀏覽網頁時追蹤您。

| 指紋 | 標準網頁瀏覽器 | Privacy Magic |
| :--- | :--- | :--- |
| 音訊 | 網頁瀏覽器的音訊處理功能通常會洩漏有關音效卡的資訊。 | Privacy Magic 透過在腳本讀取音訊資料時清除最低有效位元來減少此類洩漏。這種清除不會產生可聽見的影響。 |
| 電池 | 網頁瀏覽器通常會向任何詢問的網站告知電池電量、裝置是否接入電源，以及對電池剩餘可用時間的估計。 | Privacy Magic 透過模擬始終為 100% 的電池和始終接入的電源來阻止這一資訊洩漏。 |
| 瀏覽器 | 網頁可以詢問您的瀏覽器，以取得其所執行作業系統的詳細資訊。 | Privacy Magic 將 `navigator.platform` 偽造為每個不同作業系統的單一值。 |
| 裝置 | 網頁瀏覽器會向任何詢問的網站告知您是否正在使用可摺疊裝置。 | Privacy Magic 始終回報您的裝置不可摺疊。 |
| 磁碟 | 網頁瀏覽器通常會洩漏網站可用的磁碟空間量以及該網站正在使用的空間量，這可能暴露電腦上的總磁碟空間以及資料的儲存方式。 | Privacy Magic 偽造這些值，使所有人都相同。 |
| 顯示 | 傳統上，網頁瀏覽器會洩漏顯示設定，包括系統是否設定為「偏好減少動態效果」。 | Privacy Magic 阻止這一洩漏。 |
| 字型 | 標準網頁瀏覽器會洩漏您系統上安裝的自訂字型，可能使您的指紋非常獨特。 | Privacy Magic 對所有腳本隱藏系統上安裝的自訂字型。網頁仍可繼續使用標準系統字型和下載的網頁字型。 |
| 圖形 | Canvas 和 WebGL 是兩個主要的指紋辨識途徑，會洩漏電腦所使用的 GPU（圖形晶片）類型。 | Privacy Magic 使用先進技術隱藏圖形晶片，同時仍允許您繼續玩遊戲以及使用重度依賴圖形的其他網站。 |
| 鍵盤 | 預設情況下，瀏覽器會向任何詢問的網站洩漏您正在使用的鍵盤配置。 | Privacy Magic 阻止向網站腳本透露您的鍵盤配置。 |
| 語言 | 通常，網頁瀏覽器會洩漏您已核准的語言清單。雖然能夠指定造訪網站時偏好的語言很重要，但瀏覽器通常會透露使用者偏好語言的完整清單，這可能過於暴露。 | Privacy Magic 只允許將單一語言傳遞給您造訪的網站。 |
| 數學 | 網頁中的追蹤腳本可以利用裝置上 Math 函式（例如餘弦或雙曲正切）的特異行為，將您與其他網路使用者區分開來。 | Privacy Magic 修補 JavaScript Math 函式，使其在所有平台上表現一致。 |
| 記憶體 | 大多數瀏覽器允許網站得知電腦上有多少未使用的記憶體。 | Privacy Magic 對網頁和追蹤器隱藏系統可用的記憶體量。 |
| 網路 | 瀏覽器通常會洩漏有關網路連線類型的詳細資訊。 | Privacy Magic 透過使這些詳情對所有使用者保持一致來防止洩漏。 |
| 處理器 | 瀏覽器被設計為回報電腦處理器的核心數量。 | Privacy Magic 假裝每個人都恰好有 `4` 個核心。 |
| 螢幕 | 無論瀏覽器視窗有多大，網頁瀏覽器都會向任何詢問的網站洩漏螢幕尺寸。 | Privacy Magic 隱藏真實的螢幕尺寸。 |
| 時區 | 當腳本詢問時區時，網頁瀏覽器會洩漏您的大致位置。例如，如果您處於中歐時間，瀏覽器會提供一個時區識別碼，表明您是在巴黎、柏林、盧森堡還是其他數十個城市之一。 | Privacy Magic 合併時區，使每個時區偏移量只有一個代表時區。這樣瀏覽器就不會洩漏關於您在地球上位置的不必要資訊。 |
| 計時 | 高解析度計時 API 允許腳本透過測量瀏覽器行為計時中的微小差異來刻畫您的系統。 | Privacy Magic 對這些 API 提供的時間進行取整，使追蹤腳本更難用它們區分不同瀏覽器。 |
| 觸控 | Touch API 會洩漏您的裝置是否支援觸控以及允許多少觸控點。 | Privacy Magic 對網站隱藏這些資訊。 |

## 清除追蹤痕跡 {#removing-tracking-breadcrumbs}

某些瀏覽器功能容易被用來向您造訪的不同網站分享瀏覽紀錄的部分內容（「痕跡」）。Privacy Magic 強化這些功能，使其不易洩漏。

| 痕跡 | 標準網頁瀏覽器 | Privacy Magic |
| :--- | :--- | :--- |
| 快取洩漏 | 瀏覽器會將資料儲存在本機快取中，以便您再次造訪或檢視頁面時無需重新載入這些資料。不幸的是，這些快取有時會洩漏，並向您造訪的網站透露有關瀏覽紀錄的資訊。 | Privacy Magic 清除易受影響的快取，使這些洩漏無法發生。 |
| 參照原則 | 傳統上，瀏覽器會告訴您造訪的每個網頁您是從哪個網頁過來的！ | Privacy Magic 刪除參照來源中的精確頁面（或路徑），並為了網頁相容性，只允許分享網域。 |
| 追蹤參數 | 追蹤器可以在您造訪的網頁位址中加入額外的「追蹤參數」，以便廣告商追蹤您是誰或您瀏覽過哪些地方。 | Privacy Magic 從網址中刪除已知的追蹤參數，使這些資訊不會與您造訪的網站分享。 |
| 視窗名稱 | 通常，如果您在同一個分頁中在不同網站之間導覽，`window.name` JavaScript API 會洩漏資料。 | Privacy Magic 透過為每個網站強制使用單獨的 `window.name` 來阻止這一洩漏。 |

## 阻止網頁洩漏 {#stopping-web-leaks}

網頁瀏覽器非常複雜！私人資訊的洩漏可能來自許多不同的瀏覽器功能。Privacy Magic 的做法是：無論洩漏出現在哪裡，都將其堵住。

| 功能 | 標準網頁瀏覽器 | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | iframe 是「網頁中的網頁」。它是您正在造訪的頁面內的一個框，第二個網頁可以藏在其中，並使用普通網頁所能使用的所有追蹤技術。 | Privacy Magic 將其所有保護注入網頁上的每一個 iframe，以確保追蹤器無法透過藏在 iframe 中繞過這些保護。 |
| Service Workers | Service Workers 是一種瀏覽器功能，即使您未連線到網際網路，也允許程式碼在背景執行。不幸的是，這些 Service Workers 很容易洩漏私人資訊。 | Service Workers 在所有網站上通常被停用，以防止無法以其他方式修補的私人資訊洩漏。 |
| Shared Storage | Shared Storage 是一種瀏覽器功能，允許彙總和收集有關您瀏覽的資料。雖然它聲稱注重隱私保護，但該功能引發了強烈的隱私疑慮，並將從瀏覽器中移除。 | Privacy Magic 確保在所有網站上停用 Shared Storage。 |
| Shared Workers | Shared Workers 是在背景執行、並可在網站之間共用的程式碼。 | Privacy Magic 將其保護注入任何網站載入的每一個 Shared Worker。 |
| Web Workers | Web Workers 是在網頁背景執行的程式碼。與主頁面的腳本一樣，Web Worker 程式碼可能洩漏私人資料。 | Privacy Magic 將其保護注入頁面上的每一個 Web Worker，以確保追蹤器無法利用 Web Workers 繞過這些保護。 |

## 隱私訊號 {#privacy-signals}

我們希望盡可能全方位提升您的隱私。因此，Privacy Magic 會傳送訊號，要求您造訪的網站遵循有利於隱私的政策。

| 訊號 | 標準網頁瀏覽器 | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control 是一種可向您造訪的網站傳送的訊號，表明您不希望自己的資料被出售或分享。不幸的是，大多數網頁瀏覽器預設不會傳送 Global Privacy Control 偏好設定。 | Privacy Magic 確保您的瀏覽器在對每個網頁或嵌入資源的每次請求中傳送 Global Privacy Control 標頭。它也會在每個頁面和 iframe 中注入 JavaScript 訊號。 |

## 瀏覽器保護 {#browser-protections}

瀏覽器表現不佳，不僅體現在如何呈現網頁，還體現在如何向母公司或第三方廣告公司傳送資料。Privacy Magic 會停用多種原本會洩漏您私人資訊的不良瀏覽器行為。

### 停用易洩漏的網頁功能 {#disabling-leaky-web-features}

| 功能 | 標準網頁瀏覽器 | Privacy Magic |
| :--- | :--- | :--- |
| 超連結稽核 | 標準瀏覽器具有一項功能，允許網站在您點選連結時向追蹤伺服器傳送「ping」。 | Privacy Magic 停用此 ping。 |
| 第三方 Cookie | 最著名的追蹤功能。Chrome 允許第三方 Cookie，從而使您可以跨網站被追蹤。 | Privacy Magic 預設停用第三方 Cookie。 |
| WebRTC 非代理 UDP | WebRTC 是一種網頁瀏覽器能力，允許您直接與其他網路使用者通訊。不幸的是，如果您使用瀏覽器代理，標準的基於 Chrome 的瀏覽器會將 WebRTC 通訊洩漏到代理之外。 | Privacy Magic 阻止 WebRTC 洩漏，同時仍允許在使用它的網站上正常執行 WebRTC。 |

### 停用侵入性雲端服務 {#disabling-invasive-cloud-services}

| 服務 | 標準網頁瀏覽器 | Privacy Magic |
| :--- | :--- | :--- |
| 備用錯誤頁面 | 預設情況下，當發生錯誤時，Chrome 會顯示備用錯誤頁面。為了顯示這些頁面，有關您正在造訪哪些頁面的資料會被傳送到 Google 的伺服器。 | Privacy Magic 停用這些備用錯誤頁面，從而不傳送任何資料。 |
| Safe Browsing Extended Reporting | 當 Safe Browsing 封鎖某個頁面時，Chrome 可能會將已封鎖頁面的內容傳送到 Google 的伺服器。 | Privacy Magic 阻止此功能，從而不傳送任何資料。 |
| 搜尋建議 | 預設情況下，Chrome 會在您輸入時，將您在網址列中鍵入的任何內容傳送到預設搜尋引擎（通常是 Google 搜尋），以提供自動建議。 | Privacy Magic 阻止這種持續監控，使 Chrome 僅在您按下「Enter」時才傳送搜尋內容。 |
| 拼字服務 | Chrome 提供「增強型拼字檢查」，會將您鍵入的內容傳送到 Google 的伺服器。 | Privacy Magic 停用此選項，並僅允許 Chrome 使用本機的「基本拼字檢查」。 |

### 停用廣告定向 API {#disabling-ad-targeting-apis}

| API | 標準網頁瀏覽器 | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API（以及相關的 Private Aggregation API）會將有關您的瀏覽、您點選的廣告以及其他私人資料傳送到廣告伺服器。 | Privacy Magic 停用這些 API 以保護您的資料。 |
| Protected Audience API | 預設情況下，Chrome 會提供此 API，代表廣告商就您的注意力進行拍賣。 | Privacy Magic 停用此 API，使您的瀏覽資料不會被這樣使用。 |
| Topics API | Chrome 的 Topics API 會向廣告商提供一份據稱您感興趣的主題清單。 | Privacy Magic 停用 Topics API，以保持該資料私密。 |

### 停用易洩漏的 Chrome 設定 {#disabling-leaky-chrome-settings}

Chrome 包含某些與您的隱私相悖的設定：具體來說，是收集您的瀏覽習慣資料並將其傳送到 Google 伺服器的功能。這些設定無法由瀏覽器擴充功能直接控制，但在設定過程中，Privacy Magic 會協助您找到這些設定並自行關閉。

| 設定 | 標準網頁瀏覽器 | Privacy Magic |
| :--- | :--- | :--- |
| 瀏覽紀錄同步 | 當您登入 Chrome 時，它會在裝置之間同步瀏覽紀錄。它也會將相同的資料儲存在 Google 伺服器上。 | Privacy Magic 引導您找到停用瀏覽紀錄同步的設定，以保持瀏覽紀錄私密。 |
| 使用者體驗指標 | Chrome 會悄悄地將您使用瀏覽器的指標傳送回 Google 的伺服器。 | Privacy Magic 協助您阻止這種隱蔽的資料收集。 |
| 依 URL 的資料收集 | 對於您造訪的每個 URL，Chrome 都會收集這些頁面上「匿名化」的瀏覽資料，並將其傳送給 Google。 | Privacy Magic 協助您停用此設定，以防止資料被傳送。 |
