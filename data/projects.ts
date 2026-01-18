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
    name: "TV2 x Cogito",
    github: "https://github.com/CogitoNTNU/TV2xCogito",
    img: "/Projects/ProjectLogos/cogitoxtv2.png",
    playable: false,
    released: true,
    url: "/projects/tv2xcogito",
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
    name: "Geoguessr-AI",
    description:
      "Vi skal bygge en AI-modell som kan spille Geoguessr bedre enn Rainbolt (en av verdens beste spillere)! Bli med om du ønsker å lære mer om klassiske teknikker og dyp læring innen Computer Vision, vi eksperimenterer oss sammen frem til den beste løsningsmetoden! Prosjektet har tre ledere: Jens og Daniel som går 5. klasse Datateknologi og Magnus som går 5. klasse Indøk Data. Vel møtt!",
    image: "geoguessrai.png",
    leaders: ["Daniel N Hansen", "Jens Martin Norheim Berget", "Magnus Bryne"],
  },
  {
    name: "Grip",
    description:
      "The Cogito Bionic Hand Project aims to design, prototype, and test a functional robotic hand controlled by a user’s muscle activity and/or neural signals. Using non-invasive sensors (such as surface EMG), the system will interpret the user’s intent and translate it into precise hand movements.",
    image: "grip.png",
    leaders: ["Tobias Fremming"],
  },
  {
    name: "AIs of Spades",
    description:
      "Poker er et utfordrende spill, og vi skal bruke reinforcement learning for å mestre det! Målet er å nå minimum medium spillernivå, der AI-en lærer strategier som bluffing naturlig gjennom RL i stedet for hardkodede trekk. Vi kobler dette med MQTT for LAN-spill mot skaperne av prosjektet. Fokuset er på Texas Hold'em poker!",
    image: "poker.png",
    leaders: ["Simone Elia", "Federico Hrvatin"],
  },
  {
    name: "AI-Driven Stock Movement Predictor",
    description:
      "Et nybegynervennlig prosjekt som fokuserer på kortsiktig aksjeprediktjon ved bruk av historiske data, feature engineering og gradient boosting-modeller. Vi starter med grunnleggende mål før vi eventuelt utvider til eksterne indikatorer som nyheter.",
    image: "stocks.png",
    leaders: ["Vegard", "Aleksandar Mirkovic"],
  },
  {
    name: "GymBro AI",
    description:
      "Bruk Garmin-sensorer og AI for å gjenkjenne treningsøvelser og telle repetisjoner automatisk! Vi skal utforske AI pose estimation for å vurdere treningsform og utvikle et system som kan hjelpe folk med å forbedre treningsrutinene sine. Prosjektet kombinerer maskinvare (Arduino) med AI for en praktisk anvendelse.",
    image: "gymbro.png",
    leaders: ["Dennis Jevne"],
  },
  {
    name: "Make Sverre a Rock Star",
    description:
      "Et ambisiøst prosjekt som kombinerer AI-musikk generering med voice cloning-teknologi! Vi skal bruke de nyeste SOTA-verktøyene for musikkskaping og trene på ekte stemmesampler. Målet er å utforske grensene for AI-kreativitet og lage noe virkelig unikt med moderne AI-teknologi.",
    image: "rockstar.png",
    leaders: ["Øystein Kvandal"],
  },
];
