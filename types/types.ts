import { StaticImageData } from "next/image";

export type MemberType = {
    order: number;
    name: string;
    title: string;
    image: string;
    category: string;
    github: string;
    email: string;
    linkedIn: string;
};

export type ProjectType = {
    image: StaticImageData;
    laptopDesc: string;
    phoneDesc: string;
    link: string;
    github: string;
    leaders: Array<string>;
};
