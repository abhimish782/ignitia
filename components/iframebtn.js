import styles from "@/styles/Home.module.css"
import Image from "next/image";
import Teaser from "./Teaser";

const BtnIframe = (props) =>{


  const handleInFocus = (element) => {
    const elem = element.target;
    document.getElementById("teaserdiv").classList.add(styles.iframeparent);
    props.load()

  };
    
    return (
        <>
        
        <div className={styles.teaser}>
        <img
          src={"/img/camera.png"}
          width={1000}
          height={1000}
          alt={"camera"}
          onClick={handleInFocus}
        />
      </div>
        
        </>
    )
}

export default BtnIframe;