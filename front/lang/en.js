export default {
  lang: {
    ru: "Russian",
    ua: "Ukrainian",
    en: "English",
  },
  pages: {
    about: {
      title: "About",
      content: `
      <p>
        Reclaim control of your data and hide from prying eyes. With dComms, you can communicate safely even when connections are being surveilled, or when the Internet is disconnected. dComms will never sell your data or hand your information over to the authorities. We run a free and open source software stack with a focus on open, decentralized, and federated technologies.
      </p>
      <p>
        dComms was initially launched by eQualit.ie in 2022 in rapid response to the full-scale Russian invasion of Ukraine. The initial goal was to deploy many instances of encrypted communication services across Ukraine to prepare for the possibility of cities becoming completely disconnected from the wider Internet.
      <p>
        This goal shifted slightly when occupied cities’ connections were becoming routed through Russia, meaning security and privacy needed to be prioritized. Additionally, rather than long-term disconnections, we saw only short-term cut-offs in cities where shelling hit the Internet fiber-optic cables, so our offering needed to support users in those short time spans.
      </p>
      <p>
        As dComms grows we hope to add many more free and open source services useful to those who need them. If there is something you’d like us to add, please make create issue on our Github page: https://github.com/censorship-no/dcomms
      </p>`
    }
  },
  title: {
    first: "Alternative communication methods during censorship, interruptions, and ",
    second: "restrictions on the Internet",
  },
  server: "Other servers:",
  connected: "You are currently connected to the <b>{name}</b> server",
  subtitle: "We suggest that you pre-install and test this set of applications that can work autonomously and regardless of internet shutdown scenarios. If you are located in a temporarily-occupied territory, then this simple preparation ensures some backup communication channels that will work regardless of connectivity issues. We maintain several servers across Ukraine to ensure the possibility of communication between users over local networks, regardless of what is happening. The list of these applications will be updated in response to users' needs. We welcome and encourage feedback and participation!",
  alert: {
    title: "Don’t wait. Replicate!",
    descr: "Stand up your own networks using our local bundle. Join the techops group to discuss collaboration, new services and volunteer opportunities",
    buttons: {
      repo: "Code Repo",
      servers: "Matrix Server",
    },
  },
  cities: {
    kyiv: "Kyiv",
    odessa: "Odessa",
    kharkiv: "Kharkiv",
    lviv: "Lviv",
    lviv2: "Lviv 2",
    rivne: "Rivne",
    kherson: "Kherson",
    mykolayiv: "Mykolayiv",
    poltava: "Poltava",
    khmelnytskyi: "Khmelnytskyi"
  },
  copyUrl: "Copy URL",

  footer: {
    initiative: `An initiative by <a target="_blank" href="https://equalit.ie/">eQualit.ie</a>`,
    license: `Licensed under the <a  href="https://github.com/censorship-no/dcomms"> GNU General Public License v3.0</a>`,
  },
  rubric: {
    messaging: "Safe messengers",
    browsing: "Web Browsing",
    social: "Social",
    //    filesharing: "File-Sharing",
  },
  adressCopy: "Adress copy",
  items: {
    downloads: "Downloads:",
    desktopApp: "Connecting from a desktop computer:",
    localDownload: "local download",
    instruction: "Instructions: ",
    mobileApp: "Smartphone App:",
    notAvail: "Not available",
  },
  labels: {
    locally: 'Locally',
    server: 'server',
  },
  instructions: {
    matrix: {
      title: 'Matrix',
      content: `
      <p>
        Підключайтесь до зашифрованого чат-серверу (Matrix). Працює в локальній
        мережі вашого провайдера. Ви зможете в ній обмінюватися повідомленнями з
        близькими та друзями, у випадку, якщо інтернет зникне.
      </p>
      <ul>
        <li>
          Для десктопа:
          <a :href="{chat}">
          {chat}
          </a>
        </li>
        <li>
          Для смартфона/app: ​​<a href="https://element.io/get-started#download"
            >https://element.io/get-started#download</a
          >
        </li>
        <li>
          Для app: під час налаштування використовуйте наступну назву домашнього
          сервера: {server}
        </li>
      </ul>
      <H2>Як розпочати:</h2>
      <ul>
        <li>Створіть обліковий запис</li>
        <li>Створіть/приєднайтесь до публічної кімнати</li>
        <li>Створіть приватну кімнату та відправте посилання друзям</li>
      </ul>

      <H2>Як це працює:</h2>
      <ul>
        <li>усі особисті та групові чати наскрізно зашифровані</li>
        <li>користувачі створюють приватні кімнати та обмінюються своїми ID</li>
        <li>
          мережа локалізована у Харкові, ніхто ззовні не зможе нею користуватися
        </li>
      </ul>
      <p>
        Поділіться з друзями та близькими, створюйте ПРИВАТНІ кімнати для обміну
        повідомленнями.
      </p>`
    },
    briar: {
      title: 'Briar is a peer-to-peer messenger.',
      content: `<h2>What is Briar?</h2>
      <p>
        Briar is a messaging app designed for activists, journalists, and anyone
        else who needs a safe, easy and robust way to communicate.
      </p>
      <p>
        Unlike traditional messaging apps, Briar doesn’t rely on a central
        server - messages are synchronized directly between the users' devices.
      </p>
      <p>
        If the internet’s down, Briar can sync via Bluetooth or Wi-Fi, keeping
        the information flowing in a crisis. If the internet’s up, Briar can
        sync via the Tor network, protecting users and their relationships from
        surveillance.
      </p>

      <dev><img src="/docs/briar/img/briar.png" width="100%" /></dev>

      <h2>Creating an Account</h2>
      <p>
        When you open the Briar app for the first time you'll be asked to create
        an account. Your account will be stored securely on your device,
        encrypted with your password.
      </p>
      <p>
        Choose your nickname carefully as you can't change it later. You can
        choose the same nickname as someone else, just like in real life.
      </p>
      <p>
        Choose a password that's hard to guess but easy to remember. If you
        forget your password we can't help you regain access to your account.
      </p>
      <p>
        If you need to delete your account in a hurry, just uninstall the Briar
        app.
      </p>

      <h2>Battery Settings</h2>
      <p>
        After choosing your nickname and password, Briar will ask for permission
        to disable battery optimizations so it can run in the background. This
        is necessary because there's no server to receive messages on your
        behalf while Briar is in the background: Briar needs to receive those
        messages itself.
      </p>
      <p>
        On Huawei and Xiaomi devices you'll be asked to take extra steps to let
        Briar run in the background. Please follow the instructions carefully.
      </p>

      <h2>Adding a Contact</h2>
      <p>
        After creating your account you'll see an empty contact list. To add a
        contact, press the plus button (+). There are two options, depending on
        whether the person you want to add is nearby.
      </p>
      <p>
        If the person you want to add is nearby, choose "Add contact nearby". If
        the person you want to add is not nearby and you have Internet access,
        choose "Add contact at a distance".
      </p>

      <h2>Adding a Contact Nearby</h2>
      <p>
        When you choose "Add contact nearby", Briar will ask for permission to
        use your camera so it can scan your contact's QR code. Briar will also
        ask for permission to access your location so it can connect to your
        contact via Bluetooth. Briar doesn't store, share, or upload your
        location, but this permission is needed for discovering nearby Bluetooth
        devices. Finally, Briar will ask for permission to turn on Bluetooth and
        make your device visible to nearby Bluetooth devices for a short time.
      </p>
      <p>
        After granting all these permissions, Briar will show a QR code and a
        camera viewfinder. Scan your contact's QR code and let them scan yours.
        After about 30 seconds your devices should connect to each other and
        your contact should be added to your contact list.
      </p>
      <p>
        If your devices fail to connect to each other, both of you should go
        back to the contact list and start the process again.
      </p>

      <h2>Adding a Contact at a Distance</h2>
      <p>
        When you choose "Add contact at a distance", Briar will show a link that
        needs to be sent to the person you want to add. You can send the link
        via another app such as Signal. Your contact also needs to send you
        their link. Paste your contact's link and choose a nickname for them. If
        you and your contact are both signed into Briar and both have Internet
        access then your contact should be added to your contact list within a
        few minutes.
      </p>

      <h2>Send a Message</h2>
      <p>
        After adding your first contact, tap their name in the contact list to
        send your first message. The circle next to your contact's name will be
        green when Briar is connected to your contact via Internet, Wi-Fi or
        Bluetooth.
      </p>

      <h2>Introduce Your Contacts</h2>
      <p>
        You can use the introduction feature to introduce your contacts to each
        other so they don't have to meet up in person to add each other.
      </p>

      <h2>Write a blog post</h2>
      <p>
        You can use the blog feature to write posts that all your contacts can
        see. You can also reblog other people's posts to let all your contacts
        see them.
      </p>
      <p>
        Bear in mind that you can't delete blog posts after they've been sent.
      </p>

      <h2>Create a forum</h2>
      <p>
        You can use the forum feature to create group discussions and invite
        your contacts to join. Anyone who belongs to a forum can invite their
        own contacts to join.
      </p>

      <h2>Tips for offline communication</h2>
      <p>
        The range of Bluetooth and Wi-Fi is around 10 metres, depending on
        obstacles. Clearly this isn't enough for communicating across a city or
        even a large building. So when Briar receives a message from a nearby
        contact, it stores the message and can later pass it on to other
        contacts when they come within range (for example, when you move from
        one place to another).
      </p>
      <p>
        Please note that Briar will only synchronize messages with your
        contacts, not with nearby strangers who are running Briar. And it will
        only sync the messages you've chosen to share with each contact. For
        example, if you invite your contacts X and Y to join a forum, and they
        accept, then messages in that forum will be synced with X or Y whenever
        they're within range. So you can receive forum messages from X in one
        location, travel to another location, and deliver those messages to Y.
      </p>
      <p>
        But this doesn't work for private messages: they're only synchronized
        directly between the sender and recipient.
      </p>
      <p>
        A forum is a good way for a group of people to keep in touch without
        Internet access. To make sure that forum posts are synced between all
        members of the forum, introduce all the members so they become contacts,
        and make sure that everyone invites everyone else to the forum and
        accepts the invitations, even if they already belong to the forum. This
        will ensure that whenever two members are within Bluetooth or Wi-Fi
        range they synchronize all the forum messages they've received.
      </p>
      <p>
        If lots of people within Wi-Fi range want to communicate, it can be
        useful to create a Wi-Fi hotspot on one person's phone. Even if the
        hotspot doesn't have Internet access, Briar can use it to communicate
        with contacts who are connected to the same hotspot.
      </p>
      <p>
        If it's too risky to carry your phone from place to place (eg
        checkpoints), you can sync encrypted messages using a USB stick or SD
        card to carry them more discreetly.
      </p>

      <video controls width="100%">
        <source src="/docs/briar/briar.webm" />
      </video>`
    },
    ceno: {
      title: "Browse and share online content, even when the internet is down.",
      content: `<p>
          CENO Browser allows you to access any website on the Internet, even if
          it is censored in your country. CENO uses a peer-to-peer
          infrastructure to route your requests, as well as to store and share
          retrieved content with others.
        </p>
        <h2 id="how-to-get-started">
          How to get started</a>
        </h2>
        <p>You will need an Android device:</p>
        <ol>
          <li>
            Install CENO Browser
            <a href="../../package/ceno/files/">directly</a>, or from
            <a href="https://play.google.com/store/apps/details?id=ie.equalit.ceno">Google Play</a>,
            <a href="https://github.com/censorship-no/ceno-browser/releases">GitHub</a>
            or
            <a href="https://paskoocheh.com/tools/124/android.html">Paskoocheh</a>. <em>No special permissions are needed</em>.
          </li>
          <li>Run it.</li>
          <li>
            Browse pages normally to help other users access them; if concerned
            about privacy for some page or if it is not loading as expected, use
            a private tab (see
            <a href="https://censorship.no/user-manual/en/concepts/public-private.html">public vs. private browsing</a>).
          </li>
          <li>Tap on the CENO notification to stop it completely.</li>
        </ol>
        <p>
          Detailed installation instructions are
          <a href="https://censorship.no/user-manual/en/browser/install.html">here</a>.
        </p>
        <h2 id="configuration">Configuration</h2>
        <p>
          CENO Browser should work out-of-the-box. You can find some
          <a href="https://censorship.no/user-manual/en/browser/settings.html">diagnostics and settings</a>
          under the <em>CENO</em> menu entry.
        </p>
        <p>
          If you want to make sure that your app is also helping others access
          blocked content, please
          <a href="https://censorship.no/user-manual/en/browser/bridging.html">read this section</a>.
        </p>
        <h2 id="more-questions">More questions?</h2>
        <ul>
          <li>
            Please see the
            <a href="https://censorship.no/user-manual/en/intro/faq.html">FAQ</a>.
          </li>
          <li>
            Download the <a target="_blank" href="ceno-manual_en.pdf">full user manual.</a>
          </li>
          <li>
            Contact us by writing to
            <a href="mailto:cenoers@equalit.ie">cenoers@equalit.ie</a>.
          </li>
        </ul>`
    },
    newnode: {
      title: 'Безкоштовний VPN з використанням надійної однорангової мережі.',
      content: `<p>NewNode VPN creates an alternative network connection allowing your device to communicate in situations where a desired internet site or resource is blocked or unavailable.</p>
        <p>NewNode VPN utilizes a flexible, robust, peer-to-peer network to route your data around close or distant network obstacles. NewNode VPN is entirely server-independent and resistant to DDoS attacks. NewNode has been security audited, making it unique among VPN apps.</p>
        <h2>ONE TAP CONNECT</h2>
        <p>Using the NewNode VPN app is simple, just launch it and click the “On” button!</p>
        <h2>WHAT DOES IT DO?</h2>
        <p>After enabling NewNode VPN its alternative NewNode network springs into action and transmits network data when an app on your device is having trouble connecting to a given address. NewNode VPN only improves your network speed, and never slows it. If the content you want to access is available, there is no change in your network behavior; if there is any obstacle, NewNode VPN’s unique peer-2-peer capability kicks in. If your normal internet can’t get to where it needs to go, NewNode VPN is used instead!</p>
        <p>NewNode VPN is an implementation of unique NewNode dCDN technology. Details can be found at www.newnode.com.</p>
        <h2>FREE!</h2>
        <p>NewNode VPN is free — no subscriptions, no in-app purchases, no ads.</p>
        <p>This app requires the proxy settings feature released with Android 10. Stay tuned for support for older versions of Android  — coming soon.</p>`
    },
  }
};
