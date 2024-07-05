import styles from "@/styles/ContactUs.module.css"
import Image from "next/image"

export default function ProfileCard(prop){
    return(
        <>
        <div className={styles.Card}>
            <div className={styles.ImageHolder}>
                <img src={prop.data.Url ? prop.data.Url : "/img/profileicon.png"} width={1000} height={1000} alt={"image"}/>
            </div>
            <div className={styles.Name}>
                {prop.data.Name}
            </div>
            <div className={styles.Position}>
                {prop.data.Designation}
                <br/>
                {/* {prop.data.Email}
                <br/> */}
                {prop.data.Phone}
            </div>
        </div>
        </>
    )
};