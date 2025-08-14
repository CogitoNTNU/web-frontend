import { StaticImageData } from "next/image";

export type MemberType = {
  order: number;
  name: string;
  title: string;
  image: string;
  category: string[];
  github: string;
  email: string;
  linkedIn: string;
};

export type EventType = {
  name: string;
  date: Date;
  timeString: string;
  subTimeString?: string;
  location: string;
  description: string;
  image?: StaticImageData;
  link?: string;
  pinned?: boolean;
  openForAll?: boolean;
};

export type EventApply = {
  title: string;
  dates: string;
  steps: Array<{
    name: string;
    dates: string;
    lenke?: string;
    important?: boolean;
  }>;
  pinned?: boolean;
};
export type ProjectApply = {
  name: string;
  description: string;
  image: string;
  leaders: Array<string>;
  workload?: string;
};

export type ProjectType = {
  name: string;
  img: string;
  playable?: boolean;
  released: boolean;
  github: string;
  url: string;
};

export type ArticleType = {
  articleId: string;
  landingPage: ArticleLandingPage;
  descriptionPage: ArticleDescriptionPage;
  teamPage: ArticleTeamPage;
  semester: "Høst" | "Vår";
  year: number;
  github?: string;
};

export type ArticleLandingPage = {
  title: string;
  description: string;
  isVideo: boolean;
};

export type ArticleDescriptionPage = {
  description: string;
  funFacts: string[];
  links: string[];
  technologies: string[];
};

export type ArticleTeamPage = {
  team: TeamMember[];
};

export type TeamMember = {
  name: string;
  role: "Leder" | "Medleder" | "Medlem";
  github: string;
  linkedIn: string;
};

export type GenerateImageParams = {
  prompt: string;
  width: number;
  height: number;
  timestamp: string;
};

export type MarketingAIResponse = {
  image_url: string;
};

export type GetMembersType = {
  member_type: string;
};
