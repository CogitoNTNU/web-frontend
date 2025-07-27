import { ArticleType } from "../lib/types";

export const articles: ArticleType[] = [
  {
    articleId: "neatactics",
    landingPage: {
      title: "NEATACTICS",
      description:
        "Hvordan kan en datamaskin lære seg å spille Mario helt selv?",
    },
    descriptionPage: {
      description:
        "NEATactics er et prosjekt som bygger på KI-metoden NEAT (Neuroevolution of Augmenting Topologies), en genetisk algoritme for å utvikle nevrale nettverk. Dette er noe av det nærmeste vi har til menneskelig evolusjon, men i form av en maskinlæringsmodell. Modellen har ingen forhåndskunnskap om miljøet den opererer i, men har lært en intern representasjon av verdenen som den bruker til å bestemme policyen for sin adferd.",
      funFacts: [
        "NEATactics trente modellen sin på IDUN, en supercomputer på NTNU!",
        "Gruppen programmerte nesten alt fra bunnen av, f.eks. de nevrale nettverkene etc. Wow!",
      ],
      links: ["https://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf"],
      technologies: ["Python 3", "OpenAI Gymnasium", "Pygame", "Flask"],
    },
    teamPage: {
      team: [
        {
          name: "Christian Fredrik Johnsen",
          role: "Leder",
          github: "https://github.com/ChristianFredrikJohnsen",
          linkedIn: "",
        },
        {
          name: "Brage Kvamme",
          role: "Leder",
          github: "https://github.com/BrageHK",
          linkedIn: "https://www.linkedin.com/in/brage-kvamme-b33318212/",
        },
        {
          name: "Nils Henrik Hoelfeldt Lund",
          role: "Medlem",
          github: "https://github.com/Nilsthehacker",
          linkedIn: "",
        },
        {
          name: "Kristian Carlenius",
          role: "Medlem",
          github: "https://github.com/kristiancarlenius",
          linkedIn: "https://www.linkedin.com/in/kristian-carlenius-aa155722b/",
        },
        {
          name: "Ludvig Øvrevik",
          role: "Medlem",
          github: "https://github.com/ludvigovrevik",
          linkedIn:
            "https://www.linkedin.com/in/ludvig-%C3%B8vrevik-436831214/",
        },
        {
          name: "Kacper Pawlowski",
          role: "Medlem",
          github: "https://github.com/kapi0okapi",
          linkedIn: "https://www.linkedin.com/in/kacper-pawlowski-914ab8297/",
        },
        {
          name: "Vetle Støren",
          role: "Medlem",
          github: "https://github.com/Vetlets05",
          linkedIn: "https://www.linkedin.com/in/vetle-st%C3%B8ren-661259322/",
        },
        {
          name: "Håkon Støren",
          role: "Medlem",
          github: "https://github.com/Hako2807",
          linkedIn:
            "https://www.linkedin.com/in/h%C3%A5kon-st%C3%B8ren-0b5258322/",
        },
      ],
    },
    semester: "Høst",
    year: 2024,
    github: "https://github.com/CogitoNTNU/NEATactics",
  },
  {
    articleId: "cogito-infor-agents",
    landingPage: {
      title: "Cogito x Infor",
      description:
        "AI-drevne nettleseragenter som automatiserer testprosesser og frigjør tusenvis av timer med manuelt arbeid.",
    },
    descriptionPage: {
      description:
        "I samarbeid med verdens tredje største ERP-leverandør jobbet vi i Cogito x Infor med å automatisere testlaging og testutførelse ved hjelp av AI-drevne nettleseragenter. Selskapet bruker i dag titusenvis av timer årlig på manuelle tester basert på PDF-beskrivelser og klikking i grensesnittet. Vi utviklet en løsning med Browser-Use, drevet av GPT-4o, som navigerer nettsider basert på skjermbilder og HTML-innhold. Denne løsningen genererer deterministiske Playwright-skript fra handlingene agenten utfører, noe som gjør testprosessen rask, automatisk og reproduserbar.\n\nVi designet også en intuitiv Next.js frontend der brukere kan sende testforespørsler, se hvert steg agenten utførte gjennom skjermbilder, og generere klare Playwright-skript helt uten å skrive én linje kode. Resultatet er et effektivt verktøy som dramatisk kutter ned på manuelt arbeid, øker testhastigheten og gjør testprosessen langt mer skalerbar.",
      funFacts: [
        "Prosjektet reduserer tusenvis av timer med manuelt arbeid hvert år.",
        "Løsningen lar brukere generere E2E tester uten å skrive en eneste linje kode!",
        "Brukte GPT-4o for å intelligent navigere nettsider via skjermbilder og HTML.",
      ],
      links: [
        "https://www.infor.com/",
        "https://python.langchain.com/docs/introduction/",
        "https://playwright.dev/",
        "https://nextjs.org/",
      ],
      technologies: [
        "GPT-4o",
        "Langchain",
        "Browser-Use",
        "Playwright",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Python",
      ],
    },
    teamPage: {
      team: [
        {
          name: "Thomas Sørensen",
          role: "Leder",
          github: "https://github.com/thomsoren",
          linkedIn:
            "https://www.linkedin.com/in/thomas-nordby-s%C3%B8rensen-80253b1ab/",
        },
        {
          name: "Ingunn Tonetta Erdal",
          role: "Medlem",
          github: "https://github.com/ingunntonetta",
          linkedIn: "https://www.linkedin.com/in/ingunn-tonetta-erdal/",
        },
        {
          name: "Guillermo Llinares",
          role: "Medlem",
          github: "https://github.com/willer-mo",
          linkedIn:
            "https://www.linkedin.com/in/guillermo-llinares-palma-27311a10b/",
        },
        {
          name: "Lauritz Emil Kolbeinsen",
          role: "Medlem",
          github: "",
          linkedIn:
            "https://www.linkedin.com/in/lauritz-emil-kolbeinsen-227a91298/",
        },
        {
          name: "Teodor Rustad Kvisberg",
          role: "Medlem",
          github: "https://github.com/TeodorRusKvi",
          linkedIn: "https://www.linkedin.com/in/teodor-rustad-kvisberg/",
        },
      ],
    },
    semester: "Vår",
    year: 2025,
  },
];
