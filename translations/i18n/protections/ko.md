---
title: "보호 기능: 브라우저의 정보 유출을 막다"
description: Privacy Magic가 웹을 탐색할 때 개인정보를 어떻게 보호하는지
backToTop: "↑ 맨 위로"
---

Privacy Magic는 웹을 탐색하는 동안 개인정보를 종합적으로 보호하는 Chrome용 오픈소스 확장 프로그램입니다. 브라우저는 정보가 매우 잘 새어 나가기 때문에, Privacy Magic는 [광고 및 추적기 차단](#blocking-ads-and-trackers), [시스템 정보 보호](#protecting-system-information-fingerprinting), [추적 흔적 제거](#removing-tracking-breadcrumbs), [웹 유출 차단](#stopping-web-leaks), [개인정보 신호 전송](#privacy-signals), [브라우저 보호 기능 적용](#browser-protections)을 포함한 여러 계층의 보호를 제공합니다.

## 광고 및 추적기 차단 {#blocking-ads-and-trackers}

웹 전반에서 광고, 추적 스크립트, 추적 픽셀이 다양한 보이지 않는 방법으로 동의 없이 사용자를 따라다닙니다.

Privacy Magic는 인기 있는 필터 목록을 사용해 브라우저가 네트워크에서 많은 광고와 추적기를 요청하지 못하도록 차단합니다. 필터 목록은 웹 페이지에서 광고가 차단된 뒤 남는 빈 상자도 숨깁니다. Privacy Magic는 이러한 필터 목록의 고정된 버전을 사용하므로, 확장 프로그램의 차단 동작이 완전히 재현 가능하며 모든 사용자에게 동일합니다.

| 필터 목록 | 차단되는 항목 |
| :--- | :--- |
| [EasyList](https://easylist.to/) | 배너, 광고 스크립트, 이미지, 동영상 광고를 포함한 광고. |
| [EasyPrivacy](https://easylist.to/) | 추적 스크립트, 픽셀, 웹 버그 및 기타 정보 수집기를 포함한 추적기. |
| [Fanboy's Annoyance List](https://easylist.to/) | 쿠키 고지, 소셜 미디어 위젯, 페이지 내 팝업 및 기타 방해 요소. |
| [small oisd blocklist](https://oisd.nl/) | 추가 광고 도메인. |

## 시스템 정보 보호 (핑거프린팅) {#protecting-system-information-fingerprinting}

전통적으로 브라우저는 컴퓨터에 대한 방대한 정보를 요청하는 모든 웹사이트나 추적 스크립트에 그대로 유출합니다! 그리고 추적기는 이 데이터를 수집해 웹을 탐색하는 동안 사용자를 추적합니다.

| 핑거프린트 | 일반 웹 브라우저 | Privacy Magic |
| :--- | :--- | :--- |
| Audio | 웹 브라우저의 오디오 처리 기능은 일반적으로 사운드 카드에 대한 정보를 유출합니다. | Privacy Magic는 스크립트가 오디오 데이터를 읽을 때마다 최하위 비트를 지워 이러한 유출을 줄입니다. 이 처리는 청각적으로 영향을 주지 않습니다. |
| Battery | 웹 브라우저는 일반적으로 요청하는 모든 웹사이트에 배터리 잔량, 전원 연결 여부, 배터리가 완전히 방전되기까지 남은 시간 추정치를 알려줍니다. | Privacy Magic는 배터리가 항상 100%이고 전원이 항상 연결된 것처럼 시뮬레이션하여 이 정보 유출을 막습니다. |
| Browser | 웹 페이지는 브라우저에 질의해서 실행 중인 운영체제에 대한 상세 정보를 얻을 수 있습니다. | Privacy Magic는 각 운영체제마다 `navigator.platform`을 단일 값으로 스푸핑합니다. |
| Device | 웹 브라우저는 요청하는 모든 웹사이트에 폴더블 기기 사용 여부를 알려줍니다. | Privacy Magic는 항상 기기가 폴더블이 아니라고 보고합니다. |
| Disk | 웹 브라우저는 일반적으로 웹사이트에 사용 가능한 디스크 공간과 해당 웹사이트가 사용 중인 용량을 유출하며, 이는 컴퓨터의 전체 디스크 공간과 데이터 저장 방식을 드러낼 수 있습니다. | Privacy Magic는 이 값을 모든 사용자에게 동일하도록 스푸핑합니다. |
| Display | 전통적으로 웹 브라우저는 "모션 줄이기 선호" 설정 여부를 포함한 디스플레이 설정을 유출합니다. | Privacy Magic는 이 유출을 막습니다. |
| Fonts | 일반 웹 브라우저는 시스템에 설치된 사용자 지정 글꼴을 유출하여 핑거프린트를 매우 고유하게 만들 수 있습니다. | Privacy Magic는 시스템에 설치된 사용자 지정 글꼴을 모든 스크립트로부터 숨깁니다. 웹 페이지는 표준 시스템 글꼴과 다운로드된 웹 글꼴을 계속 사용할 수 있습니다. |
| Graphics | Canvas와 WebGL은 컴퓨터가 사용하는 GPU(그래픽 칩) 종류를 유출하는 두 가지 주요 핑거프린팅 경로입니다. | Privacy Magic는 고급 기법을 사용해 그래픽 칩을 숨기면서도, 게임을 하거나 그래픽을 많이 쓰는 웹사이트를 계속 이용할 수 있게 합니다. |
| Keyboard | 기본적으로 브라우저는 요청하는 모든 웹사이트에 사용 중인 키보드 레이아웃을 유출합니다. | Privacy Magic는 웹사이트 스크립트에 키보드 레이아웃이 노출되지 않도록 차단합니다. |
| Language | 일반적으로 웹 브라우저는 사용자가 승인한 언어 목록을 유출합니다. 방문하는 웹사이트의 선호 언어를 지정할 수 있는 것은 중요하지만, 브라우저는 보통 선호 언어 목록 전체를 드러내며 이는 너무 많은 정보를 노출할 수 있습니다. | Privacy Magic는 방문하는 웹사이트에 단일 언어만 전달되도록 합니다. |
| Math | 웹 페이지의 추적 스크립트는 기기에서 코사인이나 쌍곡탄젠트 같은 Math 함수의 독특한 동작을 이용해 다른 웹 사용자와 구분할 수 있습니다. | Privacy Magic는 JavaScript Math 함수를 패치하여 모든 플랫폼에서 동일하게 동작하도록 만듭니다. |
| Memory | 웹사이트는 대부분의 브라우저에서 컴퓨터의 미사용 메모리 양을 알아낼 수 있습니다. | Privacy Magic는 시스템의 사용 가능 메모리 양을 웹 페이지와 추적기로부터 숨깁니다. |
| Network | 브라우저는 보통 사용 중인 네트워크 연결 종류에 대한 세부 정보를 유출합니다. | Privacy Magic는 이러한 세부 정보를 모든 사용자에게 동일하게 만들어 유출을 막습니다. |
| Processor | 브라우저는 컴퓨터 프로세서의 코어 수를 보고하도록 설계되어 있습니다. | Privacy Magic는 모든 사용자가 정확히 `4`개의 코어를 가진 것처럼 보이게 합니다. |
| Screen | 웹 브라우저는 브라우저 창 크기와 관계없이 요청하는 모든 웹사이트에 화면 크기를 유출합니다. | Privacy Magic는 실제 화면 크기를 숨깁니다. |
| Time Zone | 웹 브라우저는 스크립트가 시간대를 요청할 때 대략적인 위치를 유출합니다. 예를 들어 중부유럽 표준시에 있다면, 브라우저는 파리, 베를린, 룩셈부르크 또는 수십 개 도시 중 어디에 있는지를 나타내는 시간대 식별자를 제공합니다. | Privacy Magic는 시간대를 통합하여 각 시간대 오프셋마다 하나의 대표 시간대만 사용합니다. 그렇게 하면 브라우저가 지구상에서의 위치에 대한 불필요한 정보를 유출하지 않습니다. |
| Timing | 고정밀 타이밍 API는 브라우저 동작 타이밍의 미세한 차이를 측정해 시스템을 특성화할 수 있게 합니다. | Privacy Magic는 이러한 API가 제공하는 시간을 반올림하여, 추적 스크립트가 브라우저를 구분하기 훨씬 어렵게 만듭니다. |
| Touch | Touch API는 기기에 터치가 있는지, 그리고 허용되는 터치 포인트 수를 유출합니다. | Privacy Magic는 이 정보를 웹사이트로부터 숨깁니다. |

## 추적 흔적 제거 {#removing-tracking-breadcrumbs}

일부 브라우저 기능은 방문하는 여러 웹사이트에 브라우징 기록의 일부("빵 부스러기")를 공유하는 데 악용될 수 있습니다. Privacy Magic는 이러한 기능을 강화하여 유출을 줄입니다.

| 흔적 | 일반 웹 브라우저 | Privacy Magic |
| :--- | :--- | :--- |
| Cache Leaks | 브라우저는 로컬 캐시에 데이터를 저장하므로, 페이지를 방문하거나 다시 볼 때 데이터를 다시 로드할 필요가 없습니다. 안타깝게도 이러한 캐시는 때로 유출되어 방문하는 웹사이트에 브라우징 기록에 대한 정보를 드러냅니다. | Privacy Magic는 취약한 캐시를 지워 이러한 유출이 일어나지 않도록 합니다. |
| Referrer Policy | 전통적으로 브라우저는 방문하는 각 웹 페이지에 이전 페이지가 어디였는지를 알려줍니다! | Privacy Magic는 리퍼러에서 정확한 페이지(또는 경로)를 삭제하고, 웹 호환성을 위해 도메인만 공유되도록 허용합니다. |
| Tracking Parameters | 추적기는 방문하는 웹 페이지 주소에 추가 "추적 매개변수"를 붙여, 광고주가 누구인지 또는 어디서 브라우징했는지 추적할 수 있게 합니다. | Privacy Magic는 웹 주소에서 알려진 추적 매개변수를 삭제하여, 이 정보가 방문하는 웹사이트와 공유되지 않도록 합니다. |
| Window Name | 일반적으로 `window.name` JavaScript API는 같은 탭에서 웹사이트 간에 이동할 때 데이터를 유출합니다. | Privacy Magic는 웹사이트마다 별도의 `window.name`을 강제하여 이 유출을 막습니다. |

## 웹 유출 차단 {#stopping-web-leaks}

웹 브라우저는 복잡한 시스템입니다! 개인정보 유출은 여러 브라우저 기능에서 발생할 수 있습니다. Privacy Magic의 접근 방식은 발견되는 모든 유출을 막는 것입니다.

| 기능 | 일반 웹 브라우저 | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | iframe은 "웹 페이지 안의 웹 페이지"입니다. 방문 중인 페이지 안의 상자로, 두 번째 웹 페이지가 숨어서 일반 웹 페이지와 동일한 추적 기법을 모두 사용할 수 있습니다. | Privacy Magic는 웹 페이지의 모든 iframe에 보호 기능을 주입하여, 추적기가 iframe 안에 숨어 보호를 우회하지 못하도록 합니다. |
| Service Workers | Service Workers는 인터넷에 연결되어 있지 않을 때도 백그라운드에서 코드가 실행되도록 하는 브라우저 기능입니다. 안타깝게도 이러한 Service Workers는 개인정보를 쉽게 유출할 수 있습니다. | 다른 방법으로 패치할 수 없는 개인정보 유출을 막기 위해, 일반적으로 모든 사이트에서 Service Workers를 비활성화합니다. |
| Shared Storage | Shared Storage는 브라우징에 대한 데이터를 집계하고 수집할 수 있게 하는 브라우저 기능입니다. 개인정보를 보호한다고 주장되었지만, 이 기능은 심각한 개인정보 우려를 불러일으켰으며 브라우저에서 제거될 예정입니다. | Privacy Magic는 모든 웹사이트에서 Shared Storage가 비활성화되도록 합니다. |
| Shared Workers | Shared Workers는 백그라운드에서 실행되며 웹사이트 간에 공유될 수 있는 코드입니다. | Privacy Magic는 어떤 웹사이트가 로드하는 모든 Shared Worker에 보호 기능을 주입합니다. |
| Web Workers | Web Workers는 웹 페이지에서 백그라운드로 실행되는 코드입니다. 메인 페이지의 스크립트처럼, 웹 워커 코드도 개인 데이터를 유출할 수 있습니다. | Privacy Magic는 페이지의 모든 Web Worker에 보호 기능을 주입하여, 추적기가 Web Workers를 사용해 보호를 우회하지 못하도록 합니다. |

## 개인정보 신호 {#privacy-signals}

가능한 모든 방식으로 개인정보를 개선하는 데 관심이 있습니다. 그래서 Privacy Magic는 방문하는 웹사이트에 개인정보 친화적 정책을 요구하는 신호를 보냅니다.

| 신호 | 일반 웹 브라우저 | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control은 방문하는 웹사이트에 데이터 판매 또는 공유를 원하지 않는다는 뜻을 알릴 수 있는 신호입니다. 안타깝게도 대부분의 웹 브라우저는 기본적으로 Global Privacy Control 설정을 보내지 않습니다. | Privacy Magic는 브라우저가 모든 웹 페이지나 임베디드 리소스에 대한 모든 요청과 함께 Global Privacy Control 헤더를 보내도록 합니다. 또한 모든 페이지와 iframe에 JavaScript 신호도 주입합니다. |

## 브라우저 보호 기능 {#browser-protections}

브라우저는 웹 페이지를 렌더링하는 방식뿐 아니라, 모회사나 제3자 광고 회사에 데이터를 보내는 방식에서도 문제가 있습니다. Privacy Magic는 그렇지 않으면 개인정보를 유출할 여러 가지 나쁜 브라우저 동작을 비활성화합니다.

### 유출이 있는 웹 기능 비활성화 {#disabling-leaky-web-features}

| 기능 | 일반 웹 브라우저 | Privacy Magic |
| :--- | :--- | :--- |
| Hyperlink Auditing | 일반 브라우저에는 클릭한 링크로 추적 서버에 "핑"을 보낼 수 있는 기능이 있습니다. | Privacy Magic는 이 핑을 비활성화합니다. |
| Third-Party Cookies | 가장 유명한 추적 기능입니다. Chrome은 사이트 간에 추적을 가능하게 하는 타사 쿠키를 허용합니다. | Privacy Magic는 기본적으로 타사 쿠키를 비활성화합니다. |
| WebRTC non-proxied UDP | WebRTC는 다른 웹 사용자와 직접 통신할 수 있게 하는 웹 브라우저 기능입니다. 안타깝게도 브라우저 프록시를 사용하는 경우, 일반 Chrome 기반 브라우저는 WebRTC 통신을 프록시 밖으로 유출합니다. | Privacy Magic는 WebRTC 유출을 차단하면서도, WebRTC를 사용하는 웹사이트에서는 기능이 계속 작동하도록 합니다. |

### 침해적인 클라우드 서비스 비활성화 {#disabling-invasive-cloud-services}

| 서비스 | 일반 웹 브라우저 | Privacy Magic |
| :--- | :--- | :--- |
| Alternate Error Pages | 기본적으로 Chrome은 오류가 발생하면 대체 오류 페이지를 표시합니다. 이 페이지를 표시하기 위해 방문 중인 페이지에 대한 데이터가 Google 서버로 전송됩니다. | Privacy Magic는 이 대체 오류 페이지를 비활성화하여 데이터가 전송되지 않도록 합니다. |
| Safe Browsing Extended Reporting | Safe Browsing이 페이지를 차단할 때, Chrome은 차단된 페이지의 내용을 Google 서버로 보낼 수 있습니다. | Privacy Magic는 이 기능을 차단하여 데이터가 전송되지 않도록 합니다. |
| Search Suggest | 기본적으로 Chrome은 입력하는 동안 주소창에 입력한 내용을 기본 검색 엔진(보통 Google 검색)으로 보내 자동 제안을 만듭니다. | Privacy Magic는 이 지속적인 모니터링을 차단하여, "enter"를 누를 때만 Chrome이 검색어를 보내도록 합니다. |
| Spelling Service | Chrome은 입력한 내용을 Google 서버로 보내는 "향상된 맞춤법 검사"를 제공합니다. | Privacy Magic는 이 옵션을 비활성화하고, Chrome이 로컬 "기본 맞춤법 검사"만 사용하도록 허용합니다. |

### 광고 타겟팅 API 비활성화 {#disabling-ad-targeting-apis}

| API | 일반 웹 브라우저 | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API(및 관련 Private Aggregation API)는 브라우징, 클릭한 광고 및 기타 개인 데이터를 광고 서버로 보냅니다. | Privacy Magic는 데이터를 보호하기 위해 이러한 API를 비활성화합니다. |
| Protected Audience API | 기본적으로 이 API는 Chrome이 광고주를 위해 사용자의 관심에 대한 경매를 실행할 수 있게 합니다. | Privacy Magic는 브라우징 데이터가 이런 방식으로 사용되지 않도록 이 API를 비활성화합니다. |
| Topics API | Chrome의 Topics API는 광고주에게 사용자가 관심 있을 것으로 추정되는 주제 목록을 제공합니다. | Privacy Magic는 해당 데이터를 비공개로 유지하기 위해 Topics API를 비활성화합니다. |

### 유출이 있는 Chrome 설정 비활성화 {#disabling-leaky-chrome-settings}

Chrome에는 개인정보에 반하는 특정 설정이 있습니다. 구체적으로, 브라우징 습관에 대한 데이터를 수집해 Google 서버로 보내는 기능입니다. 이러한 설정은 브라우저 확장 프로그램이 직접 제어할 수 없지만, 설정 과정에서 Privacy Magic가 해당 설정을 찾아 직접 끄도록 도와줍니다.

| 설정 | 일반 웹 브라우저 | Privacy Magic |
| :--- | :--- | :--- |
| History syncing | Chrome에 로그인한 상태이면 기기 간에 브라우징 기록을 동기화합니다. 또한 동일한 데이터를 Google 서버에 저장합니다. | Privacy Magic는 브라우징 기록을 비공개로 유지하기 위해 기록 동기화를 끄는 설정으로 안내합니다. |
| User experience metrics | Chrome은 브라우저 사용에 대한 측정 항목을 Google 서버로 조용히 보냅니다. | Privacy Magic는 이 숨겨진 데이터 수집을 차단하도록 도와줍니다. |
| Per-URL data collection | 방문하는 모든 URL에 대해 Chrome은 해당 페이지에서의 브라우징에 대한 "익명화된" 데이터를 수집해 Google로 보냅니다. | Privacy Magic는 이 설정을 비활성화하여 데이터가 전송되지 않도록 도와줍니다. |
