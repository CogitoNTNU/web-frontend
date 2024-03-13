import Image from "next/image";
import logo from "../../../public/Logos/whiteCogitoLogoLightRedBG.svg";
import Button from "../../Buttons/Button";
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
        className="flex flex-col items-center justify-center tablet:w-3/4 rounded-xl pt-20"
      >
        <div data-name="upper box" className="flex flex-row items-start">
          <div data-name="logo" className="w-[35%] left-0">
            <Image src={logo} alt="Cogito Logo" />
          </div>
          <div
            data-name="text"
            className="flex flex-col justify-center w-[65%] left-0"
          >
            <h1 className="flex text-white text-xl tablet:text-4xl font-bold text-center items-center">
              BYGG FREMTIDEN DIN
            </h1>
            <div className="flex flex-row">
              <h1 className="flex text-white text-2xl tablet:text-5xl font-bold text-center items-center">
                INNENFOR
              </h1>
              <h1 className="flex text-white bg-blue-light rounded-md text-2xl tablet:text-5xl font-bold text-center items-end ml-10">
                AI!
              </h1>
            </div>
            <p className="text-white text-lg tablet:text-xl bg-blue-default mb-0">
              Cogito NTNU er en studentorganisasjon ved NTNU Trondheim som
              fokuserer på kunstig intelligens. Gjennom kursing og
              prosjektkvelder får deltakere praktisk erfaring ved siden av
              studiene.
            </p>
          </div>
        </div>
        <div
          data-name="white box"
          className="flex flex-col items-center justify-center bg-slate-50 w-full h-[135px] rounded-xl"
        >
          <h1 className=" text-lg tablet:text-2xl font-bold text-center text-black-default pt-2">
            Ønsker du å få praktisk erfaring innen AI?
          </h1>
          <div
            data-name="buttons"
            className="flex flex-row gap-6 pt-4 text-lg pb-3"
          >
            <button className="text-white bg-red-light px-5 py-3 tablet:px-8 tablet:py-4 rounded-3xl">
              Søk opptak
            </button>
            <p className=" text-black-default flex items-center">eller</p>
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
        <h1 className="text-white text-center flex-grow w-full text-4xl tablet:text-6xl font-semibold">
          RASK INFORMASJON
        </h1>
        <div
          data-name="Facts"
          className="flex flex-row items-center justify-center gap-x-12 tablet:gap-x-24"
        >
          <div data-name="Members">
            <h1 className="text-center text-5xl font-bold text-blue-default font-semibold">
              70+
            </h1>
            <p className="text-white text-center text-xl font-medium">
              MEDLEMMER
            </p>
          </div>
          <div data-name="Made">
            <h1 className="text-center text-5xl font-bold text-blue-light font-semibold">
              2018
            </h1>
            <p className="text-white text-center text-xl font-medium">
              GRUNNLAGT
            </p>
          </div>
          <div data-name="Projects">
            <h1 className="text-center text-5xl font-bold text-red-light font-semibold">
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
