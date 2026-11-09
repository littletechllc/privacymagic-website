---
title: "Proteções: a tapar as fugas do seu browser"
description: Como o Privacy Magic protege a sua privacidade enquanto navega na web
backToTop: "↑ Voltar ao topo"
---

Privacy Magic é uma extensão de código aberto para o Chrome que protege de forma abrangente a sua privacidade enquanto navega na web. Os browsers têm muitas fugas de informação, por isso o Privacy Magic oferece várias camadas de proteção, incluindo [bloqueio de anúncios e rastreadores](#blocking-ads-and-trackers), [proteção de informações do sistema](#protecting-system-information-fingerprinting), [remoção de rasto de rastreamento](#removing-tracking-breadcrumbs), [interrupção de fugas na web](#stopping-web-leaks), [envio de sinais de privacidade](#privacy-signals) e [aplicação de proteções do browser](#browser-protections).

## Bloqueio de anúncios e rastreadores {#blocking-ads-and-trackers}

Em toda a web, anúncios, scripts de rastreamento e píxeis de rastreamento seguem-no sem o seu consentimento, recorrendo a uma variedade de métodos invisíveis.

Privacy Magic utiliza listas de filtros populares para impedir que muitos anúncios e rastreadores sejam pedidos pelo seu browser na rede. As listas de filtros também ocultam as caixas vazias que ficam quando os anúncios são bloqueados numa página. Privacy Magic utiliza uma versão fixa destas listas de filtros para que o comportamento de bloqueio da extensão seja totalmente reproduzível e idêntico para cada utilizador.

| Lista de filtros | Itens bloqueados |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Anúncios, incluindo banners, scripts de anúncio, imagens e anúncios em vídeo. |
| [EasyPrivacy](https://easylist.to/) | Rastreadores, incluindo scripts de rastreamento, píxeis, web bugs e outros colectores de informação. |
| [Fanboy's Annoyance List](https://easylist.to/) | Avisos de cookies, widgets de redes sociais, pop-ups na página e outros incómodos. |
| [small oisd blocklist](https://oisd.nl/) | Domínios publicitários adicionais. |

## Proteção de informações do sistema (fingerprinting) {#protecting-system-information-fingerprinting}

Tradicionalmente, os browsers deixam escapar grandes quantidades de informação sobre o seu computador para qualquer site ou script de rastreamento que pergunte! E os rastreadores reúnem estes dados para o acompanhar enquanto navega na web.

| Impressão digital | Browsers web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Áudio | A funcionalidade de processamento de áudio dos browsers normalmente deixa escapar informação sobre a sua placa de som. | Privacy Magic reduz estas fugas ao apagar o bit menos significativo dos dados de áudio sempre que um script os lê. Esta remoção não tem efeitos audíveis. |
| Bateria | Os browsers normalmente informam qualquer site que pergunte qual é o nível da bateria, se o dispositivo está ligado à corrente e uma estimativa de quanto tempo resta até a bateria se esgotar. | Privacy Magic interrompe esta fuga ao simular uma bateria sempre a 100% e uma fonte de alimentação sempre ligada. |
| Browser | Uma página web pode interrogar o seu browser para obter informação detalhada sobre o sistema operativo em que está a ser executado. | Privacy Magic falsifica `navigator.platform` para um único valor em cada sistema operativo diferente. |
| Dispositivo | Os browsers informam qualquer site que pergunte se está a utilizar um dispositivo dobrável. | Privacy Magic indica sempre que o seu dispositivo não é dobrável. |
| Disco | Os browsers normalmente deixam escapar a quantidade de espaço em disco disponível para o site e quanto esse site está a utilizar, o que pode revelar o espaço total em disco do seu computador e a forma como os dados são armazenados. | Privacy Magic falsifica estes valores para que sejam iguais para todos. |
| Ecrã | Tradicionalmente, os browsers deixam escapar definições de visualização, incluindo se o sistema está configurado para "preferir movimento reduzido". | Privacy Magic impede esta fuga. |
| Tipos de letra | Os browsers padrão deixam escapar que tipos de letra personalizados tem instalados no sistema, o que pode tornar a sua impressão digital muito única. | Privacy Magic oculta dos scripts os tipos de letra personalizados instalados no seu sistema. As páginas web podem continuar a utilizar tipos de letra padrão do sistema e tipos de letra web descarregados. |
| Gráficos | Canvas e WebGL são dois grandes vectores de fingerprinting que deixam escapar o tipo de GPU (chip gráfico) que o seu computador está a utilizar. | Privacy Magic utiliza técnicas avançadas para ocultar o chip gráfico, permitindo-lhe continuar a jogar e a utilizar outros sites que fazem uso intensivo de gráficos. |
| Teclado | Por predefinição, os browsers deixam escapar o esquema de teclado que está a utilizar para qualquer site que pergunte. | Privacy Magic impede que o esquema de teclado seja revelado a scripts de sites. |
| Idioma | Tipicamente, os browsers deixam escapar uma lista de idiomas que aprovou. Embora seja importante poder especificar que idioma prefere nos sites que visita, os browsers revelam tipicamente uma lista dos idiomas preferidos do utilizador, o que pode ser demasiado revelador. | Privacy Magic permite que apenas um único idioma seja passado aos sites que visita. |
| Matemática | Scripts de rastreamento em páginas web podem utilizar o comportamento peculiar de funções Math, como o cosseno ou a tangente hiperbólica, no seu dispositivo para o distinguir de outros utilizadores da web. | Privacy Magic corrige as funções Math do JavaScript para que se comportem de forma idêntica em todas as plataformas. |
| Memória | Os sites conseguem descobrir, na maioria dos browsers, quanta memória está disponível no seu computador. | Privacy Magic oculta das páginas e dos rastreadores a quantidade de memória disponível no seu sistema. |
| Rede | Os browsers normalmente deixam escapar detalhes sobre o tipo de ligação de rede que tem. | Privacy Magic impede que estes detalhes escapem, tornando-os homogéneos para todos os utilizadores. |
| Processador | Os browsers são concebidos para reportar o número de núcleos do processador do seu computador. | Privacy Magic finge que todos têm exactamente `4`. |
| Ecrã (dimensões) | Os browsers deixam escapar as dimensões do seu ecrã para qualquer site que pergunte, independentemente do tamanho da janela do browser. | Privacy Magic oculta o tamanho real do ecrã. |
| Fuso horário | Os browsers deixam escapar a sua localização aproximada quando scripts pedem o fuso horário. Por exemplo, se estiver no Horário da Europa Central, o browser fornecerá um identificador de fuso horário que indica se está em Paris, Berlim, Luxemburgo ou em dezenas de outras cidades. | Privacy Magic consolida os fusos horários para que cada desvio de fuso tenha um único fuso representante. Assim, o browser não deixa escapar informação desnecessária sobre a sua localização no planeta. |
| Temporização | As APIs de temporização de alta resolução permitem que scripts caracterizem o seu sistema ao medir diferenças mínimas no tempo de comportamentos do browser. | Privacy Magic arredonda os tempos fornecidos por estas APIs para tornar bem mais difícil que scripts de rastreamento as utilizem para distinguir browsers. |
| Toque | A Touch API deixa escapar se o seu dispositivo tem toque e quantos pontos de toque permite. | Privacy Magic oculta esta informação dos sites. |

## Remoção de rasto de rastreamento {#removing-tracking-breadcrumbs}

Alguns recursos do browser são vulneráveis a serem utilizados para partilhar partes do seu histórico de navegação ("rasto") com diferentes sites que visita. Privacy Magic reforça estes recursos para que tenham menos fugas.

| Rasto | Browsers web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Fugas de cache | Os browsers armazenam dados em caches locais para que, ao visitar uma página ou visualizá-la uma segunda vez, esses dados não precisem de ser carregados de novo. Infelizmente, esses caches têm por vezes fugas e revelam algo sobre o seu histórico de navegação a um site que visita. | Privacy Magic limpa caches vulneráveis para que estas fugas não possam ocorrer. |
| Política de referenciador | Tradicionalmente, os browsers informam cada página que visita de que página veio! | Privacy Magic remove a página (ou o caminho) exacta no referenciador e, por compatibilidade web, permite apenas a partilha do domínio. |
| Parâmetros de rastreamento | Os rastreadores podem acrescentar "parâmetros de rastreamento" extra aos endereços das páginas que visita, para que os anunciantes acompanhem quem é ou onde tem navegado. | Privacy Magic remove parâmetros de rastreamento conhecidos dos endereços web para que esta informação não seja partilhada com os sites que visita. |
| Nome da janela | Normalmente, a API JavaScript `window.name` deixa escapar dados se navegar entre sites no mesmo separador. | Privacy Magic impede esta fuga ao impor um `window.name` separado para cada site. |

## Interrupção de fugas na web {#stopping-web-leaks}

Os browsers web são criaturas complicadas! As fugas de informação privada podem surgir de muitos recursos diferentes. A abordagem do Privacy Magic é tapar as fugas onde quer que sejam encontradas.

| Recurso | Browsers web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Um iframe é uma "página web dentro de uma página web". É uma caixa dentro da página que está a visitar, onde uma segunda página se pode esconder e utilizar todas as mesmas técnicas de rastreamento que uma página normal. | Privacy Magic injecta todas as suas proteções em cada iframe de uma página, para garantir que um rastreador não possa contornar essas proteções escondendo-se dentro de um iframe. |
| Service Workers | Service Workers são um recurso do browser que permite que código seja executado em segundo plano mesmo quando não está ligado à Internet. Infelizmente, estes Service Workers conseguem facilmente deixar escapar informação privada. | Os Service Workers são geralmente desactivados em todos os sites, para impedir fugas de informação privada que não podem ser corrigidas de outra forma. |
| Shared Storage | Shared Storage é um recurso do browser que permite agregar e recolher dados sobre a sua navegação. Embora tenha sido apresentado como preservador de privacidade, este recurso levantou fortes preocupações de privacidade e deverá ser removido dos browsers. | Privacy Magic garante que Shared Storage esteja desactivado em todos os sites. |
| Shared Workers | Shared Workers são código que é executado em segundo plano e pode ser partilhado entre sites. | Privacy Magic injecta as suas proteções em cada Shared Worker carregado por qualquer site. |
| Web Workers | Web Workers são código que é executado em segundo plano numa página web. Tal como os scripts da página principal, o código de web workers pode deixar escapar dados privados. | Privacy Magic injecta as suas proteções em cada Web Worker de uma página, para garantir que os rastreadores não utilizem Web Workers para contornar essas proteções. |

## Sinais de privacidade {#privacy-signals}

Estamos interessados em melhorar a sua privacidade de todas as formas possíveis. Por isso, o Privacy Magic envia um sinal para exigir políticas pró-privacidade dos sites que visita.

| Sinal | Browsers web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | O Global Privacy Control é um sinal que pode ser enviado aos sites que visita para indicar que não quer que os seus dados sejam vendidos ou partilhados. Infelizmente, a maioria dos browsers não envia a preferência Global Privacy Control por predefinição. | Privacy Magic garante que o seu browser envie o cabeçalho Global Privacy Control em cada pedido a cada página ou recurso incorporado. Também injecta um sinal JavaScript em cada página e iframe. |

## Proteções do browser {#browser-protections}

Os browsers comportam-se mal não só na forma como renderizam páginas, mas também na forma como enviam dados à empresa-mãe ou a empresas de publicidade de terceiros. Privacy Magic desactiva uma variedade de maus comportamentos do browser que, de outra forma, deixariam escapar a sua informação privada.

### Desactivação de recursos web com fugas {#disabling-leaky-web-features}

| Recurso | Browsers web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Auditoria de hiperligações | Os browsers padrão têm um recurso que permite que sites "pinguem" um servidor de rastreamento com as ligações em que clica. | Privacy Magic desactiva este ping. |
| Cookies de terceiros | O recurso de rastreamento mais famoso de todos. O Chrome permite cookies de terceiros que permitem que seja rastreado de site para site. | Privacy Magic desactiva cookies de terceiros por predefinição. |
| WebRTC UDP sem proxy | WebRTC é uma capacidade do browser que permite comunicar directamente com outros utilizadores da web. Infelizmente, se estiver a utilizar um proxy no browser, os browsers baseados em Chrome padrão deixam escapar comunicações WebRTC fora do proxy. | Privacy Magic bloqueia as fugas de WebRTC, permitindo ainda que o WebRTC funcione nos sites que o utilizam. |

### Desactivação de serviços na nuvem invasivos {#disabling-invasive-cloud-services}

| Serviço | Browsers web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Páginas de erro alternativas | Por predefinição, o Chrome mostra páginas de erro alternativas quando ocorre um erro. Para mostrar estas páginas, dados sobre as páginas que está a visitar são enviados para os servidores da Google. | Privacy Magic desactiva estas páginas de erro alternativas para que nenhum dado seja enviado. |
| Safe Browsing Extended Reporting | Quando o Safe Browsing bloqueia uma página, o Chrome pode enviar o conteúdo de uma página bloqueada para os servidores da Google. | Privacy Magic bloqueia este recurso, para que nenhum dado seja enviado. |
| Sugestões de pesquisa | Por predefinição, o Chrome envia tudo o que escreve na barra de endereços para o seu motor de pesquisa predefinido (tipicamente a pesquisa da Google) enquanto escreve, para gerar sugestões automáticas. | Privacy Magic bloqueia esta monitorização contínua, para que o Chrome só envie a sua pesquisa quando premir "Enter". |
| Serviço de ortografia | O Chrome oferece uma "verificação ortográfica melhorada" que envia o que escreve para os servidores da Google. | Privacy Magic desactiva esta opção e permite que o Chrome utilize apenas a "verificação ortográfica básica" local. |

### Desactivação de APIs de segmentação de anúncios {#disabling-ad-targeting-apis}

| API | Browsers web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | A Ad Measurement API (e a Private Aggregation API relacionada) envia dados sobre a sua navegação, os anúncios em que clica e outros dados privados para servidores de publicidade. | Privacy Magic desactiva estas APIs para proteger os seus dados. |
| Protected Audience API | Por predefinição, esta API é disponibilizada pelo Chrome para realizar um leilão pela sua atenção em nome de anunciantes. | Privacy Magic desactiva esta API para que os seus dados de navegação não sejam utilizados desta forma. |
| Topics API | A Topics API do Chrome dá aos anunciantes uma lista de tópicos que alegadamente lhe interessam. | Privacy Magic desactiva a Topics API para manter esses dados privados. |

### Desactivação de definições do Chrome com fugas {#disabling-leaky-chrome-settings}

O Chrome contém certas definições antitéticas à sua privacidade: especificamente, funcionalidades que recolhem dados sobre os seus hábitos de navegação e os enviam para os servidores da Google. Estas definições não podem ser controladas directamente por uma extensão do browser, mas durante a configuração o Privacy Magic ajuda-o a encontrar as definições e a desactivá-las você mesmo.

| Definição | Browsers web padrão | Privacy Magic |
| :--- | :--- | :--- |
| Sincronização do histórico | Quando está com sessão iniciada no Chrome, este sincroniza o seu histórico de navegação entre dispositivos. Também guarda esses mesmos dados nos servidores da Google. | Privacy Magic orienta-o até à definição que desactiva a sincronização do histórico para manter o seu histórico de navegação privado. |
| Métricas de experiência do utilizador | O Chrome envia silenciosamente métricas sobre a sua utilização do browser de volta para os servidores da Google. | Privacy Magic ajuda-o a bloquear esta recolha oculta de dados. |
| Recolha de dados por URL | Para cada URL que visita, o Chrome recolhe dados "anonimizados" sobre a sua navegação nessas páginas e envia-os para a Google. | Privacy Magic ajuda-o a desactivar esta definição para impedir que os dados sejam enviados. |
