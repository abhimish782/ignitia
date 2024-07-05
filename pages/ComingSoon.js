import Navbar from "@/components/navbar";
import Head from "next/head";
import styles from "@/styles/ComingSoon.module.css"
import Footer from "@/components/Footer";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail"

const CommingSoon = () => {
    const trailProps = {
        lineDuration: 15,
        lineWidthStart: 10,
        strokeColor: "#EBB935",
        lag: 0,
    };

    return (
        <>
            <Head>

            </Head>
            <Navbar />
            <div style={{ zIndex: 1000 }}>
                <MouseTrail {...trailProps} />
            </div>

            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <h1>
                        Coming Soon . . .
                    </h1>
                </div>
            </div>
            <Footer />
        </>
    )
};
export default CommingSoon;