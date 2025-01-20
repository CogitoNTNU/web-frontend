"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import EventCard from "../components/Cards/EventCard";
import ApplicationProcessCard from "../components/Cards/ApplicationProcessCard";
import Footer from "../components/Footer/Footer";
import { hardcodedEvents } from "../data/events";
import { applicationEvent2024, applicationEvent2025 } from "../data/events";

const Calendar = () => {
  const eventData = hardcodedEvents;

  return (
    <>
      <Head>
        <title>Kalender - Cogito NTNU</title>
      </Head>
      <motion.main
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.0],
        }}
        className="w-full h-full laptop:pt-[150px] pt-[125px]"
      >
        <div className="w-full px-4 sm:px-12 md:px-32 flex flex-col justify-start items-start gap-12">
          <p className="bg-gray-default px-8 rounded-2xl font-bold text-white laptop:text-[80px] tablet:text-[70px] text-[42px] tracking-wide drop-shadow-3xl">
            Kommende hendelser
          </p>
          <div className="flex flex-wrap justify-center xl:justify-start gap-12">
            <ApplicationProcessCard
              applicationProcessData={applicationEvent2025}
            />
            {eventData
              .filter((event) => event.date > new Date())
              .map((event, index) => (
                <EventCard
                  key={index}
                  name={event.name}
                  date={event.date}
                  timeString={event.timeString}
                  subTimeString={event.subTimeString}
                  location={event.location}
                  description={event.description}
                  image={event.image}
                  link={event.link}
                  pinned={event.pinned}
                />
              ))}
          </div>
          <p className="bg-gray-default px-8 rounded-2xl font-bold text-white laptop:text-[80px] tablet:text-[70px] text-[42px] tracking-wide drop-shadow-3xl">
            Tidligere hendelser
          </p>
          <div className="flex flex-wrap justify-center xl:justify-start gap-12">
            {eventData
              .filter((event) => event.date < new Date())
              .reverse()
              .map((event, index) => (
                <EventCard
                  key={index}
                  name={event.name}
                  date={event.date}
                  timeString={event.timeString}
                  subTimeString={event.subTimeString}
                  location={event.location}
                  description={event.description}
                  image={event.image}
                  link={event.link}
                  pinned={event.pinned}
                />
              ))}
            <ApplicationProcessCard
              applicationProcessData={applicationEvent2024}
            />
          </div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
};

export default Calendar;
