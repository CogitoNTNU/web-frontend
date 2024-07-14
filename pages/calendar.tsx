'use client';

import Head from "next/head";
import { motion } from "framer-motion";
import EventCard from "../components/Cards/EventCard";
import ApplicationProcessCard from "../components/Cards/ApplicationProcessCard";

const Calendar = () => {
    const hardcodedEvents = [
        {
            eventName: 'Planlegging av prosjekter',
            eventDate: '30.07',
            eventLocation: 'Foregår digitalt',
            eventDescription: 'Planlegging av prosjekter for høstsemesteret 2024. Vi velger hvilke prosjekter som skal gjennomføres, og hvem som blir prosjektledere.',
            eventImage: '',
            eventLink: '',
        },
        {
            eventName: 'Arrangementnavn',
            eventDate: 'DD.MM',
            eventLocation: '',
            eventDescription: '',
            eventImage: '',
            eventLink: '/events/<event>',
        },
        {
            eventName: 'Cogito Prosjekt Presentasjoner',
            eventDate: '22.11',
            eventLocation: '',
            eventDescription: 'Presentasjoner av prosjektene Cogito-medlemmer har jobbet på dette semesteret. Dette er en flott mulighet til å se hva Cogito har jobbet med, og for å bli inspirert til å delta i prosjekter selv!',
            eventImage: '',
            eventLink: '',
        },
    ];

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
                className="w-full h-full laptop:pt-[100px] pt-[100px]"
            >
                <div className='w-[100vw] flex justify-center'>
                    <div className='flex-col justify-center items-center'>
                        <ApplicationProcessCard />
                        {eventData.map((event, index) => (
                            <EventCard
                                key={index}
                                eventName={event.eventName}
                                eventDate={event.eventDate}
                                eventLocation={event.eventLocation}
                                eventDescription={event.eventDescription}
                                eventImage={event.eventImage}
                                eventLink={event.eventLink}
                            />
                        ))}
                    </div>
                </div>
            </motion.main>
        </>
    );
}

export default Calendar;