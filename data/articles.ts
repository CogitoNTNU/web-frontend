import { ArticleType } from "../lib/types";

export const articles: ArticleType[] = [
  {
    articleId: "neatactics",
    landingPage: {
      title: "NEATACTICS",
      description:
        "Hvordan kan en datamaskin lære seg å spille Mario helt selv?",
      isVideo: true,
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
      isVideo: false,
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
  {
    articleId: "muzero",
    landingPage: {
      title: "MuZero",
      description:
        "Kan en og samme KI agent oppnå overmenneskelig nivå i brettspill og videospill uten å vite spillereglene?",
      isVideo: false,
    },
    descriptionPage: {
      description:
        "MuZero (Schrittwieser et al., DeepMind, 2019) er en banebrytende algoritme innen modellbasert forsterkningslæring som mestrer både planlegging og verdifunksjonsestimering, helt uten å kjenne miljøets regler på forhånd. Systemet mottar de siste 32 tilstandene i form av skjermbilder, med handlingen enkodet som en vektor. Deretter bearbeides disse inputene av tre nevrale nettverk som trenes sammen: Representasjonsnettverket omdanner råbilder til en kompakt intern tilstandsrepresentasjon som fanger opp relevante trekk i miljøet. Dynamikknettverket tar denne tilstandsrepresentasjonen og en foreslått handling som input, og predikerer neste interne tilstand samt umiddelbar belønning. Prediksjonsnettverket estimerer tilstandens verdi og gir en policy distribusjon over mulige handlinger. Systemet bruker nettverkene sammen med et tresøksalgoritme kjent som Monte Carlo Tree Search (MCTS) til å plannlegge og veildede utforskingen av mulige fremtidige tilstander og velge den beste handlingen basert på forventet belønning av hele treet. Siden Muzero ikke kjenner til reglene på forhånd, er ikke systemet begrenset til menneskelig bias og kan utvikle helt nye, “alien” løsninger. Arkitekturen er fleksibel og anvendbar på alt fra brettspill og Atari-spill til komplekse virkelige miljøer uten forhåndskjente regler.",
      funFacts: [
        "Systemet trengte vanvittig mye mer maskinkraft enn tidligere algoritmer som vi har utviklet i Cogito.",
        "Web-UI i React viser live tap/return og lar deg trene og konfigurere hyperparametere og netverks arkitektur.",
      ],
      links: [
        "https://arxiv.org/abs/1911.08265",
        "https://www.youtube.com/watch?v=WXuK6gekU1Y",
        "https://deepmind.google/discover/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules/",
      ],
      technologies: [
        "Python",
        "PyTorch med CUDA",
        "OpenAI Gymnasium",
        "WandB",
        "React",
        "Docker",
        "FastAPI",
      ],
    },
    teamPage: {
      team: [
        {
          name: "Brage Kvamme",
          role: "Leder",
          github: "https://github.com/BrageHK",
          linkedIn: "https://www.linkedin.com/in/brage-kvamme-b33318212/",
        },
        {
          name: "Christian Fredrik Johnsen",
          role: "Leder",
          github: "https://github.com/ChristianFredrikJohnsen",
          linkedIn: "",
        },
        {
          name: "Ludvig Øvrevik",
          role: "Medlem",
          github: "https://github.com/ludvigovrevik",
          linkedIn: "",
        },
        {
          name: "Eirik Solberg",
          role: "Medlem",
          github: "https://github.com/Eiriksol",
          linkedIn: "",
        },
        {
          name: "Kristian Carlenius",
          role: "Medlem",
          github: "https://github.com/kristiancarlenius",
          linkedIn: "https://www.linkedin.com/in/kristian-carlenius-aa155722b/",
        },
        {
          name: "Adi Singh",
          role: "Medlem",
          github: "https://github.com/adisinghstudent",
          linkedIn: "",
        },
        {
          name: "Nicolai Olsen",
          role: "Medlem",
          github: "https://github.com/Nicolai9897",
          linkedIn: "",
        },
        {
          name: "Vegard Grøder",
          role: "Medlem",
          github: "https://github.com/Vegardhgr",
          linkedIn: "",
        },
        {
          name: "Magnus Wang Wold",
          role: "Medlem",
          github: "https://github.com/Magnuww",
          linkedIn: "",
        },
      ],
    },
    semester: "Vår",
    year: 2025,
    github: "https://github.com/CogitoNTNU/DeepTactics-Muzero",
  },
  {
    articleId: "crawlai",
    landingPage: {
      title: "Crawl AI",
      description:
        "Kan en agent lære seg å gå, uansett hvilken kropp den får, ved hjelp av evolusjon?",
      isVideo: false,
    },
    descriptionPage: {
      description:
        "I dette prosjektet fikk agentene et par 'øyne' til å se terrenget foran seg, en kropp designet av brukeren, og ble sluppet løs i et kupert og utfordrende landskap. Der lærte de å bevege seg ved bruk av NEAT (NeuroEvolution of Augmenting Topologies), en genetisk algoritme som utvikler både strukturen og vektene i nevrale nettverk. Generasjon etter generasjon konkurrerte agentene om å komme lengst. De beste ble 'foreldre' for neste generasjon, og ga genene sine i form av nevrale nettverk, videre til avkommet. Men evolusjon har alltid noen overraskelser på lur. Etter bare et par timers trening fant enkelte agenter en uventet 'short-cut': de lærte å hoppe ut av verden for å vinne! CrawlAI ble dermed ikke bare et prosjekt om å bruke Bio-inspirert Kunstig Intelligens til å lære agenter å gå, men også et glimt inn i hvordan kunstig liv finner kreative (og noen ganger regelbrytende) løsninger på problemer.",
      funFacts: [
        "Agenten lærte å exploite game enginen for å hoppe ut av verden og fly",
        "Vi lagde all logikken selv, inkludert nevrale nettverk!",
        "Offline Learning",
      ],
      links: ["https://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf"],
      technologies: ["Python", "Pygame", "PyMunk", "Pytest"],
    },
    teamPage: {
      team: [
        {
          name: "Tobias Fremming",
          role: "Leder",
          github: "https://github.com/tobiasfremming",
          linkedIn: "https://www.linkedin.com/in/tobias-fremming-a16850307/",
        },
        {
          name: "Jonas Korkosh",
          role: "Medlem",
          github: "https://github.com/jonkor29",
          linkedIn: "https://www.linkedin.com/in/jonas-korkosh-6aab6b198/",
        },
        {
          name: "Mina Al-Dolaimi",
          role: "Medlem",
          github: "https://github.com/AlMinaDO",
          linkedIn: "https://www.linkedin.com/in/mina-al-dolaimi-521078287/",
        },
        {
          name: "Nathania Muliawan",
          role: "Medlem",
          github: "https://github.com/Nathaniavm",
          linkedIn: "https://www.linkedin.com/in/nathaniamuliawan036/",
        },
        {
          name: "Nils Henrik Hoelfeldt Lund",
          role: "Medlem",
          github: "https://github.com/Nilsthehacker",
          linkedIn: "https://www.linkedin.com/in/",
        },
        {
          name: "Parleen Brar",
          role: "Medlem",
          github: "https://github.com/Parleenb",
          linkedIn: "https://www.linkedin.com/in/parleen-brar-2a5057233/",
        },
        {
          name: "Sindre Fossdal",
          role: "Medlem",
          github: "https://github.com/SindreFossdal",
          linkedIn: "https://www.linkedin.com/in/sfossdal/",
        },
        {
          name: "Skage Reistad",
          role: "Medlem",
          github: "https://github.com/LockedInTheSkage",
          linkedIn: "https://www.linkedin.com/in/skage-reistad-10b968263/",
        },
      ],
    },
    semester: "Høst",
    year: 2024,
    github: "https://github.com/CogitoNTNU/crawlai",
  },
  {
    articleId: "tetrisai",
    landingPage: {
      title: "TETRIS AI",
      description:
        "Hvordan spille Tetris på overmenneskelig nivå med Good Old-fashioned AI?",
      isVideo: false,
    },
    descriptionPage: {
      description:
        "TetrisAI er et prosjekt som bruker Good Old-fashioned AI (GOFAI) for å spille Tetris på overmenneskelig nivå. Som hovedmetode benyttes heuristisk søk, der algoritmen evaluerer alle mulige trekk og velger det beste basert på en heuristisk funksjon. Heurisikker som er brukt er, max-høyde, total høyde, antall hull, antall linjer fjernet og ugjenvhet. Ved å justere vektene til disse heurisikkene kan man oppnå svært gode resultater. Dette gjorde vi ved å bruke en genetisk algoritme som optimaliserer vektene for å maksimere overlevelsestid.",
      funFacts: [
        "Originale Tetris ble laget i 1984 av den russiske programmereren Aleksej Pazjitnov",
        "TetrisAI spilte i akselerert spillmodus uten å tape for varigheten av presentasjonen av prosjektet!",
      ],
      links: [],
      technologies: [
        "Python 3",
        "Pygame",
        "Evolutionary Algorithms",
        "Heuristic Search",
      ],
    },
    teamPage: {
      team: [
        {
          name: "Eduard Prokhorikhin",
          role: "Leder",
          github: "https://github.com/Eduard-Prokhorikhin",
          linkedIn: "https://www.linkedin.com/in/eduard-prokhorikhin/",
        },
        {
          name: "Øystein Kvandal",
          role: "Leder",
          github: "https://github.com/oystkva",
          linkedIn:
            "https://www.linkedin.com/in/%C3%B8ystein-kvandal-a96ab5293/",
        },
        {
          name: "Håvard Fossdal",
          role: "Medlem",
          github: "https://github.com/HFossdal",
          linkedIn: "https://www.linkedin.com/in/hfossdal/",
        },
        {
          name: "Henrik Haaland",
          role: "Medlem",
          github: "https://github.com/henrinha",
          linkedIn: "https://www.linkedin.com/in/henrik-haaland/",
        },
        {
          name: "Jon Bergland",
          role: "Medlem",
          github: "https://github.com/JonBergland",
          linkedIn: "https://www.linkedin.com/in/jon-bergland-97b56b29b/",
        },
        {
          name: "Maia Austigard",
          role: "Medlem",
          github: "https://github.com/maiahi",
          linkedIn: "https://www.linkedin.com/in/maia-austigard-80054132a/",
        },
        {
          name: "Sindre Fossdal",
          role: "Medlem",
          github: "https://github.com/SindreFossdal",
          linkedIn: "https://www.linkedin.com/in/sfossdal/",
        },
      ],
    },
    semester: "Høst",
    year: 2024,
    github: "https://github.com/CogitoNTNU/Rubiks",
  },
  {
    articleId: "rubiks",
    landingPage: {
      title: "RUBIKS CUBE SOLVER",
      description: "Hvordan løse Rubiks kube med AI?",
      isVideo: false,
    },
    descriptionPage: {
      description:
        "Rubiks kube er et klassisk puslespill som har fascinert mennesker i generasjoner. I dette prosjektet har vi utviklet en AI-løsning som kan løse Rubiks kube ved hjelp av A* søk og heuristisk i flere trinn. Søkerommet er på mer enn 4.3 *10^19 forskjellige tilstander. Vi delte opp søket i følgende trinn: Scrambled til Edge Orientation, Edge Orientation til Domino Reduction, Domino Reduction til løsning. Hvert trinn hadde hver sin heuristikk som ble brukt til å ta kuben til neste tilstand.",
      funFacts: [
        "Det finnes flere mulige rubiks kube tilstander enn sandkorn på jorden!",
      ],
      links: [
        "https://jperm.net/bld",
        "https://threejs.org",
        "https://github.com/taylorjg/rubiks-cube",
      ],
      technologies: [
        "Python 3",
        "three.js",
        "A* Search",
        "Heuristic Search",
        "FastAPI",
      ],
    },
    teamPage: {
      team: [
        {
          name: "Eduard Prokhorikhin",
          role: "Leder",
          github: "https://github.com/Eduard-Prokhorikhin",
          linkedIn: "https://www.linkedin.com/in/eduard-prokhorikhin/",
        },
        {
          name: "Einride Osland",
          role: "Leder",
          github: "https://github.com/1rideee",
          linkedIn: "https://www.linkedin.com/in/einrideosland/",
        },
        {
          name: "Even Ytterli Tokle",
          role: "Medlem",
          github: "https://github.com/Baykugan",
          linkedIn: "",
        },
        {
          name: "Gustav Natvig",
          role: "Medlem",
          github: "https://github.com/GustavNat",
          linkedIn: "https://www.linkedin.com/in/gustav-natvig/",
        },
        {
          name: "Kien Le",
          role: "Medlem",
          github: "https://github.com/kienple",
          linkedIn: "https://www.linkedin.com/in/kienple/",
        },
        {
          name: "Vetle Rød Dahl",
          role: "Medlem",
          github: "https://github.com/Vetlebrur",
          linkedIn:
            "https://www.linkedin.com/in/vetle-r%C3%B8d-dahl-679414226/",
        },
        {
          name: "Viljen Apalset Vassbø",
          role: "Medlem",
          github: "https://github.com/Viljen789",
          linkedIn: "https://www.linkedin.com/in/viljen-apalset-vassbo/",
        },
      ],
    },
    semester: "Vår",
    year: 2024,
    github: "https://github.com/CogitoNTNU/TetrisAI",
  },
  {
    articleId: "sudokusolver",
    landingPage: {
      title: "SUDOKU SOLVER",
      description:
        "Hvordan kan vi bruke datasyn og AR for å løse sudoku i sanntid?",
      isVideo: true,
    },
    descriptionPage: {
      description:
        "SudokuSolver er en Augmented Reality (AR) applikasjon som løser sudoku-oppgaver i sanntid ved hjelp av datasyn og maskinlæring. Systemet bruker OpenCV.js for å detektere sudoku-rutenett i bilder gjennom avansert bildebehandling med gaussian blur og adaptive threshold-filtre. Når rutenettet er identifisert, deles det opp i 81 individuelle celler hvor bakgrunn og cellelinjer fjernes. For å gjenkjenne sifrene brukes en custom-trent CNN (Convolutional Neural Network) modell trent på et datasett som kombinerer 4500 egenproduserte digitale sifre med det kjente MNIST-datasettet. Ved å mikse vårt eget datasett med MNIST oppnådde vi bedre generalisering og nøyaktighet for gjenkjennelse av håndskrevne sifre i sudoku-ruter. Sifrene forbehandles med dilasjon for optimal gjenkjennelse. Selve sudoku-løsningen beregnes ved hjelp av en rekursiv backtracking-algoritme som systematisk prøver ulike kombinasjoner til den finner riktig løsning. Det mest imponerende er hvordan løsningen projiseres tilbake i live kamerafeed ved hjelp av en beregnet projeksjonsmatrise, slik at brukeren kan se løsningen direkte på det fysiske sudoku-brettet gjennom kameraet.",
      funFacts: [
        "CNN-modellen ble trent på et kombinert datasett med 4500 egenproduserte sifre og MNIST-datasettet for optimal gjenkjennelse!",
        "Systemet kan løse selv de vanskeligste sudoku-oppgavene på under ett sekund.",
        "AR-visualiseringen bruker avansert projeksjonsmatematikk for å plassere løsningen perfekt over det fysiske brettet.",
      ],
      links: [
        "https://sudoku-solver-theta-wine.vercel.app",
        "https://opencv.org/",
      ],
      technologies: [
        "TypeScript",
        "OpenCV.js",
        "Python",
        "TensorFlow/Keras",
        "Computer Vision",
        "Convolutional Neural Networks",
        "Augmented Reality",
        "Vercel",
      ],
    },
    teamPage: {
      team: [
        {
          name: "Afras Mansoor",
          role: "Leder",
          github: "https://github.com/Afrasum",
          linkedIn: "https://www.linkedin.com/in/afrasmansoor",
        },
        {
          name: "Andreas V. Jonsterhaug",
          role: "Medleder",
          github: "https://github.com/AndreasVJ",
          linkedIn:
            "https://www.linkedin.com/in/andreas-v-jonsterhaug-982232277/",
        },
        {
          name: "Igor Iwanicki",
          role: "Medlem",
          github: "https://github.com/igiwa001",
          linkedIn: "",
        },
        {
          name: "Ulrikke Kvaal",
          role: "Medlem",
          github: "https://github.com/ulrikketk",
          linkedIn: "",
        },
        {
          name: "Lotta Sandström",
          role: "Medlem",
          github: "https://github.com/lottahelen",
          linkedIn: "",
        },
        {
          name: "Ella Octava Steinum Aakre",
          role: "Medlem",
          github: "https://github.com/EllaOctava",
          linkedIn: "",
        },
      ],
    },
    semester: "Vår",
    year: 2024,
    github: "https://github.com/CogitoNTNU/SudokuSolver",
  },
  {
    articleId: "diffusion-model",
    landingPage: {
      title: "Diffusion Model",
      description: "Fra støy til kunst: Hvordan lage bilder med AI?",
      isVideo: false,
    },
    descriptionPage: {
      description:
        "Diffusion Model-prosjektet utforsker hvordan AI kan skape realistiske bilder fra ren støy. Målet var å generere 32×32 piksels bilbilder ved hjelp av Denoising Diffusion Probabilistic Models (DDPM), som gradvis “renser” støy til et ferdig bilde. Modellen ble trent på CIFAR-10-datasettet, som inneholder 5 000 bilbilder, og kan nå lage nye, unike bilbilder som ligner på, men ikke er identiske med, treningsdataene.",
      funFacts: [
        "Diffusjonsmodeller kan i teorien generere uendelig mange unike bilder, fordi startstøyen alltid er tilfeldig.",
        "Selv om prosessen virker treg sammenlignet med GANs, produserer diffusjonsmodeller ofte skarpere og mer detaljerte bilder og er brukt i metoder som Stable Diffusion.",
      ],
      links: [
        "https://arxiv.org/pdf/2006.11239",
        "https://www.cs.toronto.edu/~kriz/cifar.html",
      ],
      technologies: ["Python", "PyTorch", "Diffusion Models", "Generative AI"],
    },
    teamPage: {
      team: [
        {
          name: "Marijan Soric",
          role: "Leder",
          github: "https://github.com/soricm",
          linkedIn: "https://www.linkedin.com/in/marijan-soric/",
        },
        {
          name: "Amanda Truyen",
          role: "Medlem",
          github: "https://github.com/amandathunes",
          linkedIn: "https://www.linkedin.com/in/amanda-johanne-thunes-truyen/",
        },
        {
          name: "Baris Batur",
          role: "Medlem",
          github: "https://github.com/BarisBatur",
          linkedIn: "https://www.linkedin.com/in/baris-batur-6b155b289/",
        },
        {
          name: "Thomas Haslund Wik",
          role: "Medlem",
          github: "https://github.com/ThomasHWik",
          linkedIn: "https://www.linkedin.com/in/thomas-haslund-wik-365b2024b/",
        },
        {
          name: "Mauritz Skogøy",
          role: "Medlem",
          github: "https://github.com/Mauritzskog",
          linkedIn:
            "https://www.linkedin.com/in/mauritz-hardersen-skog%C3%B8y/",
        },
      ],
    },
    semester: "Vår",
    year: 2024,
    github: "https://github.com/CogitoNTNU/DiffusionModel",
  },
];
