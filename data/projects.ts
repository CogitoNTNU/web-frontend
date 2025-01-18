import { ProjectApply, ProjectType } from "../lib/types";
import SudokuLogo from "../public/Projects/SudokuSolver/SudokoSolverLogo.png";
import MarketingAILogo from "../public/Projects/MarketingAILogo.png";
import CatMatch from "../public/Projects/CatMatch/CatMatch.png";

export const CogitoProjects: Array<ProjectType> = [
  {
    image: SudokuLogo,
    laptopDesc:
      "SudokuSolver, the perfect program to effortlessly solve sudokus!",
    phoneDesc: "Sudoku made easy",
    link: "https://sudoku-solver-sudokusolver.vercel.app",
    github: "https://github.com/CogitoNTNU/SudokuSolver",
    leaders: Array<string>("Andreas Jonsterhaug", "Afras Mansoor"),
    new: true,
  },
  {
    image: MarketingAILogo,
    laptopDesc:
      "Marketing AI is a powerful marketing tool made to conquer all social platforms!",
    phoneDesc: "Marketing done right!",
    link: "/projects/marketingai",
    github: "https://github.com/CogitoNTNU/MarketingAI",
    leaders: Array<string>("Kristoffer Olaisen", "Sverre Nystad"),
    new: false,
  },
  {
    image: CatMatch,
    laptopDesc:
      "CatMatch, the purrfect website for finding the right cats for you!",
    phoneDesc: "The purrfect cats!",
    link: "https://catmatch.rosby.no",
    github: "https://github.com/CogitoNTNU/CatMatch",
    leaders: Array<string>("Ulrik Røsby"),
    new: false,
  },
];

export const projectsApply: ProjectApply[] = [
  {
    name: "Infor x Cogito",
    description:
      "Infor er en stor internasjonal bedrift som tilbyr tjesester og produkter til bedrifter innenfor enterprise resource planning, de er også store på bruk av cloud (AWS sin nest største forbruker). Med rådgivning og resurser fra Infor skall vi lage en AI modell som prøver å predikere hva prisene på treverk hos Byggern bør være ettersom de varierer med sesong. ",
    image: "infor.png",
    leaders: ["Thomas Sørensen"],
  },
  {
    name: "TV2 x Cogito",
    description:
      "Prosjektet utforsker hvordan kunstig intelligens kan hjelpe TV2.no med å ta bedre redaksjonelle valg ved å utnytte store mengder data om leseratferd og artikkelprestasjon. Målet er å bruke maskinlæring for å hjelpe TV2 med å analysere artikkel data for å gi nyttig insikter. Dette prosjektet gir deg muligheten til å være med på å forme fremtidens journalistikk og få industrirelevant erfaring med KI.",
    image: "cogitoxtv2.png",
    leaders: ["Mina Al-Dolaimi"],
  },
  {
    name: "A* x Cogitron",
    description:
      "Cogitron er et langtidsprosjekt som omhandler å lage en robot som kan navigere og sanse omgivelsene sine. Prosjektet er delt inn i Hardware og Software.",
    image: "astar.png",
    leaders: ["Vetle Dahl"],
  },
  {
    name: "MuZero",
    description:
      "Vi skal utvikle et system inspirert av MuZero, utviklet av Google DeepMind. MuZero kombinerer avanserte teknikker innenfor dype reinforcement learning og planlegging, noe som gjør det i stand til å lære komplekse oppgaver fra grunnen av. Ved kun å bruke bilder av spillet miljøet, lærer systemet seg selv å mestre spillet gjennom å spille mot seg selv. Prosjektet vårt vil undersøke hvordan denne teknologien kan anvendes på ulike problemområder og utvide forståelsen av autonom læring.",
    image: "deeptactics.webp",
    leaders: ["Brage Kvamme"],
  },
  {
    name: "J.A.R.V.I.S",
    description:
      "Just A Rather Very Intelligent System.\nWe’re building an AI assistant inspired by Iron Man's Jarvis, capable of managing and solving complex tasks autonomously. Users should be able to converse with Jarvis naturally. Similar to Jarvis in the movies, or the ChatGPT4o demo. \n\n Technologies and Tools - Programming Languages & Tools: Python, Docker, Puppeteer, REST APIs. - Speech Processing: Elevenlabs, Whisper, Mycroft 3. - LLMs: ChatGPT, Groq, Llama-3.1. - Data Retrieval: RAG and vector databases. - UI/UX Design - Software systems architecture.",
    image: "jarvis.webp",
    leaders: ["William Schmidt"],
  },
  {
    name: "Teknologiporten x Cogito",
    description:
      "Ved hjelp av maskinlæring skal Cogito i samarbeid med Teknologiporten predikere hva er det som fører til de beste Bedriftspresentasjoner. Dette skal gjøres ved å analysere data fra tidligere presentasjoner og finne ut hva som er det som gjør at en presentasjon er god. Dette prosjektet i grensesnittet mellom industri og studentliv, og gir deg muligheten til å jobbe med reelle data",
    image: "teknologiporten.png",
    leaders: [" "],
  },
  {
    name: "Motion",
    description:
      "Motion er et prosjekt som bruker evolusjonære algoritmer for å lære virtuelle skapninger å bevege seg i et 3D verdener. Gjennom kontinuerlig tilpasning lærer algoritmene å navigere ulike kroppskonfigurasjoner og optimalisere bevegelsesmønstre. Prosjektet kombinerer maskinlæring og kunstig intelligens for å simulere hvordan maskiner kan utvikle seg og mestre komplekse bevegelser over tid. Agentene får da kropper og må lære å bruke dem",
    image: "crawlai.webp",
    leaders: ["Tobias Fremming"],
  },
  {
    name: "ChessAR",
    description:
      "ChessAR er et prosjekt som bruker augmented reality (AR) for å spille sjakk enklere. Ved å bruke AR briller skal man kunne se de beste trekkene på sjakkbrettet. Prosjektet kombinerer maskinlæring, embedded, datasyn og ulike sjakk AI'er.",
    image: "chessar.png",
    leaders: ["Simon Sandvik Lee"],
  },
  {
    name: "Cogito Web",
    description:
      "Har du lyst til å lære deg moderne webutvikling og hvordan man deployer AI prosjekter til produksjon? Da er dette prosjektet for deg. Vi skal bygge ut Cogito nettsiden enormt. Dette prosjektet har tre underprosjekter: Cogito Login, Cogito Community, Cogito Prosjekter",
    image: "cogito.png",
    leaders: ["Simon Sandvik Lee"],
  },
];
