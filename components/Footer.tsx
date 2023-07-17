import styles from "../styles/Home.module.css";
import stylesFooter from "../styles/Footer.module.css";
import {
    AiFillInstagram,
    AiFillFacebook,
    AiFillLinkedin,
    AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={stylesFooter.OrgCopy}>
                    <p>Cogito NTNU © 2023</p>
                </div>
                <div className={stylesFooter.OrgNr}>
                    <p>Org.Nr. 920 628 788</p>
                </div>
            </div>

            <div className={stylesFooter.icons}>
                <a href="https://www.facebook.com/CogitoNTNU">
                    <AiFillFacebook
                        style={{
                            color: "white",
                            fontSize: "3.5rem",
                        }}
                        className={stylesFooter.ficons}
                    />
                </a>
                <a href="https://www.instagram.com/cogitontnu/">
                    <AiFillInstagram
                        style={{
                            color: "white",
                            fontSize: "3.5rem",
                        }}
                        className={stylesFooter.iicons}
                    />
                </a>
                <a href="https://www.linkedin.com/company/cogito-ntnu/">
                    <AiFillLinkedin
                        style={{
                            color: "white",
                            fontSize: "3.5rem",
                        }}
                        className={stylesFooter.licons}
                    />
                </a>
                <a href="https://github.com/CogitoNTNU">
                    <AiFillGithub
                        style={{
                            color: "white",
                            fontSize: "3.5rem",
                        }}
                        className={stylesFooter.gicons}
                    />
                </a>
            </div>
        </>
    );
};

export default Footer;
