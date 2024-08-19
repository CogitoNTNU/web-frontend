import React from "react";
import Card from "./Card";
import Image from "next/image";
import { EventType } from "../../lib/types";

const EventCard: React.FC<EventType> = (props) => {
  const {
    name: eventName,
    date: eventDate,
    subDate: eventSubDate,
    location: eventLocation,
    description: eventDescription,
    image: eventImage,
    link: eventLink,
    pinned,
  } = props;

  return (
    <Card>
      {pinned && (
        <img
          className="w-[24px] h-auto mb-[12px]"
          src="/Calendar/white-pin.png"
          alt="Pinned event"
        />
      )}
      <div className="w-full mb-[12px] flex justify-between phone:flex-row flex-col text-white">
        <h2 className="phone:w-[50%] w-full phone:text-2xl text-lg font-bold">
          {eventName}
        </h2>
        <div className="phone:w-[50%] w-full phone:text-end text-start">
          <p className="text-xl">{eventDate}</p>
          {eventSubDate && <p className="text-md">{eventSubDate}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-[12px] text-base text-white">
        <p className="">{!eventLocation ? "📍TBA" : "📍" + eventLocation}</p>
        {eventImage && <Image className="rounded-[12px]" src={eventImage} alt={eventName} />}
        {eventDescription && <p>{eventDescription}</p>}
        {eventLink && (
          <a
            className="max-w-fit text-blue-light underline hover:underline hover:font-bold"
            href={eventLink}
          >
            Mer info
          </a>
        )}
      </div>
    </Card>
  );
};

export default EventCard;
