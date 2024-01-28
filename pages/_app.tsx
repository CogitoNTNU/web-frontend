"use client";

import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import "../styles/globals.css";

import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import React from "react";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const { pathname } = router;

  if (pathname == "/" || pathname.includes("/projects/")) {
    return (
      <>
        <Head>
          <link rel="icon" type="image/x-icon" href="/cogito_white.svg" />
        </Head>
        <Navbar />
        <div>
          <Component {...pageProps} />
        </div>
      </>
    );
  } else {
    const particlesInit = useCallback(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
      await console.log(container);
    }, []);

    return (
      <>
        <Head>
          <link rel="icon" type="image/x-icon" href="/cogito_white.svg" />
        </Head>

        <Navbar />
        <div>
          <Component {...pageProps} />
          <div id="bottom"></div>
        </div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </>
    );
  }
};

export default App;
