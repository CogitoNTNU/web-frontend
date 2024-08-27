"use strict";
"use client";

import { useRouter } from "next/router";
export const Cogito = () => {
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const router = useRouter();

  const homeAndScrollToBottom = async () => {
    await router.push("/");
    await timeout(1000);
    document.getElementById("part-2").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        data-name="Cogito"
        className="flex flex-col items-center justify-center w-full tablet:w-3/4 laptop:w-1/2 rounded-t-xl pt-10 tablet:pt-20"
      >
        <div
          data-name="upper box"
          className="flex flex-col tablet:flex-row items-start w-full"
        >
          <div
            data-name="text"
            className="w-full flex flex-col justify-center pt-4"
          >
            <h1 className="text-white text-3xl tablet:text-4xl font-bold text-center">
              BYGG FREMTIDEN DIN
            </h1>
            <div className="flex flex-col tablet:flex-row justify-center items-center">
              <h1 className="text-white text-3xl tablet:text-5xl font-bold text-center">
                INNENFOR
              </h1>
              <h1 className="text-white bg-blue-light rounded-md p-2 text-3xl tablet:text-5xl font-bold text-center tablet:ml-4 mt-2 tablet:mt-0">
                AI!
              </h1>
            </div>
            <p className="text-white text-lg tablet:text-xl bg-blue-default p-4 mt-4 rounded-md rounded-b-none">
              Cogito NTNU er en studentorganisasjon ved NTNU Trondheim som
              fokuserer på kunstig intelligens. Gjennom kursing og
              prosjektkvelder får deltakere praktisk erfaring ved siden av
              studiene.
            </p>
          </div>
        </div>
        <div
          data-name="white box"
          className="flex flex-col items-center justify-center bg-slate-50 w-full h-auto p-6 rounded-xl rounded-t-none"
        >
          <h1 className="text-lg tablet:text-2xl font-bold text-center text-black-default">
            Ønsker du å få praktisk erfaring innen AI?
          </h1>
          <div
            data-name="buttons"
            className="flex flex-col tablet:flex-row gap-4 pt-4 text-lg"
          >
            <button
              className="text-white bg-red-light px-5 py-3 tablet:px-8 tablet:py-4 rounded-3xl"
              onClick={async () => {
                await router.push("/apply");
              }}
            >
              Søk opptak
            </button>
            <p className="text-black-default text-center tablet:pt-3">eller</p>
            <button
              className="text-white bg-blue-default px-5 py-3 tablet:px-8 tablet:py-4 rounded-3xl"
              onClick={homeAndScrollToBottom}
            >
              Kontakt oss
            </button>
          </div>
        </div>
      </div>
      <div
        data-name="Rask info"
        className="flex flex-col gap-6 pt-20 tablet:w-3/4"
      >
        <h1 className="text-white text-center text-4xl tablet:text-6xl font-semibold">
          RASK INFORMASJON
        </h1>
        <div
          data-name="Facts"
          className="flex flex-row items-center justify-center gap-6 tablet:gap-24"
        >
          <div data-name="Members">
            <h1 className="text-center text-5xl font-bold text-blue-default">
              70+
            </h1>
            <p className="text-white text-center text-xl font-medium">
              MEDLEMMER
            </p>
          </div>
          <div data-name="Made">
            <h1 className="text-center text-5xl font-bold text-blue-light">
              2018
            </h1>
            <p className="text-white text-center text-xl font-medium">
              GRUNNLAGT
            </p>
          </div>
          <div data-name="Projects">
            <h1 className="text-center text-5xl font-bold text-red-light">
              100+
            </h1>
            <p className="text-white text-center text-xl font-medium">
              PROSJEKTER
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
