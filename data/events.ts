import { EventApply, EventType } from "../lib/types";
import CogitoNight from "../public/Calendar/Cogito-night.jpg";
import Bowling from "../public/Calendar/Bowling.jpg";
import PresentationWork from "../public/Calendar/PresentationWork.jpg";
import Presentation from "../public/Calendar/ProjectPresentations.jpg";
import MLWorkshop from "../public/Calendar/MLWorkshop.webp";
import AstarLogo from "../public/Calendar/Astar - Logo.png";
import NNWorkshop from "../public/Calendar/NNWorkshop.jpg";
import GAWorkshop from "../public/Calendar/GAWorkshop.webp";
import RLWorkshop from "../public/Calendar/RLWorkshop.jpg";

export const hardcodedEvents: Array<EventType> = [
  {
    name: "Prosjektplanlegging 📝",
    date: new Date("2024-07-30"),
    timeString: "30.07",
    location: "Digitalt møte",
    description:
      "Planlegging av prosjekter for høstsemesteret 2024. Vi velger hvilke prosjekter som skal gjennomføres, og hvem som blir prosjektledere.",
    link: "",
    image: PresentationWork,
  },
  {
    name: "Cogito-kveld ✨",
    date: new Date("2030-01-01"),
    timeString: "Tirsdager fom. 11.02",
    subTimeString: "kl. 17:15-20",
    location: "Gruva, Oppredning/gruvedrift, Gløshaugen",
    description:
      'Hver tirsdag fra kl. 17:15 til 20:00 møtes alle i Cogito i "Gruva" for å jobbe med prosjektene våre i fellesskap. Det hender også at vi serverer pizza 🍕',
    image: CogitoNight,
    pinned: true,
  },
  {
    name: "Workshop - Maskinlæring 🤖",
    date: new Date("2024-08-29"),
    timeString: "29.08",
    location: "Gruva, Oppredning/gruvedrift, Gløshaugen",
    description:
      "Vi arrangerer en workshop i maskinlæring for alle i Cogito. Vi går gjennom grunnleggende konsepter og tester de ut på Titanic-datasettet.",
    image: MLWorkshop,
  },
  {
    name: "Workshop - LangGraph 📊",
    date: new Date("2024-09-05"),
    timeString: "05.09",
    location: "Gruva, Oppredning/gruvedrift, Gløshaugen",
    description:
      "Astar Consulting holder en workshop om hvordan man kan bygge automatiserte AI-agenter med LangGraph. Workshopen er tilgjengelig for alle medlemmer i Cogito.",
    image: AstarLogo,
  },
  {
    name: "Bowling 🎳",
    date: new Date("2024-09-17"),
    timeString: "17.09",
    location: "Centrum Bowling",
    description:
      "Vi gjentar suksessen fra forrige semester og arrangerer en bowlingkveld for alle i Cogito. Dette er en flott mulighet til å bli kjent på tvers av prosjektene, og for å ha det gøy sammen!",
    image: Bowling,
  },
  {
    name: "Prosjektpresentasjoner 🎙️",
    date: new Date("2024-11-13"),
    timeString: "13.11",
    location: "Lager11",
    description:
      "Presentasjoner av prosjektene Cogito-medlemmer har jobbet på dette semesteret. Dette er en flott mulighet til å se hva Cogito har jobbet med, og for å bli inspirert til å delta i prosjekter selv!",
    link: "",
    image: Presentation,
  },
  {
    name: "Workshop - Nevrale nettverk 🧠",
    date: new Date("2025-01-23"),
    timeString: "23.01",
    subTimeString: "kl. 18-21",
    location: "R2, Realfagsbygget, Gløshaugen",
    description:
      "CTO Sverre Nystad og Kristoffer Olaisen holder et interaktivt kurs om nevrale nettverk.",
    link: "",
    image: NNWorkshop,
    openForAll: true,
  },
  {
    name: "Workshop - Reinforcement learning 🤖",
    date: new Date("2025-01-28"),
    timeString: "28.01",
    subTimeString: "kl. 17-20",
    location: "Gruva, Oppredning/gruvedrift, Gløshaugen",
    description:
      "Even Klemsdal, Ph.D.-kandidat ved IDI og grunnlegger av Cogito, tar deg gjennom grunnleggende konsepter innen Reinforcement Learning!",
    link: "",
    image: RLWorkshop,
    openForAll: true,
  },
  {
    name: "Workshop - Genetiske algoritmer 🧬",
    date: new Date("2025-01-31"),
    timeString: "30.01",
    subTimeString: "kl. 18-21",
    location: "R2, Realfagsbygget, Gløshaugen",
    description: "Tobias Fremming holder et kurs om genetiske algoritmer.",
    link: "",
    image: GAWorkshop,
    openForAll: true,
  },
];

export const applicationEvent2024: EventApply = {
  title: "Opptaksprosess Høst 2024",
  dates: "01.08 - 27.08",
  steps: [
    {
      name: "Søknadsskjema tilgjengeliggjøres",
      dates: "01.08",
    },
    {
      name: "Møt oss på stand!",
      dates: "19.08 - 23.08",
      lenke:
        "https://use.mazemap.com/#v=1&config=ntnu&campusid=1&zlevel=-1&center=10.406636,63.415702&zoom=20.4&sharepoitype=poi&sharepoi=51997",
    },
    {
      name: "Søknadsfrist",
      dates: "23.08",
      important: true,
    },
    {
      name: "Innkalling til intervju sendes ut",
      dates: "24.08",
    },
    {
      name: "Intervjuer gjennomføres",
      dates: "25.08 - 26.08",
    },
    {
      name: "Tilbud om medlemskap sendes ut",
      dates: "26.08",
    },
    {
      name: "Oppstartskveld",
      dates: "27.08",
    },
  ],
};

export const applicationEvent2025: EventApply = {
  title: "Opptaksprosess Vår 2025",
  dates: "20.01 - 11.02",
  steps: [
    {
      name: "Søknadsskjema tilgjengeliggjøres",
      dates: "20.01",
    },
    {
      name: "Møt oss på stand!",
      dates: "20.01 - 31.01",
    },
    {
      name: "Søknadsfrist for prosjektledere",
      dates: "24.01",
      important: true,
    },
    {
      name: "Opptak av prosjektledere gjennomføres",
      dates: "25.01 - 29.01",
    },
    {
      name: "Prosjektledere pitcher prosjektene sine",
      dates: "30.01",
    },
    {
      name: "Søknadsfrist for medlemmer",
      dates: "31.01",
      important: true,
    },
    {
      name: "Intervjuer og tilbud om medlemskap",
      dates: "01.02 - 09.02",
    },
    {
      name: "Oppstartskveld",
      dates: "11.02",
    },
  ],
  pinned: true,
};
