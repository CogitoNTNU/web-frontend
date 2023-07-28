import styles from "../styles/Loading.module.css";
import CogitoLogo from "../public/cogito_white.svg";
import Image from "next/image";

const Loading = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.imagePos}>
                    <Image
                        draggable={false}
                        src={CogitoLogo}
                        height="90"
                        width="80"
                        alt="CogitoLogo"
                    />
                </div>

                <h1 className={styles.loading}>Loading Page</h1>
            </div>
        </>
    );
};

export default Loading;
