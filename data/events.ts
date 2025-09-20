import { EventApply, EventType } from "../lib/types";
import CogitoNight from "../public/Calendar/Cogito-night.jpg";
import Bowling from "../public/Calendar/Bowling.jpg";
import Presentation from "../public/Calendar/ProjectPresentations.jpg";
import MLWorkshop from "../public/Calendar/MLWorkshop.webp";
import AstarLogo from "../public/Calendar/Astar - Logo.png";
import NNWorkshop from "../public/Calendar/NNWorkshop.jpg";
import GAWorkshop from "../public/Calendar/GAWorkshop.webp";
import RLWorkshop from "../public/Calendar/RLWorkshop.jpg";
import ProjectPitching from "../public/Calendar/ProjectPitching.jpg";
import Hackathon from "../public/Calendar/hackathon.png";
import ProjectPitching_H24 from "../public/Calendar/prosjektpresentasjonerh24.jpg";
import ProjectPresentations_V25 from "../public/Calendar/project_presentations_v25.JPG";
import Fest from "../public/Calendar/fest.JPG";
import InterntHackathon from "../public/Calendar/internt_hackathon.jpeg";
import ProsjektlederOppstart from "../public/Calendar/prosjektleder_oppstart.JPG";
import Recover from "../public/Calendar/recover.png";
import Welcome from "../public/Calendar/welcome.jpeg";
import BoardGames from "../public/Calendar/board_games.png";
import KursH25 from "../public/Calendar/kurs_h25.jpeg";

