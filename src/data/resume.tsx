import { Icons } from "@/components/icons";
import { BriefcaseIcon, HomeIcon, MicIcon } from "lucide-react";

export const DATA = {
  name: "Diego Zuluaga",
  initials: "DZ",
  url: "https://diegozuluaga.dev",
  location: "San Jose, CA",
  locationLink: "https://www.google.com/maps/place/San+Jose,+CA",
  description:
    "Engineering leader building trust into AI agents: digital credentials, agentic commerce, and open-source SDKs on 800M+ devices.",
  summary:
    "I’ve spent 25 years in customer-facing engineering, helping developers ship on new platforms: nine of them across Apigee and Google (APIs, Assistant, Android), and since 2022 at Futurewei, where I head [Open Mobile Hub](https://openmobilehub.org) under the Linux Foundation, whose open-source SDKs reach 800M+ devices, and built a forward-deployed engineering team from zero. Today I work on the part most “agent that pays” demos skip: **who authorized it, and can you prove it?** I lead agentic commerce on [Multipaz](https://developer.multipaz.org), the OpenWallet Foundation credential library used in Google Wallet, and [CredentAgent](https://github.com/openmobilehub/credentagent), an open-source consent layer for AI agents. I’m a first-cohort [Agentic AI Foundation Ambassador](https://aaif.io/ambassadors/). Outside work I race: ultramarathons, IRONMAN California, and Escape from the Rock.",
  avatarUrl: "/headshot.jpg",
  skills: [
    "Agentic commerce",
    "AP2 · ACP · UCP · x402",
    "Model Context Protocol",
    "Verifiable credentials",
    "ISO mdoc · SD-JWT · OpenID4VP",
    "Android & on-device AI",
    "Developer relations",
    "Engineering leadership",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: BriefcaseIcon, label: "Projects" },
    { href: "/#talks", icon: MicIcon, label: "Talks" },
  ],
  contact: {
    email: "diego@diegozuluaga.dev",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/diegofzuluaga",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dzuluaga",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/dzuluaga",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:diego@diegozuluaga.dev",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Futurewei Technologies",
      href: "https://www.futurewei.com",
      badges: [],
      location: "San Jose, CA",
      title: "Director, Partner Solution Architecture",
      logoUrl: "/logos/futurewei.com.png",
      start: "Oct 2022",
      end: "Present",
      description:
        "At Huawei’s US R&D lab: head Open Mobile Hub under the Linux Foundation (open-source SDKs reaching 800M+ devices), lead our digital-credential and agentic-commerce work, and built an 8-person forward-deployed engineering team from zero. Mentored three engineers from mid to senior and 5×’d delivery velocity with AI dev tooling.",
    },
    {
      company: "Google",
      href: "https://developer.android.com",
      badges: [],
      location: "Mountain View, CA",
      title: "Senior Developer Relations Engineer, Android & Assistant",
      logoUrl: "/logos/google.com.png",
      start: "May 2018",
      end: "Oct 2022",
      description:
        "Android (2021–22): led global developer relations for gesture navigation and messaging, influencing adoption across 100+ top apps. Google Assistant (2018–21): helped developers build for a platform on over a billion devices.",
    },
    {
      company: "Google Cloud",
      href: "https://cloud.google.com/apigee",
      badges: [],
      location: "San Jose, CA",
      title: "Senior Solution Architect / Partner Engineer",
      logoUrl: "/logos/cloud.google.com.png",
      start: "Jul 2017",
      end: "May 2018",
      description:
        "After Google acquired Apigee: led Apigee API Management partner enablement, training 200+ partner solution engineers, and was an escalation point for strategic customers through the transition.",
    },
    {
      company: "Apigee",
      href: "https://cloud.google.com/apigee",
      badges: [],
      location: "San Jose, CA",
      title: "Principal Solution Architect",
      logoUrl: "/logos/apigee.jpg",
      start: "Aug 2013",
      end: "Jul 2017",
      description:
        "Created the API Delivery Methodology, a deployment playbook covering intake, scoping, rollout gates, and post-launch validation, adopted across a 40-person organization.",
    },
    {
      company: "IBM (Varicent)",
      href: "https://www.ibm.com",
      badges: [],
      location: "Toronto, Canada",
      title: "Senior Solution Architect",
      logoUrl: "/logos/ibm.jpg",
      start: "Feb 2011",
      end: "Aug 2013",
      description:
        "Pioneered the REST API for Varicent SPM and built enterprise integrations for customers including Capital One and Thomson Reuters.",
    },
    {
      company: "Axsium Group",
      href: "https://www.axsium.com",
      badges: [],
      location: "Toronto, Canada",
      title: "Senior Technical Consultant",
      logoUrl: "/logos/axsium.com.png",
      start: "May 2005",
      end: "Feb 2011",
      description:
        "Workforce-management and Cognos implementations across 500+ retail stores.",
    },
  ],
  education: [
    {
      school: "York University, Schulich School of Business",
      href: "https://schulich.yorku.ca",
      degree: "Master’s Certificate, Business Analysis",
      logoUrl: "/logos/schulich.yorku.ca.png",
      start: "",
      end: "",
    },
    {
      school: "Universidad Icesi",
      href: "https://www.icesi.edu.co",
      degree: "B.S. Systems Engineering (Honors)",
      logoUrl: "/logos/icesi.edu.co.png",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "OMH Maps SDK",
      href: "https://github.com/openmobilehub/react-native-omh-maps",
      dates: "2024 – 2025 · Open Mobile Hub (LF)",
      active: true,
      description:
        "One maps API for Android and React Native that runs on Google (GMS) and non-GMS devices alike, with pluggable providers: Google Maps, OpenStreetMap, Mapbox, and Azure Maps. On iOS, Apple Maps and Google Maps.",
      technologies: ["Android", "React Native", "Kotlin", "TypeScript"],
      links: [
        {
          type: "Android",
          href: "https://github.com/openmobilehub/android-omh-maps",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "React Native",
          href: "https://github.com/openmobilehub/react-native-omh-maps",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/omh-maps.png",
      video: "",
    },
    {
      title: "CredentAgent",
      href: "https://github.com/openmobilehub/credentagent",
      dates: "2026 · Lead · Open Mobile Hub (LF)",
      active: true,
      description:
        "The consent layer for AI agents. Before an agent does anything consequential (a payment, an age check, an access grant), it asks the wallet on your phone for proof: a verifiable credential held in secure hardware, sharing one fact and nothing more. Ships as an MCP App.",
      technologies: ["MCP Apps", "ISO mdoc", "SD-JWT", "OpenID4VP", "W3C DC API", "Apache-2.0"],
      links: [
        {
          type: "Source",
          href: "https://github.com/openmobilehub/credentagent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/credentagent.png",
      video: "",
    },
    {
      title: "Agentic commerce on Multipaz",
      href: "https://developer.multipaz.org",
      dates: "2026 · Lead · OpenWallet Foundation",
      active: true,
      description:
        "Extending hardware-backed digital credentials into agent payment flows on Multipaz, the OpenWallet Foundation library donated by Google and used in Google Wallet. Roadmap aligned weekly with the maintainers.",
      technologies: ["Multipaz", "StrongBox", "Digital Payment Credentials", "AP2"],
      links: [
        {
          type: "Website",
          href: "https://developer.multipaz.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/multipaz.png",
      video: "",
    },
    {
      title: "Digital Credential MCP Server",
      href: "https://github.com/openmobilehub/mcp-apps-shopping-demo",
      dates: "2026 · Open Mobile Hub",
      active: true,
      description:
        "One TypeScript codebase: a commerce UI embedded inside Claude, ChatGPT, and goose, where a device-held credential authorizes an AP2 payment mandate and x402 settles it on testnet.",
      technologies: ["MCP Apps", "AP2", "x402", "TypeScript"],
      links: [
        {
          type: "Demo",
          href: "https://www.youtube.com/watch?v=biTqHo2dL7M",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/openmobilehub/mcp-apps-shopping-demo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/mcp-server.jpg",
      video: "",
    },
    {
      title: "OMH Auth SDK",
      href: "https://github.com/openmobilehub/react-native-omh-auth",
      dates: "2024 · Open Mobile Hub (LF)",
      active: true,
      description:
        "One sign-in API for Android and React Native across GMS and non-GMS devices: Google, Facebook, Microsoft, and Dropbox, with instant sign-in through the native apps and Custom Tabs on Android.",
      technologies: ["Android", "React Native", "OAuth", "Kotlin", "TypeScript"],
      links: [
        {
          type: "Android",
          href: "https://github.com/openmobilehub/android-omh-auth",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "React Native",
          href: "https://github.com/openmobilehub/react-native-omh-auth",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/omh-auth.png",
      video: "",
    },
    {
      title: "OMH Storage SDK",
      href: "https://github.com/openmobilehub/react-native-omh-storage",
      dates: "2024 – 2025 · Open Mobile Hub (LF)",
      active: true,
      description:
        "One cloud-storage API for Android and React Native over the providers’ official SDKs: Google Drive (GMS and non-GMS), OneDrive, and Dropbox, with the same code on every device.",
      technologies: ["Android", "React Native", "Google Drive", "OneDrive", "Dropbox"],
      links: [
        {
          type: "Android",
          href: "https://github.com/openmobilehub/android-omh-storage",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "React Native",
          href: "https://github.com/openmobilehub/react-native-omh-storage",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/omh-storage.png",
      video: "",
    },
    {
      title: "AP2 from First Principles",
      href: "/ap2/",
      dates: "2026 · Course · diegozuluaga.dev/ap2",
      active: true,
      description:
        "Learn Google’s Agent Payments Protocol by building it: ES256/JOSE from scratch, checkout and payment mandates, the six roles, then each piece mapped to the official SDK.",
      technologies: ["AP2", "JOSE", "Docusaurus"],
      links: [
        {
          type: "Course",
          href: "/ap2/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dzuluaga/ap2-getting-started",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/ap2.png",
      video: "",
    },
    {
      title: "MCP 2026-07-28 Walkthrough",
      href: "/mcpa/",
      dates: "2026 · Course · diegozuluaga.dev/mcpa",
      active: true,
      description:
        "The latest MCP spec revision, one lesson per page: real-world stories, diagrams, colour-coded payloads, runnable tests, a final exam, and spaced review.",
      technologies: ["MCP", "MCPA prep"],
      links: [
        {
          type: "Course",
          href: "/mcpa/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/mcpa.png",
      video: "",
    },
    {
      title: "x402-android",
      href: "https://github.com/openmobilehub/x402-android",
      dates: "2026 · Open Mobile Hub",
      active: true,
      description:
        "A hardware-backed Android wallet for x402 payments: keys wrapped by StrongBox, never extractable, with device attestation so a merchant knows the request came from a real phone.",
      technologies: ["Android", "StrongBox", "x402", "USDC"],
      links: [
        {
          type: "Demo",
          href: "https://youtube.com/shorts/gpVeYkYqaJE",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/openmobilehub/x402-android",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/x402-android.png",
      video: "",
    },
    {
      title: "Stripe × x402 walkthrough",
      href: "https://github.com/dzuluaga/stripe-x402-walkthrough",
      dates: "2026 · Reference",
      active: true,
      description:
        "HTTP 402 to Stripe to the Coinbase CDP facilitator to real USDC settlement on Base, in seven incremental steps. Shown to the OpenWallet Foundation TAC.",
      technologies: ["x402", "Stripe", "Base"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dzuluaga/stripe-x402-walkthrough",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/stripe-x402.png",
      video: "",
    },
    {
      title: "Shopify UCP getting started",
      href: "https://github.com/dzuluaga/shopify-ucp-getting-started",
      dates: "2026 · Guide",
      active: true,
      description:
        "The full agent buyer journey over MCP (auth, catalog, cart, checkout, order) with the protocol gaps and DX notes written down.",
      technologies: ["UCP", "MCP", "Shopify"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dzuluaga/shopify-ucp-getting-started",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/shopify-ucp.png",
      video: "",
    },
  ],
  talks: [
    {
      title: "Agents Can Pay. Can They Prove It?",
      dates: "September 18, 2026",
      location: "AGNTCon + MCPCon Europe · Amsterdam",
      description:
        "How an agent proves who authorized a payment: verifiable credentials from the user’s wallet, bound to AP2 mandates, with the real-vs-mocked parts stated on stage.",
      image: "/logos/aaif.io.png",
      links: [
        {
          title: "Session",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://agntconmcpconeu26.sched.com/event/2RBAL",
        },
      ],
    },
    {
      title: "Agents Can Pay. Can They Prove It?",
      dates: "September 6–7, 2026",
      location: "AGNTCon + MCPCon China · Shanghai",
      description:
        "With Saurabh Goyal. The identity-first edition of the talk: open credential standards as the lane alongside national digital ID.",
      image: "/logos/aaif.io.png",
      links: [
        {
          title: "Session",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.lfopensource.cn/mcp-dev-summit-shanghai/program/schedule/?id=1256396",
        },
      ],
    },
    {
      title: "Your Identity Wallet, Now for AI Agents",
      dates: "September 3, 2026",
      location: "Global Digital Collaboration (GDC26) · Geneva",
      description:
        "With David Zeuthen (Multipaz, Google). Hardware-held credentials an agent can present and pay with, live on Android and iOS, with CredentAgent as the open-source deliverable.",
      image: "/logos/globaldigitalcollaboration.org.png",
      links: [
        {
          title: "Session",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://globaldigitalcollaboration.org/gdc26?day=sept-3",
        },
        {
          title: "GDC26 after-movie",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=WlS2_P65f3E",
        },
      ],
    },
    {
      title: "Digital identity with Multipaz and Open Mobile Hub",
      dates: "July 2025",
      location: "Global Digital Collaboration (GDC25) · Geneva",
      description:
        "Main-stage joint talk with David Zeuthen (Multipaz, Google): one open credential stack across wallets, apps, and devices. My part starts at 28:28.",
      image: "/logos/globaldigitalcollaboration.org.png",
      links: [
        {
          title: "Watch",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/FhXOSuaIiew?t=1708",
        },
      ],
    },
    {
      title: "Linux Foundation summits",
      dates: "2025",
      location: "Denver · LF Member Summit, Napa",
      description: "Open Mobile Hub and open-source SDKs for 800M+ devices.",
      image: "/logos/linuxfoundation.org.png",
      links: [],
    },
    {
      title: "Fixing Challenges With Mobile App Development Across Platforms",
      dates: "July 2024",
      location: "Linux Foundation webinar",
      description:
        "How Open Mobile Hub gives Android and React Native apps one API for maps, sign-in, and storage on GMS and non-GMS devices.",
      image: "/logos/linuxfoundation.org.png",
      links: [
        {
          title: "Watch",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linuxfoundation.org/webinars/fixing-challenges-with-mobile-app-development-across-platforms",
        },
      ],
    },
    {
      title: "From Fragmentation to Unity: The Role of OMH in Mobile Development",
      dates: "September 2024",
      location: "React Universe Conf · Wrocław",
      description:
        "With Preston Lau. Open Mobile Hub as one interface for developers, service providers, and OEMs across GMS and non-GMS devices, and the launch of the OMH Cloud Storage module.",
      image: "/logos/callstack.com.png",
      links: [
        {
          title: "Watch",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=0eBxvmc54OA",
        },
      ],
    },
    {
      title: "Gesture navigation best practices",
      dates: "2022",
      location: "droidcon",
      description:
        "With Aaron Labiaga, as Android Developer Relations at Google: predictive back, edge-to-edge, gesture conflicts, and immersive modes for Android 13+.",
      image: "/logos/google.com.png",
      links: [
        {
          title: "Watch",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=1bFwIKYYMG4",
        },
        {
          title: "Session",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.droidcon.com/2022/08/01/gesture-navigation-best-practices/",
        },
      ],
    },
  ],
  writing: [
    {
      kind: "Paper",
      title: "Cross-Platform Digital Payment Credential & Agentic AI Commerce Ecosystem",
      detail: "White paper · Google Docs",
      href: "https://docs.google.com/document/d/1S0ec6Jof3X4vY_-RHBiqdyjKPQyJW5GqoU8eCNrD4QU/edit",
    },
    {
      kind: "Paper",
      title: "Secure Wearable Apps for Remote Healthcare Through Modern Cryptography",
      detail: "arXiv:2410.07629 · 2024 · with Andric Li, Grace Luo, Christopher Tao",
      href: "https://arxiv.org/abs/2410.07629",
    },
    {
      kind: "Podcast",
      title: "Open Mobile Hub: Non-GMS and Cross-Platform Possibilities",
      detail: "React Universe On Air (Callstack) · August 2024",
      href: "https://www.callstack.com/podcasts/open-mobile-hub-opening-non-gms-and-cross-platform-possibilities",
    },
    {
      kind: "Article",
      title: "Introducing the OMH Cloud Storage Module",
      detail: "Callstack blog · October 2024",
      href: "https://www.callstack.com/blog/introducing-the-omh-cloud-storage-module",
    },
    {
      kind: "Article",
      title: "Introduction to the React Native OMH Maps Library",
      detail: "Callstack blog · July 2024",
      href: "https://www.callstack.com/blog/introduction-to-the-react-native-omh-maps-library",
    },
    {
      kind: "Blog",
      title: "Prepare your app to support predictive back gestures",
      detail: "Android Developers Blog · July 2022 · with Jason Tang and Michael Mauzy",
      href: "https://android-developers.googleblog.com/2022/07/prepare-your-app-to-support-predictive-back-gestures.html",
    },
    {
      kind: "Codelab",
      title: "Update your app to support future predictive back gesture",
      detail: "Google Codelabs · Android",
      href: "https://codelabs.developers.google.com/handling-gesture-back-navigation",
    },
    {
      kind: "Docs",
      title: "Add support for the predictive back gesture",
      detail: "Android Developers guide",
      href: "https://developer.android.com/guide/navigation/custom-back/predictive-back-gesture",
    },
    {
      kind: "Docs",
      title: "Support modern emoji",
      detail: "Android Developers guide",
      href: "https://developer.android.com/guide/topics/ui/look-and-feel/emoji2",
    },
    {
      kind: "Docs",
      title: "Google Assistant for Android: App Actions",
      detail: "Google Developers documentation",
      href: "https://developers.google.com/assistant/app/overview",
    },
  ],
  earlierCode: [
    {
      title: "Google Assistant App Actions sample (Kotlin)",
      href: "https://github.com/actions-on-google/appactions-common-biis-kotlin",
    },
    {
      title: "Snowman: Interactive Canvas sample (Dialogflow, Node.js)",
      href: "https://github.com/actions-on-google/dialogflow-snowman-nodejs",
    },
    {
      title: "Predictive back navigation codelab sample",
      href: "https://github.com/googlecodelabs/handling-back-navigation",
    },
    {
      title: "Apigee deploy Grunt.js plugin",
      href: "https://github.com/apigeecs/apigee-deploy-grunt-plugin",
    },
    {
      title: "Datamodel to OpenAPI",
      href: "https://github.com/dzuluaga/datamodel-to-oas",
    },
  ],
  races: [
    {
      title: "IRONMAN 70.3 Santa Cruz",
      year: "2024",
      href: "https://feathersprod.blob.core.windows.net/api-public/074fcbfb-35b1-418f-b1bf-4c27957223bb.pdf",
    },
    {
      title: "IRONMAN California",
      year: "2023",
      href: "https://feathersprod.blob.core.windows.net/api-public/7669B464-0ADC-4AA0-A446-F5B654D90D3C.pdf",
    },
    {
      title: "IRONMAN 70.3 Santa Cruz",
      year: "2023",
      href: "https://feathersprod.blob.core.windows.net/api-public/9EBC1440-C0D1-45FB-9BE5-EBD3EECB4BE8.pdf",
    },
    {
      title: "Escape from the Rock XL Duathlon",
      year: "2022",
      href: "https://raceroster.com/events/2022/49870/2022-alcatraz-xl-escape-from-the-rock",
    },
    {
      title: "Redtail Ridge 50K, Lake Chabot",
      year: "",
      href: "https://runsignup.com/Race/Results/143410/IndividualResult/zNFf?resultSetId=437494#U84507078",
    },
    {
      title: "Broken Arrow Ultramarathon 46K",
      year: "",
      href: "https://www.athlinks.com/event/171438/results/Event/1053701/Course/2374411/Bib/2730",
    },
    {
      title: "San Diego Marathon",
      year: "",
      href: "https://feathersprod.blob.core.windows.net/api-public/5f822051-bb2d-4805-9fe1-9694eee6361c.pdf",
    },
  ],
  demos: [
    {
      title: "Agentic commerce end to end: Claude + digital credentials + x402 settlement",
      href: "https://www.youtube.com/watch?v=biTqHo2dL7M",
    },
    {
      title: "Shopping inside the Claude mobile app with a digital payment credential",
      href: "https://youtube.com/shorts/JA91c2d2DhQ",
    },
    {
      title: "Paying inside the ChatGPT mobile app: AP2 checkout and payment mandate",
      href: "https://youtube.com/shorts/8rMx5P1AOgI",
    },
    {
      title: "Conversational shopping in an MCP App, with passkey payment authorization (goose)",
      href: "https://youtu.be/qAXgxuihbA8",
    },
    {
      title: "How I built a hardware-backed USDC wallet on Android",
      href: "https://youtube.com/shorts/gpVeYkYqaJE",
    },
  ],
  community: [
    {
      name: "Agentic AI Foundation",
      role: "Ambassador (first cohort) · Agentic Commerce and Identity & Trust working groups",
      href: "https://aaif.io/ambassadors/",
      logoUrl: "/logos/aaif.io.png",
    },
    {
      name: "Open Mobile Hub (Linux Foundation)",
      role: "Project head · with Google and Microsoft",
      href: "https://openmobilehub.org",
      logoUrl: "/logos/openmobilehub.org.png",
    },
    {
      name: "OpenWallet Foundation",
      role: "Multipaz contributor · agentic commerce lead",
      href: "https://openwallet.foundation",
      logoUrl: "/logos/openwallet.foundation.png",
    },
  ],
} as const;
