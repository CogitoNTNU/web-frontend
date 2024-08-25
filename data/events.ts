import { EventType } from "../lib/types";
import CogitoNight from "../public/Calendar/Cogito-night.jpg";
import Bowling from "../public/Calendar/Bowling.jpg";
import PresentationWork from "../public/Calendar/PresentationWork.jpg"
import Presentation from "../public/Calendar/ProjectPresentations.jpg"
import MLWorkshop from "../public/Calendar/MLWorkshop.webp"

export const hardcodedEvents: Array<EventType> = [
  {
    name: "Prosjektplanlegging 📝",
    date: "30.07",
    location: "Digitalt møte",
    description:
      "Planlegging av prosjekter for høstsemesteret 2024. Vi velger hvilke prosjekter som skal gjennomføres, og hvem som blir prosjektledere.",
    link: "",
    image: PresentationWork
  },
  {
    name: "Cogito-kveld ✨",
    date: "Tirsdager kl. 17-20",
    subDate: "Fra og med 27.08",
    location: "Gruva NTNU",
    description:
      'Hver tirsdag fra kl. 17:00 til 20:00 møtes alle i Cogito i "Gruva" for å jobbe med prosjektene våre i fellesskap. Det hender også at vi serverer pizza 🍕',
    image: CogitoNight,
  },
  {
    name: "Maskinlæring Workshop 🤖",
    date: "29.08",
    location: "Gruva NTNU",
    description:
      "Vi arrangerer en workshop i maskinlæring for alle i Cogito. Vi går gjennom grunnleggende konsepter og tester de ut på Titanic-datasettet.",
    image: MLWorkshop,
  },
  {
    name: "Bowling 🎳",
    date: "Dato: TBD",
    location: "",
    description:
      "Vi gjentar suksessen fra forrige semester og arrangerer en bowlingkveld for alle i Cogito. Dette er en flott mulighet til å bli kjent på tvers av prosjektene, og for å ha det gøy sammen!",
    image: Bowling,
  },
  {
    name: "Prosjektpresentasjoner 🎙️",
    date: "22.11",
    location: "",
    description:
      "Presentasjoner av prosjektene Cogito-medlemmer har jobbet på dette semesteret. Dette er en flott mulighet til å se hva Cogito har jobbet med, og for å bli inspirert til å delta i prosjekter selv!",
    link: "",
    image: Presentation
  },
];
