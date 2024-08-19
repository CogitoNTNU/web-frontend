import React from 'react';
import Card from './Card';

interface EventCardProps {
    eventName: string;
    eventDate: string;
    eventSubDate?: string;
    eventLocation: string;
    eventDescription: string;
    eventImage?: string;
    eventLink?: string;
    pinned?: boolean;
}

const EventCard: React.FC<EventCardProps> = (props) => {
    const { eventName, eventDate, eventSubDate, eventLocation, eventDescription, eventImage, eventLink, pinned } = props;

    return (
        <Card>
            {pinned && <img className='w-[24px] h-auto mb-[12px]' src='/Calendar/white-pin.png' alt='Pinned event' />}
            <div className='w-full mb-[12px] flex justify-between phone:flex-row flex-col text-white'>
                <h2 className='phone:w-[50%] w-full phone:text-2xl text-lg font-bold'>{eventName}</h2>
                <div className='phone:w-[50%] w-full phone:text-end text-start'>
                    <p className='text-xl'>{eventDate}</p>
                    {eventSubDate && <p className='text-md'>{eventSubDate}</p>}
                </div>
            </div>
            <div className='flex flex-col gap-[12px] text-base text-white'>
                <p className=''>{!eventLocation ? '📍TBA' : '📍' + eventLocation}</p>
                {eventImage && <img className='rounded-lg' src={eventImage} alt={eventName} />}
                {eventDescription && <p>{eventDescription}</p>}
                {eventLink && <a className='max-w-fit text-blue-light underline hover:underline hover:font-bold' href={eventLink}>Mer info</a>}
            </div>
        </Card>
    );
};

export default EventCard;