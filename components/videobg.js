import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function VideoBg(prop) {

  const [time,settime] = useState(Date.now());


  useEffect(()=>{
    const audio = document.getElementById("audio");
    var played = false;

      document.addEventListener("click",()=>{
        const now = Date.now();
        if(!played && (now - time) <= 5000 ){
          audio.play();
          played=true;
        }
      })
  })

  return (
    <>
      <div className={styles.BackVideo + " " +styles.VideoPng}>
        <video autoPlay muted id="BgVideo" preload={"auto"}>
          <source src="/video/Ignitia_WebsiteCropped.mp4" />
        </video>

         
        <audio autoPlay controls id="audio">
            <source src="/audio/Ignitia_Website.mp3" type="audio/ogg" />
        </audio>

      </div>
    </>
  );
}
