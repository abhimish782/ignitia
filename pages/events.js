import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/EventsPage.module.css";
import Navbar from "@/components/navbar";
import events from "@/Data/event.json";
import EventCard from "@/components/EventCard";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { CardViewer } from "@/components/CardViewer";
import AllowlockScroll from "@/components/AllowlockScroll";
import { data } from "jquery";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import PopupBtn from "@/components/PopupButton";
import Eventstyle from "@/styles/EventCard.module.css";
import Live from "@/components/live";

const inter = Inter({ subsets: ["latin"] });

export default function Event() {
  const [Data, setData] = useState(events);
  const [viewer, setViewer] = useState([]);
  const [Page, setPage] = useState(1);
  const [Limit, setLimit] = useState(8);

  const [block, allow] = AllowlockScroll();

  const prevPage = (elem) => {
    if (Page >= 2) {
      setPage(Page - 1);
    }
  };

  const nextPage = (elem) => {
    if (Math.ceil(Data.length / Limit) > Page) {
      setPage(Page + 1);
    }
  };

  const IndexOfLastPost = Page * Limit;
  const IndexOfFirtPost = IndexOfLastPost - Limit;
  const currentposts = Data.slice(IndexOfFirtPost, IndexOfLastPost);

  const removeclass = () => {
    const btns = document.querySelectorAll(".BtnEventCategory");
    for (var i = 0; i < btns.length; i++)
      btns[i].classList.remove("BtnEventCategoryActive");
  };

  const addclass = (elem) => {
    elem.classList.add("BtnEventCategoryActive");
  };

  const HandleDepartment = (elem) => {
    removeclass();
    addclass(elem.target);
    setData(DepartmentData);
  };

  const HandleInstitution = (elem) => {
    removeclass();
    addclass(elem.target);
    setData(InstitutionalData);
  };

  const HandleClub = (elem) => {
    removeclass();
    addclass(elem.target);
    setData(ClubData);
  };

  const HandleDetails = (data) => {
    setViewer(<CardViewer data={data} close={HandleClose} />);
    block();
  };

  const HandleClose = () => {
    setViewer([]);
    allow();
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
        <title>Events | Ignitia</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="./css/logosvg.css" />
      </Head>
      <Navbar />
      <div style={{ zIndex: 1000 }}>
        <MouseTrail {...trailProps} />
      </div>

      <PopupBtn />
      <Live />

      <div className={styles.wrapper}>
        <div className={styles.Title}>
          <h1>Events</h1>
        </div>

        <div className={styles.category}>
          <button onClick={prevPage} className="BtnEventCategory">
            Previous Page
          </button>
          <button className="BtnEventCategory">{Page}</button>
          <button onClick={nextPage} className="BtnEventCategory">
            Next Page
          </button>
        </div>

        <div id="BoxMain">
          <div className={styles.cardHolder}>
            
            
            <main className={Eventstyle.pageContent + " fadein"}>
              <div
                className={Eventstyle.card + " fadein"}
                style={{ backgroundImage: `url("/image/poster/E_Sports3.jpg")` }}
              >
                <div className={Eventstyle.content + " fadein"}>
                  <h2 className={Eventstyle.title + " fadein"}>
                    BGMI E-Sports Tournament
                  </h2>
                  <button
                    className={Eventstyle.btn + " fadein"}
                    onClick={() =>{window.open("https://forms.gle/BVUUTS3CE7KPL6YM8")}}
                  >
                    For PSIT
                  </button>
                  <button
                    className={Eventstyle.btn + " fadein"}
                    id="registerbutton"
                    onClick={()=>{window.open("https://forms.gle/G1oHbhKJNW5VsCSc8")}}
                  >
                    FOR Others
                  </button>
                </div>
              </div>
            </main>

            {currentposts.map((single) => {
              return (
                <EventCard
                  data={single}
                  key={single.id}
                  details={HandleDetails}
                />
              );
            })}
          </div>
        </div>
        {viewer}
      </div>
      <Footer />
    </>
  );
}
