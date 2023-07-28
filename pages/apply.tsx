import styles from "../styles/Apply.module.css";
import Footer from "../components/Footer";
import ProjectMarkable from "../components/ProjectMarkable";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CreatableSelect from "react-select/creatable";

const Apply = () => {
    const [projects, setProjets] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const components = {
        DropdownIndicator: null,
    };

    interface Option {
        readonly label: string;
        readonly value: string;
    }

    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const removeOption = (value) => {
        setValue((current) =>
            current.filter((option) => option.value != value)
        );
    };

    const getData = async () => {
        let rest_url = "/projects/all_new_projects/";
        const projectsResponse = await fetch(
            "http://127.0.0.1:8000/" + rest_url
        );
        const projectsData = await projectsResponse.json();
        setProjets(projectsData);
    };

    const [value, setValue] = useState<readonly Option[]>([]);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.projectCard}>
                    <div className={styles.projectTitle}>
                        <p>Prosjektsøknad - Høst 2023</p>
                    </div>

                    <div className={styles.projectInputCard}>
                        <div className={styles.projectPersonalInfoText}>
                            <p>Personlig Informasjon</p>
                        </div>
                        <hr className={styles.line} />
                        <div className={styles.projectFirstName}>
                            <p>Fornavn</p>
                        </div>
                        <div className={styles.projectLastName}>
                            <p>Etternavn</p>
                        </div>
                        <div className={styles.projectEmail}>
                            <p>Epost Adresse</p>
                        </div>
                        <div className={styles.projectChosen}>
                            <p>Valgte Prosjekter</p>
                        </div>
                        <input
                            className={styles.input}
                            style={{ width: "24vh", top: "7vh", left: "3vh" }}
                            type="text"
                        />
                        <input
                            className={styles.input}
                            style={{ width: "24vh", top: "7vh", left: "5vh" }}
                            type="text"
                        />
                        <input
                            className={styles.input}
                            style={{
                                width: "50vh",
                                top: "18vh",
                                right: "45vh",
                            }}
                            type="text"
                        />
                        <div className={styles.projectsText}>
                            <p>
                                Velg ønskede prosjekter{" "}
                                <a style={{ fontSize: "18px" }}>
                                    (Prioritert i rekkefølge)
                                </a>
                            </p>
                        </div>
                        <div className={styles.projects}>
                            {projects.map((project) => (
                                <ProjectMarkable
                                    title={project.title}
                                    desc={project.desc}
                                    image={project.image}
                                    key={project.title}
                                    setValue={() =>
                                        setValue((prev) => [
                                            ...prev,
                                            createOption(project.title),
                                        ])
                                    }
                                    removeValue={() =>
                                        removeOption(project.title)
                                    }
                                />
                            ))}
                        </div>
                        <div className={styles.applyButton}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={styles.button}
                            >
                                <p className={styles.buttonText}>Søk opptak</p>
                            </motion.button>
                        </div>
                        <div className={styles.selectorPosition}>
                            <CreatableSelect
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        borderStyle: state.isFocused
                                            ? "none"
                                            : "none",
                                        height: "7vh",
                                        backgroundColor: "#F1F2F6",
                                        borderRadius: "10px",
                                        filter: "drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.8))",
                                    }),
                                    multiValueRemove: (baseStyles) => ({
                                        ...baseStyles,
                                        display: "none",
                                    }),
                                    multiValueLabel: (baseStyles) => ({
                                        ...baseStyles,
                                        paddingRight: "1vh",
                                        fontSize: "16px",
                                        fontWeight: "700",
                                        color: "white",
                                        backgroundColor: "#FF6348",
                                        filter: "drop-shadow(2px 2px 0px black)",
                                    }),
                                }}
                                components={components}
                                isClearable={false}
                                isMulti
                                isDisabled={true}
                                onChange={(newValue) => setValue(newValue)}
                                menuIsOpen={false}
                                placeholder="Trykk på et av prosjektene..."
                                value={value}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </>
    );
};

export default Apply;
