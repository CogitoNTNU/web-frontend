import { EventType } from "../lib/types";
import CogitoNight from "../public/Calendar/Cogito-night.jpg";
import Bowling from "../public/Calendar/Bowling.jpg";
import PresentationWork from "../public/Calendar/PresentationWork.jpg";
import Presentation from "../public/Calendar/ProjectPresentations.jpg";
import MLWorkshop from "../public/Calendar/MLWorkshop.webp";
import AstarLogo from "../public/Calendar/Astar - Logo.png";

export const hardcodedEvents: Array<EventType> = [
  {
    name: "Prosjektplanlegging 📝",
    date: "16.01",
    location: "R4",
    description:
      "Planlegging av prosjekter for vårsemesteret 2025. Vi velger hvilke prosjekter som skal gjennomføres, og hvem som blir prosjektledere.",
    link: "",
    image: PresentationWork,
  },
  {
    name: "Åpen Workshop: Nevrale nettverk 🧠",
    date: "23.01",
    location: "Gruva NTNU",
    description:
      "Vi arrangerer en workshop om nevrale nettverk. Workshopen er åpen for alle, og en perfekt mulighet for å få en smakebit av Cogito!",
    image: MLWorkshop,
  },
  {
    name: "Åpen Workshop: Genetiske algoritmer 🧬",
    date: "28.01",
    location: "Gruva NTNU",
    description:
      "Vi arrangerer en workshop om genetiske algoritmer. Workshopen er åpen for alle, og en perfekt mulighet for å få en smakebit av Cogito!",
    image: MLWorkshop,
  },
  {
    name: "Cogito-kveld ✨",
    date: "Tirsdager kl. 17-20",
    subDate: "Fra og med 11.02",
    location: "Gruva NTNU",
    description:
      'Hver tirsdag fra kl. 17:00 til 20:00 møtes alle i Cogito i "Gruva" for å jobbe med prosjektene våre i fellesskap. Det hender også at vi serverer pizza 🍕',
    image: CogitoNight,
  },
  {
    name: "Bowling 🎳",
    date: "TBA",
    location: "Centrum Bowling",
    description:
      "Vi gjentar suksessen fra forrige semester og arrangerer en bowlingkveld for alle i Cogito. Dette er en flott mulighet til å bli kjent på tvers av prosjektene, og for å ha det gøy sammen!",
    image: Bowling,
  },
  {
    name: "Prosjektpresentasjoner 🎙️",
    date: "Forventet 30.04",
    location: "",
    description:
      "Presentasjoner av prosjektene Cogito-medlemmer har jobbet på dette semesteret. Dette er en flott mulighet til å se hva Cogito har jobbet med, og for å bli inspirert til å delta i prosjekter selv!",
    link: "",
    image: Presentation,
  },
];