export const hardcodedEvents: Array<EventType> = [
  {
    name: "Cogito-kveld ✨",
    date: new Date("2025-09-09"),
    timeString: "Tirsdager & Torsdager",
    subTimeString: "kl. 17-20",
    location:
      "Tirsdager: Gruva, Oppredning/gruvedrift, Gløshaugen\n📍Torsdager: TBH",
    description:
      "Hver uke møtes alle i Cogito for å jobbe med prosjektene våre i fellesskap. To muligheter, samme gode stemning! Det hender også at vi serverer pizza 🍕",
    image: CogitoNight,
    pinned: true,
  },
  {
    name: "Generalforsamling",
    date: new Date("2025-08-05"),
    timeString: "05.08",
    location: "TBA",
    description:
      "Velkommen til Cogitos årlige generalforsamling! Her presenteres årsrapporter, valg av nytt styre, og viktige vedtak for fremtiden. Din stemme teller!",
    image: CogitoNight,
  },
  {
    name: "Prosjektplanlegging",
    date: new Date("2025-08-05"),
    timeString: "05.08",
    subTimeString: "kl. 18:00",
    location: "TBA",
    description:
      "Bli med på planleggingen av spennende nye prosjekter for semesteret! Vi diskuterer ideer, teknologier og setter opp team for å skape noe fantastisk sammen.",
    image: CogitoNight,
  },
  {
    name: "Prosjektleder oppstartsmøte",
    date: new Date("2025-08-24"),
    timeString: "24.08",
    subTimeString: "kl. 11:15",
    location: "TBA",
    description:
      "Møte for prosjektledere! Vi deler erfaringer, diskuterer lederskap og klargjør forventninger for semesteret. Gode råd inkludert!",
    image: ProsjektlederOppstart,
  },
  {
    name: "Første Cogito Kveld 🎉",
    date: new Date("2025-09-09"),
    timeString: "09.09",
    subTimeString: "tirsdag",
    location: "Gruva, Oppredning/gruvedrift, Gløshaugen",
    description:
      "Første Cogito-kveld for det nye semesteret! En fantastisk mulighet til å bli kjent med andre medlemmer, nyte deilig pizza, og finne din prosjektgruppe. Kom og opplev det gode fellesskapet i Cogito!",
    image: Welcome,
  },
  {
    name: "Kurs - Datasyn",
    date: new Date("2025-09-18"),
    timeString: "11.09",
    subTimeString: "kl. 17:15",
    location: "VE22 SMASH",
    description:
      "Dykk ned i datasynens fascinerende verden! Lær om YOLO object detection og få hands-on erfaring med å trene modeller som kan se og forstå bilder.",
    image: KursH25,
    bannerType: "open-walk-in",
  },
  {
    name: "Collaboratory development kurs + Bowling 🎳",
    date: new Date("2025-09-18"),
    timeString: "18.09",
    subTimeString: "kl. 17:15",
    location: "VE22 SMASH + Bowling",
    description:
      "Lær essensielle utviklingsverktøy som Git, pre-commit hooks, GitHub Actions og Docker. Etter workshopen tar vi en velfortjent bowlingrunde for å feire at alle har fått sine første commits!",
    image: Bowling,
  },
  {
    name: "Vors og Fest 🎉",
    date: new Date("2025-09-19"),
    timeString: "19. september",
    subTimeString: "fredag",
    location: "TBA",
    description:
      "Time to party! 🎉 Bli med på vors og fest hvor vi feirer et flott semester så langt. God mat, drikke og enda bedre selskap!",
    image: Fest,
  },
  {
    name: "Intern Hackathon 💻",
    date: new Date("2025-09-27"),
    timeString: "27.09",
    subTimeString: "lørdag",
    location: "Rom 04-025, Helgasetr",
    description:
      "En hel dag med koding, kreativitet og kaffe! Vårt interne hackathon hvor hele Cogito får en kickstart på prosjektene, og blir bedre kjent på tvers av gruppene. Premier, pizza og mye moro!",
    image: InterntHackathon,
  },
  {
    name: "Recover Hackathon 🌟",
    date: new Date("2025-10-24"),
    timeString: "24.10 - 25.10",
    location: "TBA",
    description:
      "Cogito er tilbake med nytt hackathon! Denne gangen med Recover, Norges største på skadeservice og håndverkstjenester. Mer info om påmelding kommer senere.",
    image: Recover,
    bannerType: "open-registration",
  },
  {
    name: "Brettspillkveld 🎲",
    date: new Date("2025-11-01"),
    timeString: "01.11",
    subTimeString: "lørdag",
    location: "TBA",
    description:
      "Slapp av med en koselig brettspillkveld! Bli med på Secret Hitler, poker og mange andre spill. Snacks og drikke serveres!",
    image: BoardGames,
  },
  {
    name: "Prosjektpresentasjoner 🎙️",
    date: new Date("2025-11-18"),
    timeString: "18.11",
    subTimeString: "(tentativt)",
    location: "TBA",
    description:
      "Semesterets høydepunkt! Se alle de fantastiske prosjektene våre medlemmer har jobbet med. Presentasjoner og morsomme nominasjoner!",
    image: ProjectPresentations_V25,
  },
  {
    name: "Hackathon med Astar Consulting og Norgesgruppen Data",
    date: new Date("2025-04-04"),
    timeString: "4.-5. april",
    location: "R2, Realfagsbygget, Gløshaugen",
    description:
      " For første gang arrangerer Cogito og Astar, i samarbeid med NorgesGruppen Data, et hackathon! Det blir selvfølgelig servering begge dagene, og en samlet premiepott på 20 000 kr til de beste lagene.",
    link: "https://pameldinger.no/e/qfuryd",
    image: Hackathon,
  },
  {
    name: "Prosjektpresentasjoner🎉",
    date: new Date("2025-04-30"),
    timeString: "30.04",
    location: "Lager11",
    description:
      "Presentasjoner av prosjektene Cogito-medlemmer har jobbet på dette semesteret. Dette er en flott mulighet til å se hva Cogito har jobbet med, og for å bli inspirert til å delta i prosjekter selv! Påmelding kommer snart.",
    link: "",
    image: ProjectPitching_H24,
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
    bannerType: "open-walk-in",
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
    bannerType: "open-walk-in",
  },
  {
    name: "Workshop - Genetiske algoritmer 🧬",
    date: new Date("2025-01-31"),
    timeString: "30.01",
    subTimeString: "kl. 18-19:30",
    location: "R2, Realfagsbygget, Gløshaugen",
    description: "Tobias Fremming holder et kurs om genetiske algoritmer.",
    link: "",
    image: GAWorkshop,
    bannerType: "open-walk-in",
  },
  {
    name: "Project Pitching 🚀",
    date: new Date("2025-01-30"),
    timeString: "30.01",
    subTimeString: "kl. 19:30-21",
    location: "R2, Realfagsbygget, Gløshaugen",
    description:
      "Prosjektlederne pitcher sine prosjekter for medlemmene i Cogito.",
    link: "",
    image: ProjectPitching,
    bannerType: "open-walk-in",
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
  title: "Opptaksprosess Høst 2025",
  dates: "18.08 - 07.09",
  steps: [
    {
      name: "Søknadsportalen åpner",
      dates: "18.08",
    },
    {
      name: "Møt oss på stand!",
      dates: "18.08 - 29.08",
    },
    {
      name: "Søknadsfrist",
      dates: "29.08",
      important: true,
    },
    {
      name: "Intervjuer gjennomføres",
      dates: "01.09 - 07.09",
    },
    {
      name: "Prosjektstart",
      dates: "09.09",
    },
  ],
  pinned: true,
};
