import styles from "@/styles/CardDetails.module.css";
import Image from "next/image";

export const CardViewer = (props) => {
  return (
    <div className={styles.parent + " fadein"} onClick={props.close}>
      <div className={styles.wrapper}>
        <button onClick={props.close}></button>

        <div className={styles.image}>
          <img src={props.data.Url} width={1000} height={1000} alt={"img"} />
        </div>
        <div className={styles.desc} id="cardviewer">
          <div className={styles.details}>
            <div><span>Event Name : </span> {props.data.EventName}</div>
            <br />
            <div><span>Date : </span> {props.data.Date}</div>
            <br />
            <div><span>Time : </span> {props.data.Time}</div>
            <br />
            <div><span>Venue : </span> {props.data.Venue}</div>
            {/* <br /> */}
            {/* <div>First Prize : {props.data.Pm1}</div>
            <br />
            <div>Second Prize : {props.data.Pm2}</div> */}
            <br />
            <div><span>Brief : </span>{props.data.Details}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
