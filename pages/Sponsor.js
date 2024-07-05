import styles from "@/styles/Sponsor.module.css";
import Navbar from "@/components/navbar";
import Head from "next/head";
import SponsorData from "@/Data/Sponsor.json";
import SponsorCard from "@/components/SponsorCard";
import PopupBtn from "@/components/PopupButton";
import Footer from "@/components/Footer";
import Live from "@/components/live";

const Sponsor = () => {
  return (
    <>
      <Head>
        <title>Sponsors | Ignitia</title>
      </Head>
      <Navbar />
      <Live />
      <div className={styles.parentDiv}>
        <>
          <div className={styles.Section}>
            <div
              style={{ paddingTop: "90px" }}
              className={styles["section-title"]}
            >
              <h2>Sponsors</h2>
            </div>
            {SponsorData.map((Component) => {
              return <SponsorCard data={Component} id={Component.Title} />;
            })}
          </div>
        </>
      </div>
      <PopupBtn />
      <Footer />
    </>
  );
};

export default Sponsor;
