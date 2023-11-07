import styles from "../../styles/Footer.module.css";
import {
    AiFillInstagram,
    AiFillFacebook,
    AiFillLinkedin,
    AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <div className={styles.OrgCopy}>
                    <p>Cogito NTNU © 2023</p>
                </div>
                <div className={styles.OrgNr}>
                    <p>Org.Nr. 920 628 788</p>
                </div>
            </div>

            <div className={styles.icons}>
                <a href="https://www.facebook.com/CogitoNTNU">
                    <AiFillFacebook className={styles.ficons} />
                </a>
                <a href="https://www.instagram.com/cogitontnu/">
                    <AiFillInstagram className={styles.iicons} />
                </a>
                <a href="https://www.linkedin.com/company/cogito-ntnu/">
                    <AiFillLinkedin className={styles.licons} />
                </a>
                <a href="https://github.com/CogitoNTNU">
                    <AiFillGithub className={styles.gicons} />
                </a>
            </div>
        </div>
    );
};

export default Footer;
