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
  date: string;
  subDate?: string;
  location: string;
  description: string;
  image?: StaticImageData;
  link?: string;
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
  image: StaticImageData;
  laptopDesc: string;
  phoneDesc: string;
  link: string;
  github: string;
  leaders: Array<string>;
  new?: boolean;
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
