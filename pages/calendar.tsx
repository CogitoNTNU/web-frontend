"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import EventCard from "../components/Cards/EventCard";
import ApplicationProcessCard from "../components/Cards/ApplicationProcessCard";
import Footer from "../components/Footer/Footer";
import { hardcodedEvents } from "../data/events";

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
        <div className="w-[100vw] flex justify-center">
          <div className="justify-center items-center flex flex-wrap">
            <ApplicationProcessCard />
            {eventData.map((event, index) => (
              <EventCard
                key={index}
                name={event.name}
                date={event.date}
                subDate={event.subDate}
                location={event.location}
                description={event.description}
                image={event.image}
                link={event.link}
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
