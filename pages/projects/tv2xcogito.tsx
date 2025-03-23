import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/MarketingAIFooter";

import TV2xCogitoLogo from "../../public/Projects/TV2xCogito/TV2xCogito.png";

const Tv2xCogito = () => {
  return (
    <>
      <Head>
        <title>TV2 x Cogito - Cogito NTNU</title>
      </Head>
      <div className="bg-black-default min-h-screen">
        {/* -------------- HEADER -------------- */}
        <header className="tablet:h-[480px] h-[300px] w-full bg-red-default overflow-hidden relative">
          {/* Logo & Title */}
          <div className="flex justify-start items-center w-full h-full tablet:px-[6%] px-[2%] relative tablet:-bottom-20 -bottom-20">
            <Image
              className="pt-2 tablet:w-[280px] phone:w-[180px] w-[120px] relative z-[100]"
              src={TV2xCogitoLogo}
              alt="TV2 x Cogito Logo"
              draggable={false}
            />
            <div className="text-white drop-shadow-2xl z-[100]">
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0, 0.71, 0.2, 1.0],
                }}
                className="tablet:w-[500px] text-gray-default font-semibold tablet:text-4xl tablet:tracking-[4px] phone:text-xl phone:block hidden text-[18px]"
              >
                TV2 x Cogito
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0, 0.71, 0.2, 1.0],
                }}
                className="absolute tablet:w-[500px] font-semibold tablet:text-4xl tablet:tracking-[4px] phone:text-xl phone:block hidden text-[18px] -top-[3px] -left-[3px]"
              >
                TV2 x Cogito
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0, 0.71, 0.2, 1.0],
                }}
                className="font-regular tablet:text-2xl phone:block hidden text-[11px]"
              >
                AI-driven article performance analysis
              </motion.p>
            </div>
          </div>
        </header>

        {/* -------------- MAIN CONTENT -------------- */}
        <main className="h-fit w-full text-white px-[6%] py-[4%]">
          <div className="flex flex-col max-w-[1000px] mx-auto gap-6">
            <h1 className="tablet:text-3xl text-2xl font-semibold">
              About the Project
            </h1>
            <p className="leading-7">
              <strong>TV2 x Cogito</strong> is a collaboration between TV2 and
              Cogito NTNU where nine developers worked on building an AI model
              that predicts an article’s performance on TV2.no. This model
              provides a predictive score, offering insights on key business
              insights before publication.
            </p>
            <p className="leading-7">
              The project aims to assist TV2’s editorial teams in making
              data-driven decisions by leveraging large amounts of article and
              reader-behavior data. We’d like to thank TV2 for the opportunity
              to work on this exciting project and for their support throughout
              the process.
            </p>
            <p className="leading-7">
              Our team embarked on a{" "}
              <strong>comprehensive exploratory data analysis (EDA)</strong> to
              understand TV2’s historical article data. We began by cleaning,
              filtering, and aggregating records, ensuring a consistent dataset
              ready for advanced modeling. Given the volume of data, we
              parallelized the feature engineering pipeline to drastically
              reduce data-preparation time.
            </p>
            <p className="leading-7">
              During our EDA, we delved into the textual features of each
              article. To capture these nuances, we leveraged pre-trained
              language models from <strong>Hugging Face</strong>, which helped
              us extract deep semantic embeddings. These embeddings were further
              enhanced through extensive <strong>feature engineering</strong>,
              where we computed sentiment scores, keyword densities, and
              similarity metrics, and much much much more.
            </p>
            <p className="leading-7">
              On the modeling side, we experimented with a wide array of
              algorithms—including{" "}
              <strong>Random Forest, XGBoost, CatBoost</strong>, among others.
              We applied rigorous <strong>k-fold cross-validation</strong> to
              evaluate model performance and conducted extensive{" "}
              <strong>hyperparameter tuning</strong> to maximize accuracy. Our
              iterative approach involved testing multiple model types and
              refining our feature-engineering pipelines with domain-specific
              transformations and advanced statistical metrics.
            </p>
            <p className="leading-7">
              We were fortunate to receive invaluable support from TV2.{" "}
              <strong>Chris Ronald Hermansen</strong>, a seasoned journalist,
              and <strong>Lubos Steskal</strong>, a senior data scientist, flew
              over to Trondheim to collaborate with us several times. Their
              expertise not only provided deep domain insights but also sparked
              innovative ideas for feature engineering that significantly
              enhanced our model’s predictive power.
            </p>
            <p className="leading-7">
              To ensure our solution was both scalable and user-friendly, the
              team developed a{" "}
              <strong>dockerized web server and user interface</strong>. This
              platform allows the model to perform inference on new articles in
              real time. Additionally, we incorporated advanced visualization
              techniques—using PCA and t-SNE—to map articles in an embedding
              space. This 2D projection makes it easy for editors to see which
              existing articles are similar to a new piece, providing an
              intuitive visual tool for content comparison.
            </p>
            <p className="leading-7">
              By combining large-scale data processing, state-of-the-art NLP
              models, and robust experimentation, we built a platform that not
              only predicts article performance but also empowers TV2 with
              deeper insights into their content. The final product spans data
              ingestion, advanced analytics, and user-friendly
              visualizations—paving the way for truly data-driven editorial
              decisions.
            </p>
            <p className="leading-7">
              The project was a great success, and we are proud of the
              collaboration between TV2 and Cogito NTNU. We look forward to
              continue working with TV2 and see what the future holds for this
              exciting project.
            </p>
            {/* TEAM SECTION */}
            <h2 className="tablet:text-2xl text-xl font-semibold mt-4">Team</h2>
            <p className="leading-7">
              This project was led by <strong>Afraz Mansoor</strong> in
              collaboration with <strong>Kristoffer Nohr Olaisen</strong>.
            </p>
            <p className="leading-7">
              Below are the contributors from Cogito NTNU who have put in
              countless hours:
            </p>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-white text-center mt-4">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">GitHub</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-white px-4 py-2">
                      Alice Zheng
                    </td>
                    <td className="border border-white px-4 py-2">
                      <a
                        className="underline text-blue-300"
                        href="https://github.com/A1ice-Z"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/A1ice-Z
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white px-4 py-2">
                      Afraz Mansoor
                    </td>
                    <td className="border border-white px-4 py-2">
                      <a
                        className="underline text-blue-300"
                        href="https://github.com/Afrasum"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/Afrasum
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white px-4 py-2">
                      Olivia Tan
                    </td>
                    <td className="border border-white px-4 py-2">
                      <a
                        className="underline text-blue-300"
                        href="https://github.com/heiolivia"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/heiolivia
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white px-4 py-2">
                      Håvard Fossdal
                    </td>
                    <td className="border border-white px-4 py-2">
                      <a
                        className="underline text-blue-300"
                        href="https://github.com/HFossdal"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/HFossdal
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white px-4 py-2">
                      Folke Jernbert
                    </td>
                    <td className="border border-white px-4 py-2">
                      <a
                        className="underline text-blue-300"
                        href="https://github.com/jernbert"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/jernbert
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white px-4 py-2">
                      Kristoffer Nohr Olaisen
                    </td>
                    <td className="border border-white px-4 py-2">
                      <a
                        className="underline text-blue-300"
                        href="https://github.com/Knolaisen"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/Knolaisen
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white px-4 py-2">
                      Maia Austigard
                    </td>
                    <td className="border border-white px-4 py-2">
                      <a
                        className="underline text-blue-300"
                        href="https://github.com/maiahi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/maiahi
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white px-4 py-2">
                      Sanne Jamila Olsen
                    </td>
                    <td className="border border-white px-4 py-2">
                      <a
                        className="underline text-blue-300"
                        href="https://github.com/sannejamila"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/sannejamila
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white px-4 py-2">
                      Serina Serife Erzengin
                    </td>
                    <td className="border border-white px-4 py-2">
                      <a
                        className="underline text-blue-300"
                        href="https://github.com/serinaerzengin"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/serinaerzengin
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="leading-7 mt-4">
              We appreciate everyone’s hard work and hope that this tool
              continues to evolve and support TV2’s editorial efforts in the
              future.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Tv2xCogito;
