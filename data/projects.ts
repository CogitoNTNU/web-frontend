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
    name: "CancerVision",
    description:
      "CancerVision er et KI-prosjekt som bruker datasyn og dyp læring til å segmentere hjernesvulster fra MR-bilder. Det identifiserer svulstområder som kjernen, ødem og forsterkende områder for å støtte medisinsk analyse og behandlingsplanlegging. Målet er å bygge nøyaktige modeller som reduserer manuelt arbeid og forbedrer konsistens i diagnostisering. Det er ingen krav for å bli med. Alt som betyr noe er nysgjerrighet, motivasjon og vilje til å hjelpe. Erfaringsnivå spiller ingen rolle. Bli med og hjelp oss å bygge verktøy som kan redde liv.",
    image: "cancervision.png",
    leaders: ["Muhammad Muwaffaq"],
  },
  {
    name: "DeepTactics",
    description:
      "Vi bygger sterke, generelle spillagenter som lærer utelukkende gjennom selvspill. Vi setter to tilnærminger opp mot hverandre: post-trente LLM-policyer for multi-agent resonnering (LoRA, GRPO) og motstandermodellering mot søkedrevet dyp RL (policy/verdi-nettverk + MCTS/simulering, med tro-bevisst planlegging for ufullstendig informasjon), på tvers av spill som sjakk, fire på rad og Liar's Dice. Deretter kjører vi en progressiv policy-turnering for å se hva som vinner: resonnering, planlegging, eller en hybrid.",
    image: "deeptactics-prompt-vs-planning.png",
    leaders: [
      "Sverre Nystad",
      "Kristoffer Nohr Olaisen",
      "Ludvig Øvrevik",
      "Thomas Sørensen",
    ],
  },
  {
    name: "Geoguessr-AI",
    description:
      "Vi skal bygge en AI-modell som kan spille Geoguessr bedre enn Rainbolt (en av verdens beste spillere)! Bli med om du ønsker å lære mer om klassiske teknikker og dyp læring innen Computer Vision, vi eksperimenterer oss sammen frem til den beste løsningsmetoden!",
    image: "geoguessrai.png",
    leaders: ["Daniel N Hansen", "Jens Martin Norheim Berget", "Magnus Bryne"],
  },
  {
    name: "Grip",
    description:
      "Cogito Bionic Hand-prosjektet har som mål å designe, prototype og teste en funksjonell robothånd kontrollert av brukerens muskelaktivitet og/eller nevrale signaler. Ved hjelp av ikke-invasive sensorer (som overflate-EMG) vil systemet tolke brukerens intensjon og oversette den til presise håndbevegelser.",
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
    leaders: ["Aleksandar Mirkovic", "Vegard Aa Albretsen"],
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
  {
    name: "Web Teamet",
    description:
      "Web teamet har ansvar for Cogito NTNUs digitale tilstedeværelse utenom sosiale medier. Hovedprosjektet vårt er Cogito Community, en plattform som samler KI-interesserte på Gløshaugen. Her jobber vi med å videreutvikle plattformen og introdusere nye funksjoner som clickops-deploying av prosjekter og en egen prosjekteditor. Automatisering står sentralt i alt vi gjør. Hos oss går du dypere enn bare web rammeverk. Du får forståelse for fundamentale web devops teknologier og lærer å velge riktig verktøy for riktig oppgave.",
    image: "web.png",
    leaders: ["Simon Sandvik Lee"],
  },
];
