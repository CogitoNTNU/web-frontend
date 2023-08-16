import styles from "../styles/Apply.module.css";
import Footer from "../components/Footer";
import Head from "next/head";
import ProjectMarkable from "../components/ProjectMarkable";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CreatableSelect from "react-select/creatable";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Toggle from "react-toggle";

const Apply = () => {
    const [page, setPage] = useState(false);
    const [sent, setSent] = useState(false);
    const [value, setValue] = useState<readonly Option[]>([]);
    const [falseValue, setFalseValue] = useState(false);
    const [projects, setProjets] = useState([]);
    const [surname, setSurname] = useState("");
    const [falseSurname, setFalseSurname] = useState(false);
    const [lastname, setLastname] = useState("");
    const [falseLastname, setFalseLastname] = useState(false);
    const [email, setEmail] = useState("");
    const [falseEmail, setFalseEmail] = useState(false);
    const [phone, setPhone] = useState("");
    const [falsePhone, setFalsePhone] = useState(false);
    const [error, setError] = useState(false);
    const [nextPage, setNextPage] = useState(false);
    const [photoOK, setPhotoOK] = useState(true);
    const [study, setStudy] = useState("");
    const [studyYear, setStudyYear] = useState("");
    const [falseStudy, setFalseStudy] = useState(false);
    const [studentID, setStudentID] = useState("");
    const [falseStudentID, setFalseStudentID] = useState(false);
    const [studentEM, setStudentEM] = useState("");
    const [falseStudentEM, setFalseStudentEM] = useState(false);
    const [about1, setAbout1] = useState("");
    const [about2, setAbout2] = useState("");
    const [about3, setAbout3] = useState("");
    const [falseAbout, setFalseAbout] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const components = {
        DropdownIndicator: null,
    };

    interface Option {
        label: string;
        value: string;
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

    const togglePhotoOK = () => {
        setPhotoOK(!photoOK);
    };

    const getData = async () => {
        let rest_url = "/projects/all_new_projects/";
        const projectsResponse = await fetch(
            "https://cogito-backend.net" + rest_url
        );
        const projectsData = await projectsResponse.json();
        setProjets(projectsData);
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const validatePhone = (phone) => {
        var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{3})$/;
        return regex.test(phone);
    };

    const resetForm = () => {
        setFalseSurname(false);
        setFalseLastname(false);
        setFalseEmail(false);
        setFalseValue(false);
        setFalsePhone(false);
        setError(false);
    };

    const resetSecondForm = () => {
        setFalseStudy(false);
        setFalseStudentID(false);
        setFalseStudentEM(false);
        setFalseAbout(false);
    };

    const checkFormFields = (surname, lastname, email, phone, projects) => {
        resetForm();
        const errors = [];

        if (surname == "") {
            setFalseSurname(true);
            errors.push("");
        }

        if (lastname == "") {
            setFalseLastname(true);
            errors.push("");
        }

        if (!validateEmail(email)) {
            setFalseEmail(true);
            errors.push("");
        }

        if (projects.length !== 3) {
            setFalseValue(true);
            errors.push("");
        }

        if (!validatePhone(phone)) {
            setFalsePhone(true);
            errors.push("");
        }

        if (errors.length == 0) {
            setNextPage(true);
        }
    };

    const checkSecondFormFields = (
        study,
        studyYear,
        studentID,
        studentEM,
        about1,
        about2,
        about3
    ) => {
        resetSecondForm();
        const errors = [];

        if (study == "" || studyYear == "") {
            setFalseStudy(true);
            errors.push("");
        }

        if (about1 == "" || about2 == "" || about3 == "") {
            setFalseAbout(true);
            errors.push("");
        }

        if (errors.length == 0) {
            return true;
        }

        return false;
    };

    const sendForm = async (
        surname,
        lastname,
        email,
        phone,
        projects,
        study,
        studyYear,
        studentID,
        studentEM,
        about1,
        about2,
        about3,
        photo
    ) => {
        if (
            !checkSecondFormFields(
                study,
                studyYear,
                studentID,
                studentEM,
                about1,
                about2,
                about3
            )
        ) {
            return;
        }
        setNextPage(false);
        try {
            await fetch(
                "https://docs.google.com/forms/d/e/1FAIpQLSduLNlEqKEDF25Nyjf2WtyPKp5SniyT3SvN1rvMZMDMZyUKGQ/formResponse?" +
                    new URLSearchParams({
                        "entry.1488574276": surname,
                        "entry.1925221388": lastname,
                        "entry.877101926": phone,
                        "entry.1747975445": study,
                        "entry.17385882": studyYear,
                        "entry.1569032832": about1,
                        "entry.1096059890": about2,
                        "entry.609878434": about3,
                        "entry.1184993896": projects[0].value,
                        "entry.307282896": projects[1].value,
                        "entry.1565910335": projects[2].value,
                        "entry.875921033": photo,
                        "entry.1371474035": studentID,
                        "entry.84615272": studentEM,
                        emailAddress: email,
                    }),
                {
                    mode: "no-cors",
                }
            );
            setSent(true);
        } catch (e) {
            setError(true);
            console.log(e);
        }
    };

    return (
        <>
            <Head>
                <title>Cogito NTNU - Meld deg på</title>
            </Head>
            <div className={styles.main}>
                <div className={styles.backgroundColor}></div>
                <motion.button
                    className={styles.projectButton}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        zIndex: page ? "1" : "2",
                        backgroundColor: page ? "#DFE4EA" : "white",
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.0],
                    }}
                    onClick={() => setPage(false)}
                >
                    <p className={styles.buttonTabText}>Prosjekter</p>
                </motion.button>
                <motion.button
                    className={styles.vervButton}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        zIndex: page ? "2" : "1",
                        backgroundColor: page ? "white" : "#DFE4EA",
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.0],
                    }}
                    disabled
                    onClick={() => setPage(true)}
                >
                    <p className={styles.buttonTabText}>Verv</p>
                </motion.button>
                <motion.div
                    className={styles.projectCard}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.0],
                    }}
                >
                    <div
                        className={styles.sentText}
                        style={{ display: sent ? "block" : "none" }}
                    >
                        <p>
                            Søknaden har blitt sendt! <br />
                            Du hører fra oss om ikke så lenge.
                        </p>
                    </div>
                    <div style={{ display: nextPage ? "" : "none" }}>
                        <div className={styles.projectTitle}>
                            <p>Prosjektsøknad - Høst 2023</p>
                        </div>
                        <div className={styles.projectInputCard}>
                            <div className={styles.projectStudyAndYear}>
                                <p style={{ color: falseStudy ? "red" : "" }}>
                                    Studie og Årstrinn{" "}
                                    <a
                                        style={{
                                            display: falseStudy ? "" : "none",
                                        }}
                                    >
                                        *
                                    </a>
                                </p>
                                <p
                                    className={styles.showOldAboutText}
                                    style={{ color: falseAbout ? "red" : "" }}
                                >
                                    Litt om deg selv{" "}
                                    <a
                                        style={{
                                            display: falseAbout ? "" : "none",
                                        }}
                                    >
                                        *
                                    </a>
                                </p>
                            </div>

                            <input
                                className={styles.inputStudy}
                                type="text"
                                placeholder="Datateknologi, Fysmat, Kybe..."
                                onChange={(event) =>
                                    setStudy(event.target.value)
                                }
                            />
                            <input
                                className={styles.inputStudyYear}
                                type="text"
                                placeholder="X.år"
                                onChange={(event) =>
                                    setStudyYear(event.target.value)
                                }
                            />

                            <textarea
                                className={styles.textArea}
                                placeholder="Hva slags erfaring har du med AI og programmering fra før?"
                                onChange={(event) =>
                                    setAbout1(event.target.value)
                                }
                            />

                            <textarea
                                className={styles.textArea1}
                                placeholder="Hvordan hørte du om Cogito NTNU?"
                                onChange={(event) =>
                                    setAbout2(event.target.value)
                                }
                            />
                            <textarea
                                className={styles.textArea2}
                                placeholder="Hvorfor ønsker du å søke hos oss i Cogito NTNU?"
                                onChange={(event) =>
                                    setAbout3(event.target.value)
                                }
                            />
                            <div className={styles.projectNumbers}>
                                <p
                                    style={{
                                        color: falseStudentID ? "red" : "",
                                    }}
                                >
                                    Studentkortnummer{" "}
                                    <a
                                        style={{
                                            display: falseStudentID
                                                ? ""
                                                : "none",
                                        }}
                                    >
                                        *
                                    </a>
                                </p>
                                <p
                                    style={{
                                        color: falseStudentEM ? "red" : "",
                                    }}
                                >
                                    EM-nummer (Bare siffer){" "}
                                    <a
                                        style={{
                                            display: falseStudentEM
                                                ? ""
                                                : "none",
                                        }}
                                    >
                                        *
                                    </a>
                                </p>
                            </div>
                            <input
                                className={styles.inputStudentID}
                                type="text"
                                placeholder="XXXXXX"
                                onChange={(event) =>
                                    setStudentID(event.target.value)
                                }
                            />
                            <input
                                className={styles.inputStudentEM}
                                type="text"
                                placeholder="XXXXXXXXXX"
                                onChange={(event) =>
                                    setStudentEM(event.target.value)
                                }
                            />

                            <div className={styles.projectChosen}>
                                <p style={{ color: falseValue ? "red" : "" }}>
                                    Valgte Prosjekter{" "}
                                    <a
                                        style={{
                                            display: falseValue ? "" : "none",
                                        }}
                                    >
                                        *
                                    </a>
                                </p>
                            </div>
                            <div className={styles.selectorPosition}>
                                <CreatableSelect
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderStyle: state.isFocused
                                                ? "none"
                                                : "none",
                                            height: "10vh",
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
                                            backgroundColor: "#ff6b81",
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
                            <div className={styles.projectPhone}>
                                <p style={{ color: falsePhone ? "red" : "" }}>
                                    Fototillatelse{" "}
                                    <a
                                        style={{
                                            display: falsePhone ? "" : "none",
                                        }}
                                    >
                                        *
                                    </a>
                                </p>
                            </div>
                            <div className={styles.toggle}>
                                <Toggle
                                    className={styles}
                                    defaultChecked={photoOK}
                                    onChange={() => togglePhotoOK()}
                                />
                            </div>
                        </div>
                        <div className={styles.applyButton}>
                            <button
                                className={styles.backButton}
                                type="button"
                                disabled={false}
                                style={{ display: nextPage ? "" : "none" }}
                                onClick={() => setNextPage(false)}
                            >
                                <p className={styles.buttonText}>
                                    <AiOutlineArrowLeft
                                        style={{ fontSize: "1rem" }}
                                    />
                                </p>
                            </button>
                            <button
                                className={styles.button}
                                type="button"
                                disabled={false}
                                style={{ display: nextPage ? "" : "none" }}
                                onClick={() =>
                                    sendForm(
                                        surname,
                                        lastname,
                                        email,
                                        phone,
                                        value,
                                        study,
                                        studyYear,
                                        studentID,
                                        studentEM,
                                        about1,
                                        about2,
                                        about3,
                                        photoOK
                                    )
                                }
                            >
                                <p className={styles.buttonText}>Søk opptak</p>
                            </button>
                        </div>
                    </div>

                    <div
                        style={{
                            display: nextPage || sent ? "none" : "",
                        }}
                    >
                        <div className={styles.projectTitle}>
                            <p>Prosjektsøknad - Høst 2023</p>
                        </div>

                        <div className={styles.projectInputCard}>
                            <div className={styles.projectFirstName}>
                                <p style={{ color: falseSurname ? "red" : "" }}>
                                    Fornavn{" "}
                                    <a
                                        style={{
                                            display: falseSurname ? "" : "none",
                                        }}
                                    >
                                        *
                                    </a>
                                </p>
                                <p
                                    style={{
                                        color: falseLastname ? "red" : "",
                                    }}
                                >
                                    Etternavn{" "}
                                    <a
                                        style={{
                                            display: falseLastname
                                                ? ""
                                                : "none",
                                        }}
                                    >
                                        *
                                    </a>
                                </p>
                            </div>
                            <input
                                className={styles.inputFirstName}
                                type="text"
                                placeholder="Cogitron"
                                onChange={(event) =>
                                    setSurname(event.target.value)
                                }
                            />
                            <input
                                className={styles.inputLastName}
                                type="text"
                                placeholder="Cogito"
                                onChange={(event) =>
                                    setLastname(event.target.value)
                                }
                            />
                            <div className={styles.projectEmail}>
                                <p style={{ color: falseEmail ? "red" : "" }}>
                                    Student Epostaddresse{" "}
                                    <a
                                        style={{
                                            display: falseEmail ? "" : "none",
                                        }}
                                    >
                                        *
                                    </a>
                                </p>
                            </div>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="cogitron@stud.ntnu.no"
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                            <div className={styles.projectPhone}>
                                <p style={{ color: falsePhone ? "red" : "" }}>
                                    Telefonnummer{" "}
                                    <a
                                        style={{
                                            display: falsePhone ? "" : "none",
                                        }}
                                    >
                                        *
                                    </a>
                                </p>
                            </div>
                            <input
                                className={styles.input}
                                placeholder="XXX XX XXX"
                                onChange={(event) =>
                                    setPhone(event.target.value)
                                }
                            />
                            <div className={styles.projectChosen}>
                                <p style={{ color: falseValue ? "red" : "" }}>
                                    Valgte Prosjekter{" "}
                                    <a
                                        style={{
                                            display: falseValue ? "" : "none",
                                        }}
                                    >
                                        *
                                    </a>
                                </p>
                            </div>

                            <div className={styles.projectsText}>
                                <p>
                                    Velg 3 mulige prosjekter{" "}
                                    <a style={{ fontSize: "14px" }}>
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
                                <button
                                    className={styles.nextButton}
                                    type="button"
                                    disabled={false}
                                    style={{ display: nextPage ? "none" : "" }}
                                    onClick={() => {
                                        checkFormFields(
                                            surname,
                                            lastname,
                                            email,
                                            phone,
                                            value
                                        );
                                    }}
                                >
                                    <p className={styles.buttonText}>Neste</p>
                                </button>
                            </div>
                            <div
                                className={styles.errorText}
                                style={{ display: error ? "" : "none" }}
                            >
                                <p>
                                    Google Forms Error... <br /> Try again later
                                </p>
                            </div>
                            <div className={styles.selectorPosition}>
                                <CreatableSelect
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderStyle: state.isFocused
                                                ? "none"
                                                : "none",
                                            height: "8vh",
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
                                            backgroundColor: "#ff6b81",
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
                </motion.div>

                <motion.div
                    className={styles.footer}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.0],
                    }}
                >
                    <Footer />
                </motion.div>
            </div>
        </>
    );
};

export default Apply;
