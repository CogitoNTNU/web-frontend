import Field from "../../components/Fields/Field";
import ProjectFooter from "../../components/Footer/ProjectFooter";
import { useState } from "react";
import ReactLoading from "react-loading";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

// Images

const NEATtactics = () => {
  return (
    <>
      <Head>
        <title>NEATtactics - Cogito NTNU</title>
      </Head>
      <div className="bg-black-default h-full overflow-hidden">
        <main className="h-fit">
          <h1> NEATtactics</h1>
          <img
            src="https://github.com/CogitoNTNU/NEATactics/blob/main/docs/images/mario-clears-first-level.gif"
            alt="NEATtactics Loading..."
          />
        </main>
        <div className="h-full relative bottom-0">
          <ProjectFooter
            name="NEATtactics"
            description="Evolving a neural network using NeuroEvolution of Augmenting Topologies (NEAT) to master any game. 
            Allowing an AI agent to learn and improve its gameplay strategies over time, 
            starting from scratch and evolving through generations."
            LogoName="NEATtacticsLogo.png"
            githubUrl="https://github.com/CogitoNTNU/NEATactics"
          />
        </div>
      </div>
    </>
  );
};

export default NEATtactics;
