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
            <div className='w-full mb-[20px] flex justify-between'>
                <h2 className='text-2xl text-white'>{eventName}</h2>
                <p className='text-xl text-white'>{eventDate}</p>
            </div>
            <p className='text-base text-white'>{eventLocation}</p>
            <p>{eventDescription}</p>
            <img src={eventImage} alt={eventName} />
            <a href={eventLink}>More Info</a>
        </Card>
    );
};

export default EventCard;