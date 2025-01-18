"use client";

import Head from "next/head";
import HomeP1 from "../components/Home/HomeP1";
import HomeP2 from "../components/Home/HomeP2";
import HomeP3 from "../components/Home/HomeP3";

const Home = () => {
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // useEffect(() => {
  //     async function fetchData() {
  //         let i = 0;
  //         while (true) {
  //             try {
  //                 document
  //                     .getElementById("part-" + i)
  //                     .scrollIntoView({ behavior: "smooth" });
  //                 if (i < 2) {
  //                     i++;
  //                 } else {
  //                     i = 0;
  //                 }
  //             } catch (error) {
  //                 console.log("Error trying to scroll. Maybe changed page?");
  //             }

  //             await delay(10000);
  //         }
  //     }

  //     fetchData();
  // });

  return (
    <>
      <Head>
        <title>Hjem - Cogito NTNU</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="snap-y snap-mandatory h-[100vh] overflow-y-scroll bg-gray-darker">
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
