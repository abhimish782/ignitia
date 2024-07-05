import styles from "@/styles/Btn.module.css"
import Image from "next/image";

const BackBtn = () =>{
    const handleBack = ()=>{
        history.back()
    };
    return(
        <>
        <div className={styles.Back} onClick={handleBack}>
                <img src="/img/close.png" width={1000} height={1000} alt={"close"}/>  
        </div>
        </>
    )
};

export default BackBtn;