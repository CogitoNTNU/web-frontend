import { ArticleType } from "../lib/types";

export const articles: ArticleType[] = [
  {
    articleId: "neatactics",
    landingPage: {
      title: "NEATACTICS",
      description:
        "Hvordan kan en datamaskin lære seg å spille Mario helt selv?",
    },
    descriptionPage: {
      projectDescription:
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
          name: "Haagen Mæland Moe",
          role: "Medlem",
          github: "https://github.com/Thesmund",
          linkedIn: "https://www.linkedin.com/in/haagen-m%C3%A6land-moe/",
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
];
