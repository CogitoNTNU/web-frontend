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
    description: "Prosjektet utforsker hvordan kunstig intelligens kan hjelpe TV2.no med å ta bedre redaksjonelle valg ved å utnytte store mengder data om leseratferd og artikkelprestasjon. Målet er å bruke maskinlæring for å hjelpe TV2 med å analysere artikkel data for å gi nyttig insikter. Dette prosjektet gir deg muligheten til å være med på å forme fremtidens journalistikk og få industri relevant erfaring med KI.",
    image: "cogitoxtv2.png",
    leaders: ["Afras Mansoor", "Kristoffer Nohr Olaisen"],
  },
  {
    name: "A* x Cogitron",
    description:
      "Cogitron er et langtidsprosjekt som omhandler å lage en robot som kan navigere og sanse omgivelsene sine. Prosjektet er delt inn i Hardware og Software.",
    image: "astar.png",
    leaders: ["Florian Creutzig"],
  },
  {
    name: "DeepTactics",
    description: "NEAT (NeuroEvolution of Augmenting Topologies) er en metode som brukes for å utvikle AI ved å kombinere nevralnettverk og evolusjon. Den starter med et enkelt nevralnettverk og forbedrer det gjennom mange generasjoner. Hver generasjon får små endringer (mutasjoner) som gjør nettverket bedre til å spille et spill. De beste nettverkene overlever og 'avler' nye nettverk, som blir smartere og mer komplekse over tid. Målet er å skape en AI som blir flinkere til å spille forskjellige spill ved å lære og utvikle seg på en evolusjonær måte.",
    image: "deeptactics.webp",
    leaders: ["Brage Kvamme", "Christian Fredrik Johnsen"],
  },
  {
    name: "J.A.R.V.I.S",
    description:
      "Just A Rather Very Intelligent System.\nWe’re building an AI assistant inspired by Iron Man's Jarvis, capable of managing and solving complex tasks autonomously. Users should be able to converse with Jarvis naturally. Similar to Jarvis in the movies, or the ChatGPT4o demo. \n\n Technologies and Tools - Programming Languages & Tools: Python, Docker, Puppeteer, REST APIs. - Speech Processing: Elevenlabs, Whisper, Mycroft 3. - LLMs: ChatGPT, Groq, Llama-3.1. - Data Retrieval: RAG and vector databases. - UI/UX Design - Software systems architecture.",
    image: "jarvis.webp",
    leaders: ["William Schmidt"],
  },
  {
    name: "HypeAI",
    description:
      "Stadig større andel av medier på nettet er generert fullt eller delvis av KI. Mulighetene er mange. Alt fra bilder og videoer generert av KI, til KI-influensere på instagram, til opplesning av reddit poster med bruk av elevenlabs. Hvordan kan vi få flest mulig likes? Kan vi klare å ha en SoMe konto 100% drevet av KI? Dette er spørsmål som vi ønsker å utforske med dette prosjektet.",
    image: "hypeai.webp",
    leaders: ["Henrik Kvamme", "Andreas Jonsterhaug"],
  },
  {
    name: "CrawlAI",
    description:
      "CrawlAI er et prosjekt som bruker evolusjonære algoritmer for å lære virtuelle skapninger å bevege seg i et 2D-plan. Gjennom kontinuerlig tilpasning lærer algoritmene å navigere ulike kroppskonfigurasjoner og optimalisere bevegelsesmønstre. Prosjektet kombinerer maskinlæring og kunstig intelligens for å simulere hvordan maskiner kan utvikle seg og mestre komplekse bevegelser over tid.",
    image: "crawlai.webp",
    leaders: ["Tobias Fremming"],
  },
  {
    name: "Rubiks Cube Solver",
    description:
      "Lær å lage en AI som løser Rubiks kube. Her blir det bruk av GOFAI hvor KI-en løser kuben i en simulator. Senere vil vi prøve å få den ved bruk av datasyn gjenkjenne kubens instillinger for å så løse den.",
    image: "rubikscube.webp",
    leaders: ["Einride Osland"],
  },
];