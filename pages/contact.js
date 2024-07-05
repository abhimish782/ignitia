import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/ContactUs.module.css";
import Navbar from "@/components/navbar";
import CommitteeData from "@/Data/committee.json";
import ProfileCard from "@/components/ProfileCard";
import { useEffect, useRef, useState } from "react";
import ContactForm from "@/components/ContactForm";
import Script from "next/script";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import PopupBtn from "@/components/PopupButton";
import Developers from "@/components/Developers";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail"
import Live from "@/components/live";

const inter = Inter({ subsets: ["latin"] });

export default function ContactUs() {
  const [Data, setData] = useState([]);
  const [Component, setComponent] = useState(<ContactForm />);
  const [developersVisiblity, setDevelopersVisiblity] = useState("none");

  const removeclass = () => {
    const btns = document.querySelectorAll(".BtnEventCategory");
    for (var i = 0; i < btns.length; i++)
      btns[i].classList.remove("BtnEventCategoryActive");
  };

  const addclass = (elem) => {
    elem.classList.add("BtnEventCategoryActive");
  };

  const HandleContactForm = (elem) => {
    removeclass();
    addclass(elem.target);
    setData([]);
    setComponent(<ContactForm />);
  };

  const HandleCommittee = (elem) => {
    removeclass();
    addclass(elem.target);
    setComponent([]);
    setData(CommitteeData);
  };

  const HandleDevelopers = (elem) => {
    removeclass();
    addclass(elem.target);
    setData([]);
    setComponent(<Developers />);
    setDevelopersVisiblity("");
  };

  const trailProps = {
    lineDuration: 15,
    lineWidthStart: 10,
    strokeColor: "#EBB935",
    lag: 0,
  };

  return (
    <>
      <Head>
        <title>Contact | Ignitia</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="./css/logosvg.css" />
      </Head>
      <Navbar />
      <Live />

      <div style={{ zIndex: 1000 }}>
        <MouseTrail {...trailProps} />
      </div>

      <div className={styles.wrapper}>
        <div className={"DivCenter" + " " + styles.Title}>
          <h1>Contact Us</h1>
        </div>

        <div className={styles.category}>
          <button
            onClick={HandleContactForm}
            className="BtnEventCategory BtnEventCategoryActive"
          >
            Contact Us
          </button>
          <button onClick={HandleCommittee} className="BtnEventCategory">
            Committee
          </button>
          <button onClick={HandleDevelopers} className="BtnEventCategory">
            Developers
          </button>
        </div>
      </div>

      <div className={styles.cardholder}>
        {Data.map((single) => {
          return <ProfileCard data={single} key={single.Id} />;
        })}

        {Component}
      </div>
      
      <PopupBtn />
      <Footer />
    </>
  );
}
