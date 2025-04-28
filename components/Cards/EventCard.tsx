import React from "react";
import Card from "./Card";
import Image from "next/image";
import { EventType } from "../../lib/types";

const EventCard: React.FC<EventType> = (props) => {
  const {
    name: eventName,
    timeString: eventTimeString,
    subTimeString: eventSubTimeString,
    location: eventLocation,
    description: eventDescription,
    image: eventImage,
    link: eventLink,
    pinned,
    openForAll,
  } = props;

  return (
    <Card>
      <div className="w-full mb-[12px] flex justify-between phone:flex-row flex-col text-white">
        <h2 className="phone:w-auto w-full phone:text-2xl text-[17px] font-bold tracking-wide flex items-center gap-4">
          {pinned && (
            <img
              className="w-6 h-6"
              src="/Calendar/white-pin.png"
              alt="Pinned event"
            />
          )}
          {eventName}
        </h2>
        <div className="phone:w-fit w-full min-w-fit phone:text-end text-start phone:h-[3rem] py-1">
          <p className="phone:text-xl text-[16px]">{eventTimeString}</p>
          {eventSubTimeString && (
            <p className="phone:text-[16px] text-[13px] min-w-fit">
              {eventSubTimeString}
            </p>
          )}
        </div>
      </div>
      {openForAll && (
        <div className="w-full bg-pink-default text-white font-bold text-center py-1 rounded-[10px] mb-4">
          ÅPENT FOR ALLE! Bare å dukke opp 👋
        </div>
      )}
      <div className="flex flex-col text-base text-white tracking-wider pt-1">
        <p className="pb-2">
          {!eventLocation ? "📍TBA" : "📍" + eventLocation}
        </p>
        {eventImage && (
          <Image
            className="rounded-[10px] h-[220px] object-cover"
            src={eventImage}
            alt={eventName}
          />
        )}

        {eventDescription && (
          <p className="pt-4 phone:text-[16px] text-[14px]">
            {eventDescription}
          </p>
        )}
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
