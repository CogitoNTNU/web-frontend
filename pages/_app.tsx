"use client";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import "../styles/globals.css";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import PropTypes from "prop-types";
import { Engine } from "tsparticles-engine";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const { pathname } = router;

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

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
  }

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
};

// Prop type validation. Made the linting stop complaining.
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
