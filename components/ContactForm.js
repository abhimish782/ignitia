import styles from "@/styles/ContactUs.module.css";
import Image from "next/image";
import Map from "./Map";
import { ContactFields } from "./ContactFields";

const ContactForm = () => {
  return (
    <>
      <div className={styles.WrapperContact}>
        <div className={styles.placewrap}>
          <div className={styles.address}>
            <div className={styles.imageBorder}>
              <img
                src={"/img/locationWhite.png"}
                width={1000}
                height={1000}
                alt={"location"}
              />
            </div>
            <h3>Address</h3>
            <span style={{ textAlign: "center" }}>Kanpur-Agra-Delhi National Highway (NH-19), Bhauti Kanpur, 209305</span>
          </div>

          <div className={styles.parentContact}>
            <div className={styles.email}>
              <div className={styles.imageBorder}>
                <img
                  src={"/img/emailWhite.png"}
                  width={1000}
                  height={1000}
                  alt={"location"}
                />
              </div>
              <h3>Email</h3>
              <span style={{ textAlign: "center" }}>contact@ignitia.in</span>
            </div>
            <div className={styles.phone}>
              <div className={styles.imageBorder}>
                <img
                  src={"/img/callWhite.png"}
                  width={1000}
                  height={1000}
                  alt={"location"}
                />
              </div>
              <h3>Contact Number</h3>
              <span style={{ textAlign: "center" }}>+91 6387857122</span>
              <span style={{ textAlign: "center" }}>+91 7355258137</span>
            </div>
          </div>
        </div>

        <div className={styles.placewrap}>
          <Map />
          <ContactFields />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
