export const state = () => ({
  rootDomain: "dcomm.net.ua",
  servers: [{
      name: "cities.kyiv",
      link: "https://kyiv.dcomm.net.ua/",
      label: "kyiv"
    },
    {
      name: "cities.odessa",
      link: "https://odessa.dcomm.net.ua/",
      label: "odessa",
    },
    {
      name: "cities.kharkiv",
      link: "https://kharkiv.dcomm.net.ua/",
      label: "kharkiv",
    },
    {
      name: "cities.lviv",
      link: "https://lviv.dcomm.net.ua/"
    },
    {
      name: "cities.lviv2",
      link: "https://lviv2.dcomm.net.ua/",
      label: "lviv2",
    },
    {
      name: "cities.rivne",
      link: "https://rivne.dcomm.net.ua/",
      label: "rivne",
    },
    {
      name: "cities.kherson",
      link: "https://kherson.dcomm.net.ua/",
      label: "kherson",
    },
    {
      name: "cities.mykolayiv",
      link: "https://mykolayiv.dcomm.net.ua/",
      label: "mykolayiv",
    }, {
      name: "cities.poltava",
      link: "https://poltava.dcomm.net.ua/",
      label: "poltava",
    }, {
      name: "cities.khmelnytskyi",
      link: "https://khmelnytskyi.dcomm.net.ua/",
      label: "khmelnytskyi",
    },

  ],
  items: {
    messaging: [{
        id: 1,
        show: true,
        descr: {
          ua: `<p>Matrix — децентралізований протокол обміну повідомленнями з клієнтом Element, що до нього додається, який може стати альтернативою звичним месенджерам. Є дуже зручні мобільні клієнти під Android та iOS з push-повідомленнями, та десктопні клієнти для Windows, Linux, MacOS. Протокол налаштований за принципом федерації, яка дозволяє миттєво отримувати та надсилати повідомлення, створювати спільні чати для користувачів з різних серверів, здійснювати відео- та аудіодзвінки. Element має всі функції, які притаманні іншим сучасним та популярним месенджерам (за винятком голосових повідомлень). Можна створювати приватні групові чати, які доступні лише тому, хто їх створив, та запрошеним користувачам. Реєстрація не займе більше хвилини.</p>`,
          en: `<p>Matrix is ​​a decentralized messaging protocol with an Element client attached to it, which can become an alternative to familiar messengers. There are very convenient mobile clients for Android and iOS with push notifications, and desktop clients for Windows, Linux, macOS. The protocol is based on the principle of federation, which allows you to instantly receive and send messages, create general chats for users of different servers, and make video and audio calls. Element has all the modern features that other popular messengers have (except for voice messages). One can create private group chats that are only available to their creator and invited users. Registration will not take more than a minute.</p>`,
          ru: `<p>Matrix — это децентрализованный протокол обмена сообщениями с прилагающимся к нему клиентом Element, который может стать альтернативой привычным мессенджерам. Есть весьма удобные мобильные клиенты под Android и iOS с push-уведомлениями, и десктопные клиенты для Windows, Linux, macOS. Протокол устроен по принципу федерации, которая позволяет мгновенно получать и отправлять сообщения, создавать общие чаты для пользователей разных серверов, совершать видео- и аудиозвонки. Element обладает всеми современными функциями, которые присущи другим популярным мессенджерам (за исключением голосовых сообщений). Можно создавать приватные групповые чаты, которые доступны только их создателю и приглашенным пользователям. Регистрация не займет у вас больше минуты.</p>`,
        },
        logo: "/logo/logo-mark-primary.svg",
        name: {
          ua: "Element",
          ru: "Element",
          en: "Element",
        },
        label: "matrix",
        explain: {
          ua: "ЧАТ З ШИФРУВАННЯМ",
          ru: "Федеративный чат с шифрованием",
          en: "ENCRYPTED FEDERATED CHAT",
        },
        desktopApp: {
          platforms: [],
          link: "",
          localLink: "",
          linkSubdomain: "chat",
          btnType: "btn",
          serversLabel: {
            ua: "Web chat",
            ru: "Web chat",
            en: "Web chat",
          },
          docs: [{
            name: "Giude",
            type: "page",

            link: "/instructions/matrix"
          }, ],

        },
        mobileApp: {
          platforms: [{
            name: "Android",
            link: ""
          }],
          downloads: {
            mirrors: [{
                label: "locally",
                link: "/package/element/files/",
              },
              {
                name: "Element.io",
                link: "https://element.io/get-started#download",
              },
            ],
          },
          serversLabel: {
            ua: "Server:",
            ru: "Сервер:",
            en: "Сервер:",
          },
          linkSubdomain: "matrix",
          btnType: "copy",
          docs: [{
            name: "Giude",
            link: "/instructions/matrix"
          }, ],

        },
      },
      {
        id: 2,
        show: true,
        descr: {
          ua: `<p>Delta.chat — це зашифрований сервіс обміну повідомленнями, який використовує для зв"язку протокол електронної пошти (SMTP). За дизайном схожий на WhatsApp.
      </p><p>
      Користувачам необхідно встановити додаток для смартфона та додати сервер за допомогою QR-кодів, наведених нижче. Інші люди можуть спілкуватися з вами, створивши QR-код запрошення в додатку.
      </p>`,
          en: `<p>Delta.chat is an encrypted messaging service that uses the Email Protocol (SMTP). The design is similar to WhatsApp. Users need to install the smartphone app and add the server using the QR code linked below. Other people can chat with you by generating a chat invitation QR code within the app itself.</p>`,
          ru: `<p>Delta.chat —  зашифрованная служба обмена сообщениями, использующая протокол электронной почты (SMTP). Дизайн похож на Whatsapp. Пользователям необходимо установить приложение для смартфона и добавить сервер с помощью QR-кодов, ссылки на которые приведены ниже. Другие люди могут общаться с вами, сгенерировав QR-код приглашения в чат в самом приложении.</p>`,
        },
        name: {
          ua: "Delta Сhat",
          ru: "Delta Сhat",
          en: "Delta Сhat"
        },
        logo: "/logo/deltachat.svg",
        explain: {
          ua: "EMAIL-ЧАТ",
          ru: "EMAIL-Чат",
          en: "EMAIL-BASED CHAT",
        },
        desktopApp: {
          platforms: [{
              name: "Linux",
              link: ""
            },
            {
              name: "Windows",
              link: ""
            },
            {
              name: "macOs",
              link: ""
            },
          ],
          link: "https://delta.chat/en/download",
          docs: [{
            name: "Manual",
            type: "doc",
            link: {
              ua: "/docs/deltachat/deltachat-manual.pdf",
              en: "/docs/deltachat/deltachat-manual_en.pdf",
              ru: "/docs/deltachat/deltachat-manual_ru.pdf",
            },
          }, {
            name: "QR Code",
            type: "page",
            link: "/instructions/deltachat/",
          }, ],
          downloads: {
            mirrors: [{
                label: "locally",

                link: "/package/deltachat/files/",
              },
              {
                name: "Delta Chat",
                link: "https://delta.chat/en/download",
              },
            ],
          },

        },
        mobileApp: {
          platforms: [{
              name: "Android",
              link: ""
            },
            {
              name: "iOs",
              link: ""
            },
          ],
          link: "https://get.delta.chat/",
          docs: [{
            name: "Manual",
            type: "doc",
            link: {
              ua: "/docs/deltachat/deltachat-manual.pdf",
              en: "/docs/deltachat/deltachat-manual_en.pdf",
              ru: "/docs/deltachat/deltachat-manual_ru.pdf",
            },
          }, {
            name: "QR Code",
            type: "page",

            link: "/instructions/deltachat/",
          }, ],
          downloads: {
            mirrors: [{
                label: "locally",
                link: "/package/deltachat/files/",
              },
              {
                name: "Delta Chat",
                link: "https://delta.chat/en/download",
              },
            ],
          },

        },
      },
      {
        id: 3,
        show: true,
        descr: {
          ua: `<p>Це ще одна безпечна програма з обміну повідомленнями. За замовчуванням, Briar використовує мережу Tor і може створювати локальні меш-мережі, використовуючи Bluetooth на телефоні. Тобто за повної відсутності інтернету ви можете обмінюватися повідомленнями через з'єднання Bluetooth (враховуючи обмеження за відстанню, притаманні Bluetooth) або через Wi-Fi. Окрім обміну повідомленнями, з Briar ви також можете створити Форум та робити публікації у Блогах.</p>`,
          en: `<p>This is another safe messaging app. Briar uses the Tor network by default and can create local mesh networks using Bluetooth on the phone. That means that in case of internet shutdown one can exchange messages via a Bluetooth connection or via Wi-Fi. In addition to messaging, with Briar one can create a Forum and post to a Blog.</p>`,
          ru: `<p>то еще одна безопасная программа обмена сообщениями. Briar по умолчанию использует сеть Tor и может создавать локальные меш-сети, используя Bluetooth на телефоне. То есть при полном отсутствии интернета вы можете обмениваться сообщениями через Bluetooth-соединение (учитывая органичения по расстоянию, свойственные Bluetooth)или через Wi-Fi. Кроме обмена сообщениями, с Briar вы сможете создать Форум и публиковать в Блог.</p>`,
        },
        logo: "/logo/briar.png",
        name: {
          ua: "Briar",
          ru: "Briar",
          en: "Briar",
        },
        explain: {
          ua: "P2P МЕСЕНДЖЕР",
          ru: "P2p мессенджер",
          en: "P2p messaging",
        },
        mobileApp: {
          platforms: [{
            name: "Android",
            link: ""
          }],
          docs: [{
            name: "Guide",
            link: "/instructions/briar/",
          }, ],
          downloads: {
            mirrors: [{
                label: "locally",
                link: "/package/briar/files/",
              },
              {
                name: "Briar",
                link: "https://briarproject.org/download-briar/",
              },
            ],
          },
        },
      },
    ],
    browsing: [{
        id: 1,
        show: true,
        descr: {
          ua: `<p>CENO — це мобільний веб-браузер, який покращує доступність сайтів за рахунок використання пірінгової (p2p) мережі та безпечного обміну контентом, навіть якщо інтернет не працює. Браузер CENO – проект з відкритим кодом від канадської компанії eQualit.ie, яка розробляє відкриті та багатофункціональні системи, орієнтовані на конфіденційність, онлайн-безпеку та свободу слова. Браузер заснований на Firefox для Android (відомий як Mozilla Fennec). Доступність сайтів при використанні CENO, як і будь-якої пірингової мережі, залежить від кількості підключених пристроїв. Розповсюджуйте інформацію про проект, і в потрібний момент браузер CENO вас не підведе.</p>`,
          en: `<p>CENO is a mobile web browser that improves the accessibility of websites using a peer-to-peer (p2p) network and the secure exchange of content, even when the Internet is down. CENO Browser is an open source project from the Canadian company eQualit.ie, which develops open and rich systems focused on privacy, online security and freedom of speech. The browser is based on Firefox for Android (known as Mozilla Fennec). The availability of sites when using CENO, as in any peer-to-peer network, depends on the number of connected devices. Spread information about the project and at the right time, the CENO browser will not let you down.</p>`,
          ru: `<p>CENO — мобильный веб-браузер, улучшающий доступность сайтов за счет использования пиринговой (p2p) сети и безопасного обмена контентом, даже если интернет не работает. Браузер CENO — проект с открытым кодом от канадской компании eQualit.ie, разрабатывающей открытые и многофункциональные системы, ориентированные на конфиденциальность, онлайн-безопасность и свободу слова. Браузер основан на Firefox для Android (известным как Mozilla Fennec). Доступность сайтов при использовании CENO, как и в любой пиринговой сети, зависит от количества подключенных устройств. Распространяйте информацию о проекте и в нужный момент браузер CENO вас не подведет.</p>`,
        },
        explain: {
          ua: "БРАУЗЕР АБИ ОБІЙТИ БЛОКУВАННЯ",
          ru: "Обход цензуры в интернете",
          en: "CENSORSHIP-RESISTANT Browsing",
        },
        name: {
          ua: "CENO",
          ru: "CENO",
          en: "CENO",
        },
        logo: "/logo/ceno.png",
        mobileApp: {
          platforms: [{
            name: "Android",
            link: ""
          }],
          docs: [{
              name: "Guide",
              type: "page",
              link: "/instructions/ceno/",
            },
            {
              name: "PDF",
              type: "doc",
              link: {
                ua: "/docs/ceno/ceno-manual.pdf",
                en: "/docs/ceno/ceno-manual_en.pdf",
                ru: "/docs/ceno/ceno-manual_ru.pdf",
              },
            },
          ],
          downloads: {
            mirrors: [{
                label: "locally",
                link: "/package/ceno/files/",
              },
              {
                name: "CENO",
                link: "https://censorship.no/download",
              },
            ],
          },
        },
      },
      {
        id: 2,
        show: true,
        descr: {
          ua: `<p>Цей сервіс створює альтернативне мережне з'єднання, яке дозволяє вашому пристрою обмінюватися даними в ситуаціях, коли потрібний сайт або веб-ресурс є недоступним або його заблоковано. NewNode використовує гнучку, надійну однорангову мережу для маршрутизації ваших даних в обхід мережевих блокувань. NewNode повністю незалежний від сервера та стійкий до DDoS-атак. Власне NewNode не є звичним вам VPN-сервісом, але дозволяє отримати доступ до контенту навіть за відсутності у вас доступу до інтернету. Тому не намагайтеся використовувати його для анонімізації і не дивуйтеся, що ваша IP-адреса не змінилася після включення NewNode. Сервіс надається безкоштовно, не містить реклами, його використання є законним та безпечним. Додаток доступний на платформі Android з версії 10 і новіші, а також для iPhone c iOS 12.0 і Mac на чіпі Apple M1. NewNode підтримує лише англійську мову, але у вас не виникне з цим жодних проблем, оскільки програма має простий інтерфейс з єдиною кнопкою.</p>`,
          en: `<p>This service creates an alternative network connection that allows your device to communicate in situations where the required site or web resource is blocked or unavailable. NewNode uses a flexible, reliable peer-to-peer network to route your data around network blockages. NewNode is completely server independent and resistant to DDoS attacks. Actually, NewNode is not your usual VPN app, but it allows you to access content even if you do not have access to the Internet. So don't try to use it for anonymization and don't be surprised that your IP address hasn't changed after enabling NewNode. The service is provided free of charge, it contains no ads, and is legal and safe to use. The application is available on Android platform from version 10 and newer, as well as for iPhone with iOS 12.0 and Mac with Apple M1 chip. NewNode only supports English, but you won't have any problems with it since the application has a simple interface with a single button.</p>`,
          ru: `</p>Этот сервис создает альтернативное сетевое соединение, позволяющее вашему устройству обмениваться данными в ситуациях, когда требуемый сайт или веб-ресурс заблокирован или недоступен. NewNode использует гибкую, надежную одноранговую сеть для маршрутизации ваших данных в обход сетевых блокировок. NewNode полностью независим от сервера и устойчив к DDoS-атакам. Собственно, NewNode не является привычным вам VPN-клиентом, но позволяет получить доступ к контенту даже при отсутствии у вас доступа к интернету. Поэтому не пытайтесь использовать его для анонимизации и не удивляйтесь, что ваш IP-адрес не изменился после включения NewNode. Сервис предоставляется бесплатно, не содержит рекламы, его использование законно и безопасно. Приложение доступно на платформе Android с версии 10 и новее, а так же для iPhone c iOS 12.0 и Mac на чипе Apple M1. NewNode поддерживает только английский язык, но у вас не возникнет с этим никаких проблем, так как приложение имеет простой интерфейс с единственной кнопкой.</p>`,
        },
        name: {
          ua: "NewNode VPN",
          ru: "NewNode VPN",
          en: "NewNode VPN",
        },
        explain: {
          ua: "P2p VPN",
          ru: "P2p VPN",
          en: "P2p VPN",
        },
        logo: "/logo/newnode.png",
        mobileApp: {
          platforms: [{
              name: "Android",
              link: ""
            },
            {
              name: "iOs",
              link: ""
            },
          ],
          docs: [{
            name: "Guide",
            type: "page",
            link: "/instructions/newnode/",
          }, ],
          downloads: {
            mirrors: [{
                label: "locally",
                link: "/package/newnode/files/",
              },
              {
                name: "New node",
                link: "https://newnode.com/download-vpn",
              },
            ],
          },
        },
      },
    ],
    social: [{
      id: 1,
      show: true,
      descr: {
        ua: `<p>Mastodon — це інноваційна платформа для мікроблогів з відкритим вихідним кодом, схожа до Twitter або Tumblr. Сервіс був створений у 2016 році, і з тих пір Mastodon залучає нових користувачів та спільноти, які зацікавлені у простори, що є вільними від підходів великих технологічних компаній та цензури.</p>`,
        en: `<p>Mastodon is an innovative open-source and self-hostable microblogging platform similar to Twitter or Tumblr. Its was started in 2016 and since then Mastodon constantly attracted new users and communities looking for a social environment independent from big company logics and censorship.<p>`,
        ru: `<p>Mastodon - это инновационная  платформа микроблогов с открытым исходным кодом и возможностью самостоятельного хостинга, похожая на Twitter или Tumblr. Она была запущена в 2016 году, и с тех пор Mastodon постоянно привлекает новых пользователей и сообщества, ищущие социальную среду, независимую от логики корпораций и цензуры.</p>`,
      },
      explain: {
        ua: "Незалежна соціальна мережа",
        ru: "Независимая социальная сеть",
        en: "Independent social network",
      },
      name: {
        ua: "Mastodon",
        ru: "Mastodon",
        en: "Mastodon",
      },
      logo: "/logo/mastodon.svg.png",
      desktopApp: {
        platforms: [],
        link: "",
        localLink: "",
        serversLabel: {
          ua: "Сервер",
          ru: "Сервер",
          en: "Server",
        },
        linkSubdomain: "social",
        btnType: "btn",
        docs: [{
          name: "Link",
          type: "doc",
          link: {
            ua: "https://mastodon.help/",
            en: "https://mastodon.help/",
            ru: "https://mastodon.help/",
          },
        }, ],
      },
      mobileApp: {
        platforms: [],
        link: "",
        localLink: "",
        serversLabel: {
          ua: "Сервер",
          ru: "Сервер",
          en: "Server",
        },
        linkSubdomain: "social",
        btnType: "btn",
        docs: [{
          name: "Link",
          type: "doc",
          link: {
            ua: "https://mastodon.help/",
            en: "https://mastodon.help/",
            ru: "https://mastodon.help/",
          },
        }, ],
      },
    }, ],

  },
});
