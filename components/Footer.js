import styles from "@/styles/Footer.module.css";
import stylescustom from "@/styles/Bootstrap.module.css";

const Footer = () => {
    return (
        <>
            <footer id="footer" className={styles.footer}>
                <div className={styles["footer-top"]}>
                    <div className={stylescustom.container}>
                        <div className={stylescustom.row}>
                            <div className={`${stylescustom["col-lg-3"]} ${stylescustom["col-md-6"]} ${styles["footer-contact"]}`}>
                                <img src="/img/ignitiablack.png" style={{width: "57%"}}/>
                                <p>
                                    Kanpur-Agra-Delhi National Highway (NH-19),<br />
                                    Bhauti Kanpur, 209305<br />
                                    Uttar Pradesh <br /><br />
                                </p>
                            </div>

                            <div className={`${stylescustom["col-lg-3"]} ${stylescustom["col-md-6"]} ${styles["footer-links"]}`}>
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className={`bx bx-chevron-right`}></i> <a href="/">Home</a></li>
                                    <li><i className={`bx bx-chevron-right`}></i> <a href="/about">About</a></li>
                                    <li><i className={`bx bx-chevron-right`}></i> <a href="/events">Events</a></li>
                                    <li><i className={`bx bx-chevron-right`}></i> <a href="/gallery">Gallery</a></li>
                                    <li><i className={`bx bx-chevron-right`}></i> <a href="/contact">Contact Us</a></li>
                                </ul>
                            </div>

                            <div className={`${stylescustom["col-lg-3"]} ${stylescustom["col-md-6"]} ${styles["footer-contact"]}`}>
                                <h4>Contact Us</h4>
                                <p>
                                    <strong>Phone:</strong> +91 6387857122<br />
                                    <strong>Phone:</strong> +91 7355258137<br />
                                    <strong>Email:</strong> contactus@ignitia.in<br />
                                </p>
                            </div>

                            <div className={`${stylescustom["col-lg-3"]} ${stylescustom["col-md-6"]} ${styles["footer-links"]}`}>
                                <h4>Our Social Networks</h4>
                                <div className={`${styles["social-links"]} ${stylescustom["mt-3"]}`}>
                                    <a href="https://twitter.com/PSITKanpur2004" className={styles.twitter}><i className="bx bxl-twitter"></i></a>
                                    <a href="https://www.facebook.com/psit.ac.in" className={styles.facebook}><i className="bx bxl-facebook"></i></a>
                                    <a href="https://www.instagram.com/psitkanpur/" className={styles.instagram}><i className="bx bxl-instagram"></i></a>
                                    <a href="https://www.youtube.com/@psitkanpur" className={styles.youtube}><i className="bx bxl-youtube"></i></a>
                                    <a href="https://www.linkedin.com/school/psit-kanpur-pranveer-singh-institute-of-technology-/" className={styles.linkedin}><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={`${stylescustom.container} ${styles["footer-bottom"]} ${stylescustom.clearfix}`}>
                    <div className={styles.copyright}>
                        &copy; 2023 Copyright <strong><span>Ignitia</span></strong>. All Rights Reserved
                    </div>
                    <div className={styles.credits}>
                        Designed by <a href="/">Team Ignitia</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;