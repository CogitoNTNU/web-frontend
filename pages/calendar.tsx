"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import EventCard from "../components/Cards/EventCard";
// import ApplicationProcessCard from "../components/Cards/ApplicationProcessCard";
import { hardcodedEvents } from "../data/events";
import Footer from "../components/Footer/Footer";
// import { applicationEvent2025, hardcodedEvents } from "../data/events";
import Navbar from "../components/Navbar/Navbar";
import { FcCalendar } from "react-icons/fc";

const Calendar = () => {
  const eventData = hardcodedEvents;

  const GOOGLE_CAL_LINK =
    "https://calendar.google.com/calendar/u/0?cid=Y181ZjY2NmNkYTU3YmM1NThlZWQyOGEyNjNkMmFkYTdlYjc1NTYzMTI0ODYyZGNlZGE1NTZiY2E4ODlkN2E1NjQ4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
  return (
    <>
      <Head>
        <title>Kalender - Cogito NTNU</title>
      </Head>
      <Navbar page="calendar" />
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
          <div className="flex flex-col">
            <p className="bg-gray-default px-8 rounded-2xl font-bold text-white laptop:text-[80px] tablet:text-[70px] text-[42px] tracking-wide drop-shadow-3xl">
              Kommende hendelser
            </p>
            <a
              href={GOOGLE_CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-default hover:bg-gray-darker text-white font-semibold px-4 py-2 rounded-xl shadow-lg transition-colors duration-200"
            >
              <FcCalendar className="text-2xl" />
              Legg til i Google Kalender
            </a>
          </div>
          <div className="flex flex-wrap justify-center xl:justify-start gap-12">
            {/* <ApplicationProcessCard
              applicationProcessData={applicationEvent2025}
            /> */}
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
                  bannerType={event.bannerType}
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
                  bannerType={event.bannerType}
                />
              ))}
          </div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
};

export default Calendar;
