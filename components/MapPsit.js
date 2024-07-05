import styles from "@/styles/Home.module.css"
import Image from "next/image";
import Teaser from "./Teaser";

const MapPsit = (props) =>{

    return (
        <>
        
        <div className={styles.BlockPsit} onClick={props.Close}>
        <img
          src={"/image/BlockDiagram.png"}
          width={1000}
          height={1000}
          alt={"camera"}
        />
        <a href="/image/BlockDiagram.png" download>Download Map</a>
      </div>

        
        </>
    )
}

export default MapPsit;