import AllowlockScroll from "./AllowlockScroll";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Teaser from "./Teaser";
import liveData from "@/Data/live.json";

const Live = () => {
  const [liveFrame, setLiveFrame] = useState([]);
  const [blockScroll, allowScroll] = AllowlockScroll();

  const handleLive = () => {
    blockScroll();
    setLiveFrame(<Teaser Close={CloseBtn} Url={liveData.Url} />);
  };

  const CloseBtn = () => {
    allowScroll();
    setLiveFrame([]);
  };

  if (liveData.Url.length <= 1) {
    return <></>;
  }

  return (
    <>
      <div className={styles.liveBtn} onClick={handleLive}>
        <img src="/img/live_nbg.gif" />
      </div>
      {liveFrame}
    </>
  );
};

export default Live;
