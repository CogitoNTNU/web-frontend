"use client";
import tempImage from "../public/Team/Default.png";
import { motion } from "framer-motion";
import Image from "next/image";

// Images
import simon from "../../public/Team/SimonKateter.jpeg";

interface Member {
    name: string;
    title: string;
    imageURL?: string;
    linkedinURL?: string;
    mailURL?: string;
}

const Member = ({ name, title, imageURL, linkedinURL, mailURL }: Member) => {
    // const imageLoader = ({ src, width, quality }) => {
    //     return `https://cogito-backend.net${src}?w=${width}&q=${quality || 75}`;
    // };

    return (
        <>
            <main className="text-white">
                <div className="bg-gray-lighter w-[250px] h-[350px] rounded-3xl group overflow-hidden drop-shadow-lg">
                    <Image
                        className="object-cover w-full h-full rounded-3xl transition-transform transform group-hover:scale-110"
                        src={simon}
                        alt="image"
                    />
                    <div className=""></div>
                </div>
            </main>
        </>
    );
};

export default Member;
