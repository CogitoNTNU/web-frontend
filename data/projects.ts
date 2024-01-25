import { ProjectType } from "../types/types";
import MarketingAILogo from "../public/Projects/MarketingAILogo.png";
import CatMatch from "../public/Projects/CatMatch/CatMatch.png";


export const CogitoProjects: Array<ProjectType> = [
    {
        image: MarketingAILogo,
        laptopDesc:
            "Marketing AI is a powerful marketing tool made to conquer all social platforms!",
        phoneDesc: "Marketing done right!",
        link: "https://cogito-ntnu.no/projects/marketingai",
        github: "https://github.com/CogitoNTNU/MarketingAI",
        leaders: Array<string>("Kristoffer Olaisen", "Sverre Nystad"),
    },
    {
        image: CatMatch,
        laptopDesc:
            "CatMatch, the purrfect website for finding the right cats for you!",
        phoneDesc: "The purrfect cats!",
        link: "https://catmatch.rosby.no",
        github: "https://github.com/CogitoNTNU/CatMatch",
        leaders: Array<string>("Ulrik Røsby"),
    },
];