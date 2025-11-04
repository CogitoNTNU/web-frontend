import { ProjectApply, ProjectType } from "../lib/types";

export const CogitoProjects: ProjectType[] = [
  {
    name: "Marketing AI",
    github: "https://github.com/CogitoNTNU/MarketingAI",
    img: "/Projects/Cards/MarketingAI.png",
    playable: true,
    released: true,
    url: "/projects/marketingai",
  },
  {
    name: "Tutor AI",
    github: "https://github.com/CogitoNTNU/TutorAI",
    img: "/Projects/Cards/TutorAI.png",
    playable: true,
    released: true,
    url: "https://tutorai.no/",
  },
  {
    name: "NEATactics",
    github: "https://github.com/CogitoNTNU/NEATactics",
    img: "/Projects/Cards/NEATactics.png",
    playable: false,
    released: true,
    url: "/projects/articles/neatactics",
  },
  {
    name: "Cogito x Infor",
    github: "https://github.com/CogitoNTNU/",
    img: "/Projects/ProjectLogos/infor.png",
    playable: false,
    released: true,
    url: "/projects/articles/cogito-infor-agents",
  },
  {
    name: "DeepTactics - MuZero",
    github: "https://github.com/CogitoNTNU/MuZero",
    img: "/Projects/ProjectLogos/deeptactics.webp",
    playable: false,
    released: true,
    url: "/projects/articles/muzero",
  },

  {
    name: "A* x Cogitron",
    github: "https://github.com/CogitoNTNU/cogitron",
    img: "/Projects/ProjectLogos/astar.png",
    playable: false,
    released: false,
    url: "/projects/articles/astar",
  },
  {
    name: "ChessAR",
    github: "https://github.com/CogitoNTNU/chessar",
    img: "/Projects/ProjectLogos/chessar.webp",
    playable: false,
    released: true,
    url: "/projects/articles/chessar",
  },
  {
    name: "J.A.R.V.I.S",
    github: "https://github.com/CogitoNTNU/jarvis",
    img: "/Projects/ProjectLogos/jarvis.webp",
    playable: false,
    released: false,
    url: "/projects/articles/jarvis",
  },
  {
    name: "Motion",
    github: "https://github.com/CogitoNTNU/Motion",
    img: "/Projects/ProjectLogos/motion.webp",
    playable: false,
    released: false,
    url: "/projects/articles/motion",
  },
  {
    name: "Crawl AI",
    github: "https://github.com/CogitoNTNU/CrawlAI",
    img: "/Projects/Cards/CrawlAI.png",
    playable: false,
    released: true,
    url: "/projects/articles/crawlai",
  },
  {
    name: "TetrisAI",
    github: "https://github.com/CogitoNTNU/TetrisAI",
    img: "/Projects/ProjectLogos/tetrisai.webp",
    playable: false,
    released: true,
    url: "/projects/articles/tetrisai",
  },
  {
    name: "SudokuSolver",
    github: "https://github.com/CogitoNTNU/SudokuSolver",
    img: "/Projects/Articles/sudokusolver/sudoku_logo.png",
    playable: false,
    hybrid: true,
    playableUrl: "https://sudoku-solver-theta-wine.vercel.app",
    released: true,
    url: "/projects/sudokusolver",
  },
  {
    name: "RubiksCubeSolver",
    github: "https://github.com/CogitoNTNU/Rubiks",
    img: "/Projects/ProjectLogos/rubikscube.webp",
    playable: false,
    released: true,
    url: "/projects/articles/rubiks",
  },
  {
    name: "HypeAI",
    github: "https://github.com/CogitoNTNU/hypeai",
    img: "/Projects/ProjectLogos/hypeai.webp",
    playable: false,
    released: false,
    url: "/projects/articles/hypeai",
  },
  {
    name: "Doctor AI",
    github: "https://github.com/CogitoNTNU/Doctor-AI",
    img: "/Projects/Articles/doctor-ai/doctor-ai.png",
    playable: false,
    released: true,
    url: "/projects/articles/doctor-ai",
  },
  {
    name: "Diffusion Model",
    github: "https://github.com/CogitoNTNU/DiffusionModel",
    img: "/Projects/Articles/diffusion-model/diffusion-model.png",
    playable: false,
    released: true,
    url: "/projects/articles/diffusion-model",
  },
];

