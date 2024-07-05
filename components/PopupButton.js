import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import EsportsTrailer from "@/components/EsportsTrailer";
import Teaser from "@/components/Teaser";
import MapPsit from "./MapPsit";
import AllowlockScroll from "./AllowlockScroll";

const PopupBtn = (prop) => {
  const [open, setOpen] = useState(false);
  const [Render, setRender] = useState([]);
  const [blockScroll,allowScroll] = AllowlockScroll();

  useEffect(() => {
    if (!window.$ClosedOnce) {
      setTimeout(() => {
        OpenBtn();
        setOpen(true);
      }, 1000);
    }
  },[]);

  const handlePopup = (element) => {
    if (!open) {
      OpenBtn();
    } else {
      CloseBtn();
    }
  };

  const OpenBtn = () => {
    if (!open) {
      const OpenCloseBtn = document.getElementById("OpenCloseBtn");
      OpenCloseBtn.classList.add(styles.popupBtnOpen);
      const popup = document.getElementById("popup");
      const child = popup.children;
      child[0].classList.add(styles.esports);
      child[1].classList.add(styles.trailer);
      child[2].classList.add(styles.map);
      setOpen(true);
      window.$ClosedOnce = false;
    }
  };

  const CloseBtn = () => {
    if (open) {
      const OpenCloseBtn = document.getElementById("OpenCloseBtn");
      OpenCloseBtn.classList.remove(styles.popupBtnOpen);
      const popup = document.getElementById("popup");
      const child = popup.children;
      child[0].classList.remove(styles.esports);
      child[1].classList.remove(styles.trailer);
      child[2].classList.remove(styles.map);
      setOpen(false);
      window.$ClosedOnce = true;
    }
  };

  const handleEsports = () => {
    setRender(<EsportsTrailer Close={handleRender} />);
    blockScroll();
    CloseBtn();
  };

  const handleTrailer = () => {
    setRender(<Teaser Close={handleRender} Url={"https://www.youtube-nocookie.com/embed/jJWd26GYqKs"} />);
    CloseBtn();
    blockScroll();
  };

  const handleMap = () => {
    setRender(<MapPsit Close={handleRender} />);
    CloseBtn();
    blockScroll();
  };

  const handleRender = () => {
    allowScroll();
    setRender([]);
  };

  return (
    <>
      <div className={styles.popup} id={"popup"}>
        {Render}

        <div className={styles.popupChild} onClick={handleEsports} >
          <img src="/img/BGMI.png" />
        </div>

        <div className={styles.popupChild} onClick={handleTrailer}>
          <img src="/img/clapper.png" />
        </div>

        <div className={styles.popupChild} onClick={handleMap}>
          <img src="/img/Pin.png" />
        </div>

        <div
          className={styles.popupChild + " " + styles.popupBtn}
          onClick={handlePopup}
          id={"OpenCloseBtn"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default PopupBtn;
