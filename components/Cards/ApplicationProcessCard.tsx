import React from "react";
import Card from "./Card";
import Button from "../Buttons/Button";
import Link from "next/link";
import { EventApply } from "../../lib/types";

interface ApplicationProcessCardProps {
  applicationProcessData: EventApply;
}

const ApplicationProcessCard: React.FC<ApplicationProcessCardProps> = ({
  applicationProcessData,
}) => {
  return (
    <Card>
      <div className="w-full mb-5 flex justify-between phone:flex-row flex-col text-white">
        <h2 className="phone:w-[50%] w-full phone:text-2xl text-lg font-bold flex items-center gap-4">
          {applicationProcessData.pinned && (
            <img
              className="w-6 h-6"
              src="/Calendar/white-pin.png"
              alt="Pinned event"
            />
          )}
          {applicationProcessData.title}
        </h2>
        <p className="phone:w-[50%] w-full phone:text-xl text-md phone:text-end text-start">
          {applicationProcessData.dates}
        </p>
      </div>
      <ol className="text-white mb-6">
        {applicationProcessData.steps.map((step, index) => (
          <li key={index} className="w-full flex justify-between mb-3">
            <div className="flex justify-start gap-1">
              <h3 className={`${step.important && "text-pink-default"}`}>
                {step.name}
              </h3>
              {step.lenke && (
                <a
                  className="text-blue-light underline hover:underline hover:font-bold"
                  href={step.lenke}
                >
                  (MazeMap)
                </a>
              )}
            </div>
            <p
              className={
                step.important
                  ? "text-pink-default min-w-fit ml-3"
                  : "min-w-fit ml-3"
              }
            >
              {step.dates}
            </p>
          </li>
        ))}
      </ol>
      <div className="w-full flex justify-center">
        <Link href={"/apply"}>
          <Button text="Søk Opptak" px={"8"} py={"4"} color={"pink"} />
        </Link>
      </div>
    </Card>
  );
};

export default ApplicationProcessCard;
