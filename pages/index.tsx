"use client";

import Head from "next/head";
import HomeP1 from "../components/Home/HomeP1";
import HomeP2 from "../components/Home/HomeP2";
import HomeP3 from "../components/Home/HomeP3";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Hjem - Cogito NTNU</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Cogito NTNU er en teknisk studentorganisasjon for kunstig intelligens ved NTNU Trondheim. Bli med på AI-prosjekter og lær praktisk maskinlæring."
        />
        <meta property="og:title" content="Hjem - Cogito NTNU" />
        <meta
          property="og:description"
          content="Cogito NTNU er en teknisk studentorganisasjon for kunstig intelligens ved NTNU Trondheim."
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar page="home" />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll bg-gray-darker">
        <section id="part-0">
          <HomeP1 />
        </section>
        <section id="part-1">
          <HomeP2 />
        </section>
        <section id="part-2">
          <HomeP3 />
        </section>
      </div>
    </>
  );
};

export default Home;
