export const state = () => ({
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
    },
  ],
  items: {
    messaging: [{
        id: 1,
        show: true,
        name: "",
        descr: {
          ua: `<p>Matrix — децентралізований протокол обміну повідомленнями з клієнтом Element, що до нього додається, який може стати альтернативою звичним месенджерам. Є дуже зручні мобільні клієнти під Android та iOS з push-повідомленнями, та десктопні клієнти для Windows, Linux, MacOS.</p>

        <p> Протокол налаштований за принципом федерації, яка дозволяє миттєво отримувати та надсилати повідомлення, створювати спільні чати для користувачів з різних серверів, здійснювати відео - та аудіодзвінки.Element має всі функції, які притаманні іншим сучасним та популярним месенджерам(за винятком голосових повідомлень).Можна створювати приватні групові чати, які доступні лише тому, хто їх створив, та запрошеним користувачам.Реєстрація не займе більше хвилини. </p>`,
          en: `<p>Messaging that supports end-to-end encryption, private chats, private rooms and public rooms. Note that registration is open to everyone - take due care in establishing the user's identity before trusting that source. Private groups are only known, available to their creator and invited people. This is a federated service - people on one server can chat with people connected to another.
</p><p>
Public group moderation is on.</p>
`,
          ru: `<p>Сервис для обмена сообщениям, поддерживающий сквозное шифрование, приватные чаты, личные и публичные комнаты. Внимание: регистрация открыта для всех — будьте внимательны при установлении личности пользователя, прежде чем доверять ему. Приватные группы доступны только их создателю и приглашенным людям. Это федеративный сервис - люди на одном сервере могут общаться с людьми, подключенными к другому.
</p><p>
Включена модерация публичных групп.</p>
`,
        },
        logo: "/logo/logo-mark-primary.svg",
        name: {
          ua: "Element",
          ru: "Element",
          en: "Element",
        },
        explain: {
          ua: "ЧАТ З ШИФРУВАННЯМ",
          ru: "Федеративный чат с шифрованием",
          en: "ENCRYPTED FEDERATED CHAT",
        },
        desktopApp: {
          platforms: [],
          link: "",
          localLink: "",
          serversLabel: {
            ua: "Web chat",
            ru: "Web chat",
            en: "Web chat",
          },
          servers: [{
              label: "kyiv",
              name: {
                ua: "Київ Web chat",
                ru: "Киев Web chat",
                en: "Kyiv Web chat",
              },
              link: "https://chat.kyiv.dcomm.net.ua/",
              docs: [{
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/kyiv.html",
                    en: "/docs/matrix/kyiv.html",
                    ru: "/docs/matrix/kyiv.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/matrix/kyiv.pdf",
                    en: "/docs/matrix/kyiv.pdf",
                    ru: "/docs/matrix/kyiv.pdf",
                  },
                },
              ],
            },
            {
              label: "kharkiv",
              name: {
                ua: "Харків Web chat",
                ru: "Харьков Web chat",
                en: "Kharkiv Web chat",
              },
              link: "https://social.kharkiv.dcomm.net.ua/",
              docs: [{
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/kharkiv.html",
                    en: "/docs/matrix/kharkiv.html",
                    ru: "/docs/matrix/kharkiv.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/matrix/kharkiv.pdf",
                    en: "/docs/matrix/kharkiv.pdf",
                    ru: "/docs/matrix/kharkiv.pdf",
                  },
                },
              ],
            },
            {
              label: "odessa",
              name: {
                ua: "Одеса Web chat",
                ru: "Одесса Web chat",
                en: "Odessa Web chat",
              },
              link: "https://chat.odessa.dcomm.net.ua/",
              docs: [{
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/odessa.html",
                    en: "/docs/matrix/odessa.html",
                    ru: "/docs/matrix/odessa.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/matrix/odessa.pdf",
                    en: "/docs/matrix/odessa.pdf",
                    ru: "/docs/matrix/odessa.pdf",
                  },
                },
              ],
            },
            {
              label: "lviv",
              name: {
                ua: "Львів Web chat",
                ru: "Львов Web chat",
                en: "Lviv Web chat",
              },
              link: "https://chat.lviv.dcomm.net.ua/",
              docs: [{
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/lviv.html",
                    en: "/docs/matrix/lviv.html",
                    ru: "/docs/matrix/lviv.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/matrix/lviv.pdf",
                    en: "/docs/matrix/lviv.pdf",
                    ru: "/docs/matrix/lviv.pdf",
                  },
                },
              ],
            },
            {
              label: "lviv2",
              name: {
                ua: "Львів 2 Web chat",
                ru: "Львов 2 Web chat",
                en: "Lviv 2 Web chat",
              },
              link: "https://chat.lviv2.dcomm.net.ua/",
              docs: [{
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/lviv2.html",
                    en: "/docs/matrix/lviv2.html",
                    ru: "/docs/matrix/lviv2.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/matrix/lviv2.pdf",
                    en: "/docs/matrix/lviv2.pdf",
                    ru: "/docs/matrix/lviv2.pdf",
                  },
                },
              ],
            },
            {
              label: "rivne",
              name: {
                ua: "Рівне Web chat",
                ru: "Ровно Web chat",
                en: "Rivne Web chat",
              },

              link: "https://chat.rivne.dcomm.net.ua/",
              docs: [{
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/rivne.html",
                    en: "/docs/matrix/rivne.html",
                    ru: "/docs/matrix/rivne.html",
                  },
                },
                {
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/rivne.html",
                    en: "/docs/matrix/rivne.html",
                    ru: "/docs/matrix/rivne.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/matrix/rivne.pdf",
                    en: "/docs/matrix/rivne.pdf",
                    ru: "/docs/matrix/rivne.pdf",
                  },
                },
              ],
            },
            {
              label: "kherson",
              name: {
                ua: "Херсон Web chat",
                ru: "Херсон Web chat",
                en: "Kherson Web chat",
              },

              link: "https://chat.kherson.dcomm.net.ua/",
              // docs: [
              //   {
              //     name: "HTML",
              //     link: {
              //       ua: "/docs/matrix/kherson.html",
              //       en: "/docs/matrix/kherson.html",
              //       ru: "/docs/matrix/kherson.html",
              //     },
              //   },
              //   {
              //     name: "HTML",
              //     link: {
              //       ua: "/docs/matrix/kherson.html",
              //       en: "/docs/matrix/kherson.html",
              //       ru: "/docs/matrix/kherson.html",
              //     },
              //   },
              //   {
              //     name: "PDF",
              //     link: {
              //       ua: "/docs/matrix/kherson.pdf",
              //       en: "/docs/matrix/kherson.pdf",
              //       ru: "/docs/matrix/kherson.pdf",
              //     },
              //   },
              // ],
            },
            {
              label: "mykolayiv",
              name: {
                ua: "Миколаїв Web chat",
                ru: "Николаев Web chat",
                en: "Mykolayiv Web chat",
              },

              link: "https://chat.mykolayiv.dcomm.net.ua/",
              // docs: [
              //   {
              //     name: "HTML",
              //     link: {
              //       ua: "/docs/matrix/mykolayiv.html",
              //       en: "/docs/matrix/mykolayiv.html",
              //       ru: "/docs/matrix/mykolayiv.html",
              //     },
              //   },
              //   {
              //     name: "HTML",
              //     link: {
              //       ua: "/docs/matrix/mykolayiv.html",
              //       en: "/docs/matrix/mykolayiv.html",
              //       ru: "/docs/matrix/mykolayiv.html",
              //     },
              //   },
              //   {
              //     name: "PDF",
              //     link: {
              //       ua: "/docs/matrix/mykolayiv.pdf",
              //       en: "/docs/matrix/mykolayiv.pdf",
              //       ru: "/docs/matrix/mykolayiv.pdf",
              //     },
              //   },
              // ],
            },
            {
              label: "poltava",
              name: {
                ua: "Полтава Web chat",
                ru: "Полтава Web chat",
                en: "Poltava Web chat",
              },

              link: "https://chat.poltava.dcomm.net.ua/",
              // docs: [
              //   {
              //     name: "HTML",
              //     link: {
              //       ua: "/docs/matrix/mykolayiv.html",
              //       en: "/docs/matrix/mykolayiv.html",
              //       ru: "/docs/matrix/mykolayiv.html",
              //     },
              //   },
              //   {
              //     name: "HTML",
              //     link: {
              //       ua: "/docs/matrix/mykolayiv.html",
              //       en: "/docs/matrix/mykolayiv.html",
              //       ru: "/docs/matrix/mykolayiv.html",
              //     },
              //   },
              //   {
              //     name: "PDF",
              //     link: {
              //       ua: "/docs/matrix/mykolayiv.pdf",
              //       en: "/docs/matrix/mykolayiv.pdf",
              //       ru: "/docs/matrix/mykolayiv.pdf",
              //     },
              //   },
              // ],
            },
          ],
        },
        mobileApp: {
          platforms: [{
            name: "Android",
            link: ""
          }],
          downloads: {
            mirrors: [{
                name: {
                  ua: "Локально",
                  ru: "Локально",
                  en: "Locally",
                },
                link: "/package/element/files/",
              },
              {
                name: {
                  ua: "Element.io",
                  ru: "Element.io",
                  en: "Element.io",
                },
                link: "https://element.io/get-started#download",
              },
            ],
          },
          serversLabel: {
            ua: "Server:",
            ru: "Сервер:",
            en: "Сервер:",
          },

          servers: [{
              label: "kyiv",
              name: {
                ua: "matrix.kyiv.dcomm.net.ua",
                ru: "matrix.kyiv.dcomm.net.ua",
                en: "matrix.kyiv.dcomm.net.ua",
              },
              type: "copy",
              docs: [{
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/kyiv.html",
                    en: "/docs/matrix/kyiv.html",
                    ru: "/docs/matrix/kyiv.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/matrix/kyiv.pdf",
                    en: "/docs/matrix/kyiv.pdf",
                    ru: "/docs/matrix/kyiv.pdf",
                  },
                },
              ],
            },
            {
              label: "kharkiv",
              type: "copy",
              name: {
                ua: "matrix.kharkiv.dcomm.net.ua",
                ru: "matrix.kharkiv.dcomm.net.ua",
                en: "matrix.kharkiv.dcomm.net.ua",
              },
              docs: [{
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/kharkiv.html",
                    en: "/docs/matrix/kharkiv.html",
                    ru: "/docs/matrix/kharkiv.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/matrix/kharkiv.pdf",
                    en: "/docs/matrix/kharkiv.pdf",
                    ru: "/docs/matrix/kharkiv.pdf",
                  },
                },
              ],
            },
            {
              label: "odessa",
              type: "copy",
              name: {
                ua: "matrix.odessa.dcomm.net.ua",
                ru: "matrix.odessa.dcomm.net.ua",
                en: "matrix.odessa.dcomm.net.ua",
              },
              docs: [{
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/odessa.html",
                    en: "/docs/matrix/odessa.html",
                    ru: "/docs/matrix/odessa.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/matrix/odessa.pdf",
                    en: "/docs/matrix/odessa.pdf",
                    ru: "/docs/matrix/odessa.pdf",
                  },
                },
              ],
            },
            {
              label: "lviv",
              type: "copy",
              name: {
                ua: "matrix.lviv.dcomm.net.ua",
                ru: "matrix.lviv.dcomm.net.ua",
                en: "matrix.lviv.dcomm.net.ua",
              },
              docs: [{
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/lviv.html",
                    en: "/docs/matrix/lviv.html",
                    ru: "/docs/matrix/lviv.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/matrix/lviv.pdf",
                    en: "/docs/matrix/lviv.pdf",
                    ru: "/docs/matrix/lviv.pdf",
                  },
                },
              ],
            },
            {
              label: "lviv2",
              type: "copy",
              name: {
                ua: "matrix.lviv2.dcomm.net.ua",
                ru: "matrix.lviv2.dcomm.net.ua",
                en: "matrix.lviv2.dcomm.net.ua",
              },
              docs: [{
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/lviv2.html",
                    en: "/docs/matrix/lviv2.html",
                    ru: "/docs/matrix/lviv2.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/matrix/lviv2.pdf",
                    en: "/docs/matrix/lviv2.pdf",
                    ru: "/docs/matrix/lviv2.pdf",
                  },
                },
              ],
            },
            {
              label: "rivne",
              type: "copy",
              name: {
                ua: "matrix.rivne.dcomm.net.ua",
                ru: "matrix.rivne.dcomm.net.ua",
                en: "matrix.rivne.dcomm.net.ua",
              },
              docs: [{
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/rivne.html",
                    en: "/docs/matrix/rivne.html",
                    ru: "/docs/matrix/rivne.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/matrix/rivne.pdf",
                    en: "/docs/matrix/rivne.pdf",
                    ru: "/docs/matrix/rivne.pdf",
                  },
                },
              ],
            },
            {
              label: "kherson",
              type: "copy",
              name: {
                ua: "matrix.kherson.dcomm.net.ua",
                ru: "matrix.kherson.dcomm.net.ua",
                en: "matrix.kherson.dcomm.net.ua",
              },
              // docs: [
              //   {
              //     name: "HTML",
              //     link: {
              //       ua: "/docs/matrix/mykolayiv.html",
              //       en: "/docs/matrix/mykolayiv.html",
              //       ru: "/docs/matrix/mykolayiv.html",
              //     },
              //   },
              //   {
              //     name: "PDF",
              //     link: {
              //       ua: "/docs/matrix/mykolayiv.pdf",
              //       en: "/docs/matrix/mykolayiv.pdf",
              //       ru: "/docs/matrix/mykolayiv.pdf",
              //     },
              //   },
              // ],
            },
            {
              label: "mykolayiv",
              type: "copy",
              name: {
                ua: "matrix.mykolayiv.dcomm.net.ua",
                ru: "matrix.mykolayiv.dcomm.net.ua",
                en: "matrix.mykolayiv.dcomm.net.ua",
              },
              // docs: [
              //   {
              //     name: "HTML",
              //     link: {
              //       ua: "/docs/matrix/kherson.html",
              //       en: "/docs/matrix/kherson.html",
              //       ru: "/docs/matrix/kherson.html",
              //     },
              //   },
              //   {
              //     name: "PDF",
              //     link: {
              //       ua: "/docs/matrix/kherson.pdf",
              //       en: "/docs/matrix/kherson.pdf",
              //       ru: "/docs/matrix/kherson.pdf",
              //     },
              //   },
              // ],
            }, {
              label: "poltava",
              type: "copy",
              name: {
                ua: "matrix.poltava.dcomm.net.ua",
                ru: "matrix.poltava.dcomm.net.ua",
                en: "matrix.poltava.dcomm.net.ua",
              },
              // docs: [
              //   {
              //     name: "HTML",
              //     link: {
              //       ua: "/docs/matrix/kherson.html",
              //       en: "/docs/matrix/kherson.html",
              //       ru: "/docs/matrix/kherson.html",
              //     },
              //   },
              //   {
              //     name: "PDF",
              //     link: {
              //       ua: "/docs/matrix/kherson.pdf",
              //       en: "/docs/matrix/kherson.pdf",
              //       ru: "/docs/matrix/kherson.pdf",
              //     },
              //   },
              // ],
            },
          ],
        },
      },
      {
        id: 2,
        show: true,
        descr: {
          ua: `<p>Delta.chat — це зашифрований сервіс обміну повідомленнями, який використовує для зв'язку протокол електронної пошти (SMTP). За дизайном схожий на WhatsApp.
      </p><p>
      Користувачам необхідно встановити додаток для смартфона та додати сервер за допомогою QR-кодів, наведених нижче. Інші люди можуть спілкуватися з вами, створивши QR-код запрошення в додатку.
      </p>`,
          en: `<p>Delta.chat is an encrypted messaging service that uses email protocols (SMTP) for communications. Similar in design to WhatsApp. Users need to install a smartphone application and add the server via QR codes, linked below. Other people can chat with you by generating a chat invitation QR code from the app. </p>`,
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
          downloads: {
            mirrors: [{
                name: {
                  ua: "Локально",
                  ru: "Локально",
                  en: "Locally",
                },
                link: "/package/deltachat/files/",
              },
              {
                name: {
                  ua: "Delta Chat",
                  ru: "Delta Chat",
                  en: "Delta Chat",
                },
                link: "https://delta.chat/en/download",
              },
            ],
          },
          servers: [{
              label: "kyiv",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/kyiv-invite.png",
                  en: "/docs/deltachat/kyiv-invite.png",
                  ru: "/docs/deltachat/kyiv-invite.png",
                },
              }, ],
            },
            {
              label: "kharkiv",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/kharkiv-invite.png",
                  en: "/docs/deltachat/kharkiv-invite.png",
                  ru: "/docs/deltachat/kharkiv-invite.png",
                },
              }, ],
            },
            {
              label: "odessa",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/odessa-invite.png",
                  en: "/docs/deltachat/odessa-invite.png",
                  ru: "/docs/deltachat/odessa-invite.png",
                },
              }, ],
            },
            {
              label: "lviv",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/lviv-invite.png",
                  en: "/docs/deltachat/lviv-invite.png",
                  ru: "/docs/deltachat/lviv-invite.png",
                },
              }, ],
            },
            {
              label: "lviv2",
              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/lviv2-invite.png",
                  en: "/docs/deltachat/lviv2-invite.png",
                  ru: "/docs/deltachat/lviv2-invite.png",
                },
              }, ],
            },
            {
              label: "rivne",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/rivne-invite.png",
                  en: "/docs/deltachat/rivne-invite.png",
                  ru: "/docs/deltachat/rivne-invite.png",
                },
              }, ],
            },
            {
              label: "kherson",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/kherson-invite.png",
                  en: "/docs/deltachat/kherson-invite.png",
                  ru: "/docs/deltachat/kherson-invite.png",
                },
              }, ],
            },
            {
              label: "mykolayiv",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/mykolayiv-invite.png",
                  en: "/docs/deltachat/mykolayiv-invite.png",
                  ru: "/docs/deltachat/mykolayiv-invite.png",
                },
              }, ],
            },
            {
              label: "poltava",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/poltava-invite.png",
                  en: "/docs/deltachat/poltava-invite.png",
                  ru: "/docs/deltachat/poltava-invite.png",
                },
              }, ],
            },
          ],
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
            name: "QR Code",
            link: {
              ua: "/docs/deltachat/deltachat-manual.pdf",
              en: "/docs/deltachat/deltachat-manual_en.pdf",
              ru: "/docs/deltachat/deltachat-manual_ru.pdf",
            },
          }, ],

          downloads: {
            mirrors: [{
                name: {
                  ua: "Локально",
                  ru: "Локально",
                  en: "Locally",
                },
                link: "/package/deltachat/files/",
              },
              {
                name: {
                  ua: "Delta Chat",
                  ru: "Delta Chat",
                  en: "Delta Chat",
                },
                link: "https://delta.chat/en/download",
              },
            ],
          },
          servers: [{
              label: "kyiv",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/kyiv-invite.png",
                  en: "/docs/deltachat/kyiv-invite.png",
                  ru: "/docs/deltachat/kyiv-invite.png",
                },
              }, ],
            },
            {
              label: "kharkiv",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/kharkiv-invite.png",
                  en: "/docs/deltachat/kharkiv-invite.png",
                  ru: "/docs/deltachat/kharkiv-invite.png",
                },
              }, ],
            },
            {
              label: "odessa",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/odessa-invite.png",
                  en: "/docs/deltachat/odessa-invite.png",
                  ru: "/docs/deltachat/odess-invite.png",
                },
              }, ],
            },
            {
              label: "lviv",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/lviv-invite.png",
                  en: "/docs/deltachat/lviv-invite.png",
                  ru: "/docs/deltachat/lviv-invite.png",
                },
              }, ],
            },
            {
              label: "lviv2",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/lviv2-invite.png",
                  en: "/docs/deltachat/lviv2-invite.png",
                  ru: "/docs/deltachat/lviv2-invite.png",
                },
              }, ],
            },
            {
              label: "rivne",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/rivne-invite.png",
                  en: "/docs/deltachat/rivne-invite.png",
                  ru: "/docs/deltachat/rivne-invite.png",
                },
              }, ],
            },
            {
              label: "kherson",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/kherson-invite.png",
                  en: "/docs/deltachat/kherson-invite.png",
                  ru: "/docs/deltachat/kherson-invite.png",
                },
              }, ],
            },
            {
              label: "mykolayiv",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/mykolayiv-invite.png",
                  en: "/docs/deltachat/mykolayiv-invite.png",
                  ru: "/docs/deltachat/mykolayiv-invite.png",
                },
              }, ],
            }, {
              label: "poltava",

              docs: [{
                name: "QR Code",
                link: {
                  ua: "/docs/deltachat/poltava-invite.png",
                  en: "/docs/deltachat/poltava-invite.png",
                  ru: "/docs/deltachat/poltava-invite.png",
                },
              }, ],
            },
          ],
        },
      },
      {
        id: 3,
        show: true,
        descr: {
          ua: `<p>Це ще одна безпечна програма з обміну повідомленнями. За замовчуванням, Briar використовує мережу Tor і може створювати локальні меш-мережі, використовуючи Bluetooth на телефоні. Тобто за повної відсутності інтернету ви можете обмінюватися повідомленнями через з'єднання Bluetooth (врахочуючи обмеження за відстанню, притаманні Bluetooth) або через Wi-Fi. Окрім обміну повідомленнями, з Briar ви також можете створити Форум та робити пуьлікації у Блог.</p>`,
          en: `<p>Briar messenger is a secure chat tool that uses the Tor network by default and can also build local area mesh networks using the phone’s Bluetooth connectivity</p>`,
          ru: `<p>Briar — это безопасный инструмент для обмена сообщениями, который по-умолчанию использует сеть Tor, а также может создавать локальные меш-сети, используя bluetooth телефона.</p>`,
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
          servers: [{
            label: "all",
            docs: [{
                name: "HTML",
                link: {
                  ua: "/docs/briar/index.html",
                  en: "/docs/briar/index_en.html",
                  ru: "/docs/briar/index_ru.html",
                },
              },
              {
                name: "PDF",
                link: {
                  ua: "/docs/briar/briar.pdf",
                  en: "/docs/briar/briar_en.pdf",
                  ru: "/docs/briar/briar_ru.pdf",
                },
              },
            ],
          }, ],
          downloads: {
            mirrors: [{
                name: {
                  ua: "Локально",
                  ru: "Локально",
                  en: "Locally",
                },
                link: "/package/briar/files/",
              },
              {
                name: {
                  ua: "Briar",
                  ru: "Briar",
                  en: "Briar",
                },
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
          ua: `<p>CENO — мобільний веб-браузер, який покращує доступність сайтів за рахунок використання пірінгової (p2p) мережі та безпечного обміну контентом, навіть якщо інтернет не працює. Браузер CENO – проект з відкритим кодом від канадської компанії eQualit.ie, яка розробляє відкриті та багатофункціональні системи, орієнтовані на конфіденційність, онлайн-безпеку та свободу слова. Браузер заснований на Firefox для Android (відомий як Mozilla Fennec). Доступність сайтів при використанні CENO, як і будь-якої пірингової мережі, залежить від кількості підключених пристроїв. Розповсюджуйте інформацію про проект і в потрібний момент браузер CENO вас не підведе.</p>`,
          en: `<p>CENO is a web browser for accessing the Internet from censored network environments. It uses a novel method built on BitTorrent protocols to route requests through the Internet. Users automatically share retrieved content with each other using peer-to-peer connectivity. During an Internet shutdown, content already in your network continues to be available and shared among users there.</p>`,
          ru: `<p>CENO — это веб-браузер для доступа к Интернету в обход цензуры. Приложение использует метод, основанный на  BitTorrent-протоколе, для маршрутизации запросов через Интернет. Пользователи автоматически обмениваются полученным контентом друг с другом, через одноранговое соединение. Во время отключения Интернета контент, уже находящийся в вашей сети, продолжает быть доступным и распространяться среди пользователей.</p>`,
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
          servers: [{
            label: "all",
            docs: [{
                name: "HTML",
                link: {
                  ua: "/docs/ceno/index.html",
                  en: "/docs/ceno/index_en.html",
                  ru: "/docs/ceno/index_ru.html",
                },
              },
              {
                name: "PDF",
                link: {
                  ua: "/docs/ceno/ceno-manual.pdf",
                  en: "/docs/ceno/ceno-manual_en.pdf",
                  ru: "/docs/ceno/ceno-manual_ru.pdf",
                },
              },
            ],
          }, ],
          downloads: {
            mirrors: [{
                name: {
                  ua: "Локально",
                  ru: "Локально",
                  en: "Locally",
                },
                link: "/package/ceno/files/",
              },
              {
                name: {
                  ua: "CENO",
                  ru: "CENO",
                  en: "CENO",
                },
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
          ua: `<p>ей сервіс створює альтернативне мережне з'єднання, яке дозволяє вашому пристрою обмінюватися даними в ситуаціях, коли потрібний сайт або веб-ресурс є недоступним або його заблоковано. NewNode використовує гнучку, надійну однорангову мережу для маршрутизації ваших даних в обхід мережевих блокувань. NewNode повністю незалежний від сервера та стійкий до DDoS-атак.</p><p>Власне NewNode не є звичним вам VPN-сервісом, але дозволяє отримати доступ до контенту навіть за відсутності у вас доступу до інтернету. Тому не намагайтеся використовувати його для анонімізації і не дивуйтеся, що ваша IP-адреса не змінилася після включення NewNode. Сервіс надається безкоштовно, не містить реклами, його використання є законним та безпечним. Додаток доступний на платформі Android з версії 10 і новіші, а також для iPhone c iOS 12.0 і Mac на чіпі Apple M1. NewNode підтримує лише англійську мову, але у вас не виникне з цим жодних проблем, оскільки програма має простий інтерфейс з єдиною кнопкою.</p>`,
          en: `<p>NewNode VPN creates an alternative network connection allowing your device to communicate in situations where a desired internet site or resource is blocked or unavailable. It utilizes peer-to-peer networking to route your data around network obstacles. Server-independent, resistant to DDoS attacks, and security audited - making it unique among VPN apps.</p>`,
          ru: `<p>NewNode VPN создает альтернативное сетевое подключение, позволяющее вашему устройству обмениваться данными в ситуациях, когда нужный интернет-сайт или ресурс заблокирован или недоступен. Он использует одноранговую сеть для маршрутизации ваших данных в обход сетевых препятствий. Децентрализованный доступ, устойчивость к DDoS-атакам и независимый аудит безопасности, делают его уникальным среди VPN-приложений.</p>`,
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
          servers: [{
            label: "all",
            docs: [{
              name: "HTML",
              link: {
                ua: "/docs/newnode/index.html",
                en: "/docs/newnode/index_en.html",
                ru: "/docs/newnode/index_ru.html",
              },
            }, ],
          }, ],
          downloads: {
            mirrors: [{
                name: {
                  ua: "Локально",
                  ru: "Локально",
                  en: "Locally",
                },
                link: "/package/newnode/files/",
              },
              {
                name: {
                  ua: "New node",
                  ru: "New node",
                  en: "New node",
                },
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
        servers: [{
            label: "kyiv",
            name: {
              ua: "Київ сервер",
              ru: "Киев сервер",
              en: "Kyiv server",
            },
            link: "https://social.kyiv.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "kharkiv",
            name: {
              ua: "Харків сервер",
              ru: "Харьков сервер",
              en: "Kharkiv server",
            },
            link: "https://social.kharkiv.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "odessa",
            name: {
              ua: "Одеса server",
              ru: "Одесса server",
              en: "Odessa server",
            },
            link: "https://social.odessa.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "lviv",
            name: {
              ua: "Львів сервер",
              ru: "Львов сервер",
              en: "Lviv server",
            },
            link: "https://social.lviv.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "lviv2",
            name: {
              ua: "Львів 2 сервер",
              ru: "Львов 2 сервер",
              en: "Lviv 2 server",
            },
            link: "https://social.lviv2.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "rivne",
            name: {
              ua: "Рівне сервер",
              ru: "Ровно сервер",
              en: "Rivne server",
            },

            link: "https://social.rivne.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "kherson",
            name: {
              ua: "Херсон сервер",
              ru: "Херсон сервер",
              en: "Kherson server",
            },

            link: "https://social.kherson.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "mykolayiv",
            name: {
              ua: "Миколаїв сервер",
              ru: "Николаев сервер",
              en: "Mykolayiv server",
            },

            link: "https://social.mykolayiv.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "poltava",
            name: {
              ua: "Полтава сервер",
              ru: "Полтава сервер",
              en: "Poltava server",
            },

            link: "https://social.poltava.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
        ],
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
        servers: [{
            label: "kyiv",
            name: {
              ua: "Київ сервер",
              ru: "Киев сервер",
              en: "Kyiv server",
            },
            link: "https://social.kyiv.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "kharkiv",
            name: {
              ua: "Харків сервер",
              ru: "Харьков сервер",
              en: "Kharkiv server",
            },
            link: "https://social.kharkiv.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "odessa",
            name: {
              ua: "Одеса сервер",
              ru: "Одесса сервер",
              en: "Odessa server",
            },
            link: "https://social.odessa.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "lviv",
            name: {
              ua: "Львів сервер",
              ru: "Львов сервер",
              en: "Lviv server",
            },
            link: "https://social.lviv.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "lviv2",
            name: {
              ua: "Львів 2 сервер",
              ru: "Львов 2 сервер",
              en: "Lviv 2 server",
            },
            link: "https://social.lviv2.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "rivne",
            name: {
              ua: "Рівне сервер",
              ru: "Ровно сервер",
              en: "Rivne server",
            },

            link: "https://social.rivne.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "kherson",
            name: {
              ua: "Херсон сервер",
              ru: "Херсон сервер",
              en: "Kherson server",
            },

            link: "https://social.kherson.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "mykolayiv",
            name: {
              ua: "Миколаїв сервер",
              ru: "Николаев сервер",
              en: "Mykolayiv server",
            },

            link: "https://social.mykolayiv.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
          {
            label: "poltava",
            name: {
              ua: "Полтава сервер",
              ru: "Полтава сервер",
              en: "Poltava server",
            },

            link: "https://social.poltava.dcomm.net.ua/",
            docs: [{
              name: "Link",
              link: {
                ua: "https://mastodon.help/",
                en: "https://mastodon.help/",
                ru: "https://mastodon.help/",
              },
            }, ],
          },
        ],
      },
    }, ],
    //    filesharing: [
    //      {
    //        id: 1,
    //        show: true,
    //        descr: {
    //          ua: `<p>Syncthing (Синхронізатор) замінює синхронізацію володільця та хмарні сервіси за принципами відкритості, надійності і децентралізації. Ваші дані – це тільки ваші дані, і вам обирати, де вони повинні зберігатися у випадку, якщо ці дані передаються третій стороні, а також яким способом ці дані передаються через Інтернет.</p>`,
    //          en: `<p>Syncthing replaces proprietary sync and cloud services with something open, trustworthy and decentralized. Your data is your data alone and you deserve to choose where it is stored, if it is shared with some third party and how it's transmitted over the Internet. </p>`,
    //          ru: `<p>Syncthing — это надёжное, децентрализованное облачное хранение. Ваши данные остаются только в ваших руках, вы выбираете где они хранятся, хотите ли вы делиться ими с кем-то и каким образом перeдавать их по сети.</p>`,
    //        },
    //	logo: "/logo/syncthing.png",

    //        mobileApp: {
    //          name: {
    //            ua: "Syncthing",
    //            ru: "Syncthing",
    //            en: "Syncthing",
    //          },
    //          logo: "/logo/syncthing.png",
    //          platforms: [
    //            { name: "Android", link: "" },
    //            { name: "Linux", link: "" },
    //            { name: "Windows", link: "" },
    //            { name: "macOs", link: "" },
    //          ],
    // docs: [
    //   {
    //     name: "HTML",
    //     link: {
    //       ua: "/docs/syncthing/index_en.html",
    //       en: "/docs/syncthing/index_en.html",
    //       ru: "/docs/syncthing/index_en.html",
    //     },
    //   },
    //   {
    //     name: "PDF",
    //     link: {
    //       ua: "/docs/syncthing/syncthing.pdf",
    //       en: "/docs/syncthing/syncthing.pdf",
    //       ru: "/docs/syncthing/syncthing.pdf",
    //     },
    //   },
    // ],
    //          link: "https://syncthing.net/downloads",
    //          localLink: "/package/syncthing/files/",
    //        },
    //      },
    //    ],
  },
});
