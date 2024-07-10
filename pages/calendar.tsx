'use client';

import Head from "next/head";
import { motion } from "framer-motion";
import EventCard from "../components/Cards/EventCard";

const Calendar = () => {
    const hardcodedEvents = [
        {
            eventName: 'Cogito Prosjekt Presentasjoner',
            eventDate: '22.11.2024',
            eventLocation: 'Event Location',
            eventDescription: 'Semesterly project presentations for the Cogito NTNU student organization.',
            eventImage: 'Event Image',
            eventLink: '/events/event',
        },
        {
            eventName: 'Event Name',
            eventDate: 'Event Date',
            eventLocation: 'Event Location',
            eventDescription: 'Event Description',
            eventImage: 'Event Image',
            eventLink: '/events/event',
        },
        {
            eventName: 'Event Name',
            eventDate: 'Event Date',
            eventLocation: 'Event Location',
            eventDescription: 'Event Description',
            eventImage: 'Event Image',
            eventLink: '/events/event',
        },
        {
            eventName: 'Event Name',
            eventDate: 'Event Date',
            eventLocation: 'Event Location',
            eventDescription: 'Event Description',
            eventImage: 'Event Image',
            eventLink: '/events/event',
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