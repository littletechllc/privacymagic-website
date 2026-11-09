---
title: "Proteções: tapando os vazamentos do seu navegador"
description: Como o Privacy Magic protege sua privacidade enquanto você navega na web
backToTop: "↑ Voltar ao topo"
---

Privacy Magic é uma extensão de código aberto para o Chrome que protege de forma abrangente sua privacidade enquanto você navega na web. Os navegadores vazam muita informação, por isso o Privacy Magic oferece várias camadas de proteção, incluindo [bloqueio de anúncios e rastreadores](#blocking-ads-and-trackers), [proteção de informações do sistema](#protecting-system-information-fingerprinting), [remoção de rastros de rastreamento](#removing-tracking-breadcrumbs), [interrupção de vazamentos na web](#stopping-web-leaks), [envio de sinais de privacidade](#privacy-signals) e [aplicação de proteções do navegador](#browser-protections).

## Bloqueio de anúncios e rastreadores {#blocking-ads-and-trackers}

Em toda a web, anúncios, scripts de rastreamento e pixels de rastreamento seguem você sem o seu consentimento, usando uma variedade de métodos invisíveis.

Privacy Magic usa listas de filtros populares para impedir que muitos anúncios e rastreadores sejam solicitados pelo seu navegador na rede. As listas de filtros também ocultam as caixas vazias que restam quando os anúncios são bloqueados em uma página. Privacy Magic usa uma versão fixa dessas listas de filtros para que o comportamento de bloqueio da extensão seja totalmente reproduzível e idêntico para cada usuário.

| Lista de filtros | Itens bloqueados |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Anúncios, incluindo banners, scripts de anúncio, imagens e anúncios em vídeo. |
| [EasyPrivacy](https://easylist.to/) | Rastreadores, incluindo scripts de rastreamento, pixels, web bugs e outros coletores de informação. |
| [Fanboy's Annoyance List](https://easylist.to/) | Avisos de cookies, widgets de redes sociais, pop-ups na página e outros incômodos. |
| [small oisd blocklist](https://oisd.nl/) | Domínios publicitários adicionais. |

## Proteção de informações do sistema (fingerprinting) {#protecting-system-information-fingerprinting}

Tradicionalmente, os navegadores vazam grandes quantidades de informação sobre o seu computador para qualquer site ou script de rastreamento que peça! E os rastreadores reunem esses dados para acompanhar você enquanto navega na web.

| Impressão digital | Navegadores web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Áudio | A funcionalidade de processamento de áudio dos navegadores normalmente vaza informação sobre a sua placa de som. | Privacy Magic reduz esses vazamentos apagando o bit menos significativo dos dados de áudio sempre que um script os lê. Essa remoção não tem efeitos audíveis. |
| Bateria | Os navegadores normalmente informam a qualquer site que pergunte o nível da bateria, se o dispositivo está plugado na tomada e uma estimativa de quanto tempo resta até a bateria acabar. | Privacy Magic interrompe esse vazamento simulando uma bateria sempre em 100% e uma fonte de energia sempre conectada. |
| Navegador | Uma página web pode interrogar o seu navegador para obter informações detalhadas sobre o sistema operacional em que ele está sendo executado. | Privacy Magic falsifica `navigator.platform` para um único valor em cada sistema operacional diferente. |
| Dispositivo | Os navegadores informam a qualquer site que pergunte se você está usando um dispositivo dobrável. | Privacy Magic sempre informa que o seu dispositivo não é dobrável. |
| Disco | Os navegadores normalmente vazam a quantidade de espaço em disco disponível para o site e quanto esse site está usando, o que pode revelar o espaço total em disco do seu computador e a forma como os dados são armazenados. | Privacy Magic falsifica esses valores para que sejam iguais para todos. |
| Tela | Tradicionalmente, os navegadores vazam configurações de exibição, inclusive se o sistema está definido para "preferir movimento reduzido". | Privacy Magic impede esse vazamento. |
| Fontes | Os navegadores padrão vazam quais fontes personalizadas você tem instaladas no sistema, o que pode tornar a sua impressão digital muito única. | Privacy Magic oculta das scripts as fontes personalizadas instaladas no seu sistema. As páginas web podem continuar usando fontes padrão do sistema e fontes web baixadas. |
| Gráficos | Canvas e WebGL são dois grandes vetores de fingerprinting que vazam o tipo de GPU (chip gráfico) que o seu computador está usando. | Privacy Magic usa técnicas avançadas para ocultar o chip gráfico, permitindo que você continue jogando e usando outros sites que fazem uso intenso de gráficos. |
| Teclado | Por padrão, os navegadores vazam o layout do teclado que você está usando para qualquer site que pergunte. | Privacy Magic impede que o layout do teclado seja revelado a scripts de sites. |
| Idioma | Normalmente, os navegadores vazam uma lista de idiomas que você aprovou. Embora seja importante poder especificar qual idioma você prefere nos sites que visita, os navegadores tipicamente revelam uma lista dos idiomas preferidos do usuário, o que pode ser excessivamente revelador. | Privacy Magic permite que apenas um único idioma seja enviado aos sites que você visita. |
| Matemática | Scripts de rastreamento em páginas web podem usar o comportamento peculiar de funções Math, como cosseno ou tangente hiperbólica, no seu dispositivo para diferenciá-lo de outros usuários da web. | Privacy Magic corrige as funções Math do JavaScript para que se comportem de forma idêntica em todas as plataformas. |
| Memória | Os sites conseguem descobrir, na maioria dos navegadores, quanta memória está disponível no seu computador. | Privacy Magic oculta das páginas e dos rastreadores a quantidade de memória disponível no seu sistema. |
| Rede | Os navegadores normalmente vazam detalhes sobre o tipo de conexão de rede que você tem. | Privacy Magic impede que esses detalhes vazem, tornando-os homogêneos para todos os usuários. |
| Processador | Os navegadores são projetados para informar o número de núcleos do processador do seu computador. | Privacy Magic finge que todos têm exatamente `4`. |
| Tela (dimensões) | Os navegadores vazam as dimensões da sua tela para qualquer site que pergunte, independentemente do tamanho da janela do navegador. | Privacy Magic oculta o tamanho real da tela. |
| Fuso horário | Os navegadores vazam a sua localização aproximada quando scripts pedem o fuso horário. Por exemplo, se você estiver no Horário da Europa Central, o navegador fornecerá um identificador de fuso horário que indica se você está em Paris, Berlim, Luxemburgo ou em dezenas de outras cidades. | Privacy Magic consolida os fusos horários para que cada deslocamento de fuso tenha um único fuso representante. Assim, o navegador não vaza informação desnecessária sobre a sua localização no planeta. |
| Temporização | APIs de temporização de alta resolução permitem que scripts caracterizem o seu sistema medindo diferenças mínimas no tempo de comportamentos do navegador. | Privacy Magic arredonda os tempos fornecidos por essas APIs para tornar bem mais difícil que scripts de rastreamento as usem para distinguir navegadores. |
| Toque | A Touch API vaza se o seu dispositivo tem toque e quantos pontos de toque permite. | Privacy Magic oculta essa informação dos sites. |

## Remoção de rastros de rastreamento {#removing-tracking-breadcrumbs}

Alguns recursos do navegador são vulneráveis a serem usados para compartilhar partes do seu histórico de navegação ("rastros") com diferentes sites que você visita. Privacy Magic reforça esses recursos para que vazem menos.

| Rastro | Navegadores web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Vazamentos de cache | Os navegadores armazenam dados em caches locais para que, ao visitar uma página ou visualizá-la uma segunda vez, esses dados não precisem ser carregados de novo. Infelizmente, esses caches às vezes vazam e revelam algo sobre o seu histórico de navegação a um site que você visita. | Privacy Magic limpa caches vulneráveis para que esses vazamentos não possam ocorrer. |
| Política de referenciador | Tradicionalmente, os navegadores informam a cada página que você visita de qual página você veio! | Privacy Magic remove a página (ou o caminho) exata no referenciador e, por compatibilidade web, permite apenas o compartilhamento do domínio. |
| Parâmetros de rastreamento | Rastreadores podem adicionar "parâmetros de rastreamento" extras aos endereços das páginas que você visita, para que anunciantes acompanhem quem você é ou onde tem navegado. | Privacy Magic remove parâmetros de rastreamento conhecidos dos endereços web para que essa informação não seja compartilhada com os sites que você visita. |
| Nome da janela | Normalmente, a API JavaScript `window.name` vaza dados se você navegar entre sites na mesma aba. | Privacy Magic impede esse vazamento impondo um `window.name` separado para cada site. |

## Interrupção de vazamentos na web {#stopping-web-leaks}

Os navegadores web são criaturas complicadas! Vazamentos de informação privada podem surgir de muitos recursos diferentes. A abordagem do Privacy Magic é tapar os vazamentos onde quer que sejam encontrados.

| Recurso | Navegadores web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Um iframe é uma "página web dentro de uma página web". É uma caixa dentro da página que você está visitando, onde uma segunda página pode se esconder e usar todas as mesmas técnicas de rastreamento que uma página normal. | Privacy Magic injeta todas as suas proteções em cada iframe de uma página, para garantir que um rastreador não possa contornar essas proteções se escondendo dentro de um iframe. |
| Service Workers | Service Workers são um recurso do navegador que permite que código seja executado em segundo plano mesmo quando você não está conectado à internet. Infelizmente, esses Service Workers conseguem facilmente vazar informação privada. | Service Workers são geralmente desativados em todos os sites, para impedir vazamentos de informação privada que não podem ser corrigidos de outra forma. |
| Shared Storage | Shared Storage é um recurso do navegador que permite agregar e coletar dados sobre a sua navegação. Embora tenha sido apresentado como preservador de privacidade, esse recurso levantou fortes preocupações de privacidade e deve ser removido dos navegadores. | Privacy Magic garante que Shared Storage esteja desativado em todos os sites. |
| Shared Workers | Shared Workers são código que é executado em segundo plano e pode ser compartilhado entre sites. | Privacy Magic injeta suas proteções em cada Shared Worker carregado por qualquer site. |
| Web Workers | Web Workers são código que é executado em segundo plano em uma página web. Como os scripts da página principal, o código de web workers pode vazar dados privados. | Privacy Magic injeta suas proteções em cada Web Worker de uma página, para garantir que rastreadores não usem Web Workers para contornar essas proteções. |

## Sinais de privacidade {#privacy-signals}

Queremos melhorar a sua privacidade de todas as formas possíveis. Por isso, o Privacy Magic envia um sinal para exigir políticas pró-privacidade dos sites que você visita.

| Sinal | Navegadores web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | O Global Privacy Control é um sinal que pode ser enviado aos sites que você visita para indicar que você não quer que seus dados sejam vendidos ou compartilhados. Infelizmente, a maioria dos navegadores não envia a preferência Global Privacy Control por padrão. | Privacy Magic garante que o seu navegador envie o cabeçalho Global Privacy Control em cada solicitação a cada página ou recurso incorporado. Também injeta um sinal JavaScript em cada página e iframe. |

## Proteções do navegador {#browser-protections}

Os navegadores se comportam mal não apenas na forma como renderizam páginas, mas também na forma como enviam dados à empresa controladora ou a empresas de publicidade terceiras. Privacy Magic desativa uma variedade de comportamentos ruins do navegador que, de outra forma, vazariam a sua informação privada.

### Desativação de recursos web que vazam {#disabling-leaky-web-features}

| Recurso | Navegadores web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Auditoria de hiperlinks | Os navegadores padrão têm um recurso que permite que sites "pinguem" um servidor de rastreamento com os links em que você clica. | Privacy Magic desativa esse ping. |
| Cookies de terceiros | O recurso de rastreamento mais famoso de todos. O Chrome permite cookies de terceiros que permitem que você seja rastreado de site em site. | Privacy Magic desativa cookies de terceiros por padrão. |
| WebRTC UDP sem proxy | WebRTC é um recurso do navegador que permite comunicar-se diretamente com outros usuários da web. Infelizmente, se você estiver usando um proxy no navegador, os navegadores baseados em Chrome padrão vazam comunicações WebRTC fora do proxy. | Privacy Magic bloqueia os vazamentos de WebRTC, permitindo ainda que o WebRTC funcione nos sites que o usam. |

### Desativação de serviços em nuvem invasivos {#disabling-invasive-cloud-services}

| Serviço | Navegadores web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Páginas de erro alternativas | Por padrão, o Chrome mostra páginas de erro alternativas quando ocorre um erro. Para exibir essas páginas, dados sobre as páginas que você visita são enviados aos servidores do Google. | Privacy Magic desativa essas páginas de erro alternativas para que nenhum dado seja enviado. |
| Safe Browsing Extended Reporting | Quando o Safe Browsing bloqueia uma página, o Chrome pode enviar o conteúdo de uma página bloqueada aos servidores do Google. | Privacy Magic bloqueia esse recurso, para que nenhum dado seja enviado. |
| Sugestões de pesquisa | Por padrão, o Chrome envia tudo o que você digita na barra de endereços ao seu mecanismo de busca padrão (tipicamente a busca do Google) enquanto você digita, para gerar sugestões automáticas. | Privacy Magic bloqueia esse monitoramento contínuo, para que o Chrome só envie a sua busca quando você pressionar "Enter". |
| Serviço de ortografia | O Chrome oferece uma "verificação ortográfica aprimorada" que envia o que você digita aos servidores do Google. | Privacy Magic desativa essa opção e permite que o Chrome use apenas a "verificação ortográfica básica" local. |

### Desativação de APIs de segmentação de anúncios {#disabling-ad-targeting-apis}

| API | Navegadores web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | A Ad Measurement API (e a Private Aggregation API relacionada) envia dados sobre a sua navegação, os anúncios em que você clica e outros dados privados a servidores de publicidade. | Privacy Magic desativa essas APIs para proteger os seus dados. |
| Protected Audience API | Por padrão, essa API é disponibilizada pelo Chrome para realizar um leilão pela sua atenção em nome de anunciantes. | Privacy Magic desativa essa API para que os seus dados de navegação não sejam usados dessa forma. |
| Topics API | A Topics API do Chrome dá aos anunciantes uma lista de tópicos que supostamente interessam a você. | Privacy Magic desativa a Topics API para manter esses dados privados. |

### Desativação de configurações do Chrome que vazam {#disabling-leaky-chrome-settings}

O Chrome contém certas configurações antiteticas à sua privacidade: especificamente, funcionalidades que coletam dados sobre os seus hábitos de navegação e os enviam aos servidores do Google. Essas configurações não podem ser controladas diretamente por uma extensão do navegador, mas durante a configuração o Privacy Magic ajuda você a encontrar as configurações e desativá-las você mesmo.

| Configuração | Navegadores web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Sincronização do histórico | Quando você está conectado ao Chrome, ele sincroniza o seu histórico de navegação entre dispositivos. Também salva esses mesmos dados nos servidores do Google. | Privacy Magic orienta você até a configuração que desativa a sincronização do histórico para manter o seu histórico de navegação privado. |
| Métricas de experiência do usuário | O Chrome envia silenciosamente métricas sobre o seu uso do navegador de volta aos servidores do Google. | Privacy Magic ajuda você a bloquear essa coleta oculta de dados. |
| Coleta de dados por URL | Para cada URL que você visita, o Chrome coleta dados "anonimizados" sobre a sua navegação nessas páginas e os envia ao Google. | Privacy Magic ajuda você a desativar essa configuração para impedir que os dados sejam enviados. |