export const projectsApply: ProjectApply[] = [
  {
    name: "Deeptactics - Trackmania",
    description:
      "Er du dårlig i Trackmania? Det er vi også. Derfor skal vi bruke reinforcement learning (RL) til å oppnå overmenneskelig nivå i spillet! Målet med prosjektet er å utvikle en KI som lærer å mestre Trackmania ved å utforske og tilpasse seg miljøet. I løpet av prosjektet skal vi teste flere forskjellige metoder innen RL for å finne ut hva som fungerer best, blant annet PPO og varianter av DQN.",
    image: "trackmania.png",
    leaders: ["Brage Kvamme", "Ludvig Øvrevik"],
  },
  {
    name: "Geoguessr-AI",
    description:
      "Vi skal bygge en AI-modell som kan spille Geoguessr bedre enn Rainbolt (en av verdens beste spillere)! Bli med om du ønsker å lære mer om klassiske teknikker og dyp læring innen Computer Vision, vi eksperimenterer oss sammen frem til den beste løsningsmetoden! Prosjektet har tre ledere: Jens og Daniel som går 5. klasse Datateknologi og Magnus som går 5. klasse Indøk Data. Vel møtt!",
    image: "geoguessrai.png",
    leaders: ["Daniel N Hansen", "Jens Martin Norheim Berget", "Magnus Bryne"],
  },
  {
    name: "MatchNet",
    description:
      "Bygge en nevralnett struktur som tar en dating profil (bilder og tekst) og gjennom supervised trening, generere text output i form av 'opening lines'. Målet er å klare å konstruere ett sammenhengende nettverk med egenskapen til å evaluere over flere modaliteter, i dette prosjektet to, tekst og bilder.  Hoved fokuset vil ikke være på datahenting eller resultater, men for medlemmene til å skaffe en større forståelse av nettverksarkitekturer. Dette vil være et krevende prosjekt som sikter på oppmøte tirsdager og torsdager. Anbefaler å ha noe erfaring med AI",
    image: "matchnet.jpg",
    leaders: ["Kristian Carlenius"],
  },
  {
    name: "Levende Maleri",
    description:
      "Husker du de magiske maleriene i Harry Potter som beveger seg og snakker til forbipasserende? Vi gjør det til virkelighet, rett i en ramme på veggen. Pust liv i Mona Lisa eller et hvilket som helst portrett. Hun kan se deg i øynene, lytte, og svare med en naturlig stemme og livaktige uttrykk. For tre år siden laget Cogito et lignende prosjekt som ble en stor suksess, og til og med vist til statsministeren. Nå, med den nyeste teknologien innen lav-latens stemmegjenkjenning, store språkmodeller og videogenerering, kan du bli med og gjøre malerier levende.",
    image: "living-painting.png",
    leaders: ["Sveinung Myhre"],
  },
  {
    name: "Grip",
    description:
      "The Cogito Bionic Hand Project aims to design, prototype, and test a functional robotic hand controlled by a user’s muscle activity and/or neural signals. Using non-invasive sensors (such as surface EMG), the system will interpret the user’s intent and translate it into precise hand movements.",
    image: "grip.png",
    leaders: ["Tobias Fremming"],
  },
  {
    name: "RegulAId",
    description:
      "Regler og lover er lange, kjedelige og vanskelige å forstå, men konsekvensene av å feile er enorme. I RegulAId bygger vi AI-agenter som gjør dette arbeidet enklere, raskere og mye morsommere. Vi kommer til å eksperimentere med moderne AI-teknologier som kan gi agenter bedre hukommelse, resonnement, bruk av verktøy og fleksibilitet. Det kan for eksempel være: MCP, ACP, RAG, LangChain, LangGrap og PocketFlow. Bli med!!",
    image: "regulaid.png",
    leaders: ["Serina Erzengin"],
  },
  {
    name: "A* x Cogitron",
    description:
      "Cogitron er et ambisiøst langtidsprosjekt som har som mål å utvikle en robot i stand til å navigere og forstå omgivelsene sine helt på egenhånd. Prosjektet kombinerer et bredt spekter av AI-teknologier som Datasyn, Sensor Fusion, beslutningstaking og læring i sanntid. Dette er en fantastisk mulighet til å bruke all teorien man har lært på studiet til å gi et AI-system en fysisk kropp, slik at det kan operere autonomt i den virkelige verden. Cogitron skal kunne tilpasse seg ukjente miljøer og utføre komplekse oppgaver med høy grad av presisjon og effektivitet.",
    image: "astar.png",
    leaders: ["Vetle R. D", "Christian Gynnild"],
  },
  {
    name: "First Steps",
    description:
      "Har du lyst til å lære en humanoid robot å gå? I dette prosjektet skal vi bruke NVIDIA Isaac Sim og reinforcement learning (RL) for å trene Zeroth-01 fra K-Scale Labs til å ta sine første steg og oppnå grunnleggende balanse. I tillegg åpner prosjektet for å utforske Natural Language Processing (NLP) og Computer Vision (CV) slik at roboten kan tolke omgivelsene sine og kommunisere med mennesker gjennom tale og syn. Målet er å kombinere bevegelse, språk og persepsjon med denne open-sourced roboten!",
    image: "first-steps.png",
    leaders: ["Sebastian Riibe Berthelsen"],
  },
  {
    name: "Audify",
    description:
      "Har du noen gang ønsket å høre på pensumet ditt i stedet for å lese det? Kanskje du vil multitaske på treningen og samtidig få gjennomgått dagens fagstoff, eller du leter etter favorittboken din som lydbok uten å finne den? Dette prosjektet skal gjøre det mulig! Vi skal utvikle en løsning som automatisk konverterer tekst til lyd, ved å trene en AudioTransformer til å utføre Text-to-Speech (TTS). Brukeren kan hente tekst fra ulike formater, som PDF, Word, Markdown, nettsider eller YouTube-videoer, og systemet vil generere lydboken. Vi har mange kule muligheter med voice cloning, ulike stemmer og lydeffekter som vi kan lage. Bli med!",
    image: "AudifyLogo.png",
    leaders: ["Nathania Vijayanti Muliawan"],
  },
  {
    name: "CogIntro",
    description:
      "AI er større enn noen gang, og dette kurset gir deg en spennende introduksjon til hva kunstig intelligens egentlig er. Gjennom semesteret skal vi utforske hvordan AI fungerer, og hvordan det kan brukes til alt fra å oppdage kreft til å oppnå toppscore i Flappy Bird. Kurset består av mindre kursøkter/prosjekter som gir deg både praktisk erfaring og et dypere innblikk i hvordan AI er bygd opp. På denne måten får du ikke bare en grunnleggende forståelse av teknologien, men også nyttig kunnskap du kan ta med deg videre , enten du er nysgjerrig på AI i forskning, spill eller hverdagsbruk.",
    image: "aicrash.png",
    leaders: ["Maia Austigard", "Mina Aldolaimi"],
  },
  {
    name: "Cogito Web",
    description:
      "Har du lyst til å lære deg moderne webutvikling og hvordan man deployer AI-prosjekter til produksjon? Da er dette prosjektet for deg. Vi skal bygge ut Cogito-nettsiden i en voldsom skala. Dette prosjektet har tre underprosjekter: Cogito Login, Cogito Community og Cogito Prosjekter",
    image: "web.png",
    leaders: ["Simon Sandvik Lee"],
  },
];
