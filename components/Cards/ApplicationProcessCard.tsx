import React from "react";
import Card from "./Card";
import Button from "../Buttons/Button";
import Link from "next/link";

interface ApplicationProcessCardProps {}

const ApplicationProcessCard: React.FC<ApplicationProcessCardProps> = () => {
  const applicationProcessData = {
    steps: [
      {
        name: "Søknadsskjema tilgjengeliggjøres",
        dates: "01.08",
      },
      {
        name: "Møt oss på stand!",
        dates: "19.08 - 23.08",
        lenke:
          "https://use.mazemap.com/#v=1&config=ntnu&campusid=1&zlevel=-1&center=10.406636,63.415702&zoom=20.4&sharepoitype=poi&sharepoi=51997",
      },
      {
        name: "Søknadsfrist",
        dates: "23.08",
        important: true,
      },
      {
        name: "Innkalling til intervju sendes ut",
        dates: "24.08",
      },
      {
        name: "Intervjuer gjennomføres",
        dates: "25.08 - 26.08",
      },
      {
        name: "Tilbud om medlemskap sendes ut",
        dates: "26.08",
      },
      {
        name: "Oppstartskveld",
        dates: "27.08",
      },
    ],
  };

  return (
    <Card>
      <img
        className="w-6 h-auto mb-3"
        src="/Calendar/white-pin.png"
        alt="Pinned event"
      />
      <div className="w-full mb-5 flex justify-between phone:flex-row flex-col text-white">
        <h2 className="phone:w-[50%] w-full phone:text-2xl text-lg font-bold">
          Opptaksprosess Høst 2024
        </h2>
        <p className="phone:w-[50%] w-full phone:text-xl text-md phone:text-end text-start">
          01.08 - 27.08
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
                step.name === "Søknadsfrist"
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
