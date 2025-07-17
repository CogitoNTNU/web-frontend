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
      description:
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
  {
    articleId: "muzero",
    landingPage: {
      title: "MuZero",
      description:
        "Kan en KI lære spillets regler mens den spiller? Vi bygde vår egen versjon av DeepMinds MuZero – fra skjema til seier!",
    },
    descriptionPage: {
      description:
        "MuZero (Schrittwieser et al., DeepMind, 2019) er en banebrytende algoritme som kombinerer forsterkningslæring, modellbasert planlegging og dyp læring – uten å få reglene servert på forhånd. I stedet lærer modellen en *intern* representasjon av miljøet: et kodat ‘state’-rom (representasjonsnett), en *dynamikkfunksjon* som spår hvordan verden utvikler seg når den tar handlinger, og et *prediksjonsnett* som estimerer verdi og policy. Når MuZero skal velge trekk, kjører den en søkeprosess (Monte Carlo Tree Search) inne i sin egen lært modell for å planlegge fremover. Det gjør at samme rammeverk kan spille brettspill, Atari‑spill – i prinsippet hva som helst med observerbare tilstander og belønninger – så lenge treningstiden er der.\n\nI Cogito NTNU sitt MuZero‑prosjekt (Vår 2025) implementerte vi en pedagogisk, modulær studentversjon i Python/PyTorch. Vi integrerte OpenAI Gymnasium‑miljøer for rask eksperimentering, logget treningsløp og hyperparametere i Weights & Biases (WandB), og pakket kjørbare eksperimenter i Docker for reproduserbarhet. En lett FastAPI‑backend og React‑frontend gjør det mulig å trigge treningsjobber, følge læringskurver og se modellen spille i nettleseren. Koden er åpen – ta en titt, lek med hyperparametere, og se hvor langt *din* MuZero kan lære seg å planlegge!",
      funFacts: [
        "Vi skrev store deler av MuZero‑pipen selv: representasjonsnett, dynamikknett, prediksjonsnett og MCTS‑sløyfen!",
        "Treningslogger og video‑rollouts lastes automatisk opp til WandB for analyse.",
        "Web‑UI i React viser live tap/return og lar deg spille mot agenten og konfigurere hyperparametere og netverks arkitektur.",
      ],
      links: ["https://arxiv.org/abs/1911.08265"],
      technologies: [
        "Python",
        "PyTorch",
        "OpenAI Gymnasium",
        "WandB",
        "React",
        "Docker",
        "FastAPI",
      ],
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
          name: "Ludvig Øvrevik",
          role: "Medlem",
          github: "https://github.com/ludvigovrevik",
          linkedIn: "",
        },
        {
          name: "Eirik Sol",
          role: "Medlem",
          github: "https://github.com/Eiriksol",
          linkedIn: "",
        },
        {
          name: "Kristian Carlenius",
          role: "Medlem",
          github: "https://github.com/kristiancarlenius",
          linkedIn: "https://www.linkedin.com/in/kristian-carlenius-aa155722b/",
        },
        {
          name: "Adi Singh",
          role: "Medlem",
          github: "https://github.com/adisinghstudent",
          linkedIn: "",
        },
        {
          name: "Nicolai9897",
          role: "Medlem",
          github: "https://github.com/Nicolai9897",
          linkedIn: "",
        },
        {
          name: "Vegardhgr",
          role: "Medlem",
          github: "https://github.com/Vegardhgr",
          linkedIn: "",
        },
      ],
    },
    semester: "Vår",
    year: 2025,
    github: "https://github.com/CogitoNTNU/DeepTactics-Muzero",
  },
];
