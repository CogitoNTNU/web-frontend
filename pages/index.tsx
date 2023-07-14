import Head from "next/head";
import Navbar from "../components/Navbar";
import HomeP1 from "../components/HomeP1";

const Home = () => {
    return (
        <>
            <Head>
                <title>Cogito NTNU</title>
                <link rel="icon" type="image/x-icon" href="/cogito_white.svg" />
            </Head>
            <div>
                <Navbar />
                <HomeP1 />
            </div>
        </>
    );
};

export default Home;
