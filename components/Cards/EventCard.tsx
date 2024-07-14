import React from 'react';
import Card from './Card';

interface EventCardProps {
    eventName: string;
    eventDate: string;
    eventLocation: string;
    eventDescription: string;
    eventImage: string;
    eventLink: string;
}

const EventCard: React.FC<EventCardProps> = (props) => {
    const { eventName, eventDate, eventLocation, eventDescription, eventImage, eventLink } = props;

    // Implement your component logic here

    return (
        <Card>
            <div className='w-full mb-[12px] flex justify-between text-white'>
                <h2 className='w-[50%] text-2xl font-bold'>{eventName}</h2>
                <p className='text-xl'>{eventDate}</p>
            </div>
            <div className='flex flex-col gap-[12px] text-base text-white'>
                <p className=''>{!eventLocation ? 'Lokasjon: TBA' : eventLocation}</p>
                {eventImage && <img src={eventImage} alt={eventName} />}
                {eventDescription && <p>{eventDescription}</p>}
                {eventLink && <a className='max-w-fit text-blue-light underline hover:underline hover:font-bold' href={eventLink}>Mer info</a>}
            </div>
        </Card>
    );
};

export default EventCard;