import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/About.module.css";
import styles2 from "@/styles/Test.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail"
import PopupBtn from "@/components/PopupButton";
import Live from "@/components/live";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  useEffect(() => {
    $("#preloader").hide();
    $(`.${styles.about}`).fadeIn();

    new Swiper('.portfolio-details-slider', {
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    })

    var carousel = window.$("#carousel").waterwheelCarousel({
      flankingItems: 3,
      movingToCenter: function ($item) {
        window.$('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
      },
      movedToCenter: function ($item) {
        window.$('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
      },
      movingFromCenter: function ($item) {
        window.$('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
      },
      movedFromCenter: function ($item) {
        window.$('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
      },
      clickedCenter: function ($item) {
        window.$('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
      }
    });

    setInterval(() => {
      carousel.next();
    }, 2500);

    window.$('#prev').bind('click', function () {
      carousel.prev();
      return false
    });

    window.$('#next').bind('click', function () {
      carousel.next();
      return false;
    });

    window.$('#reload').bind('click', function () {
      newOptions = eval("(" + $('#newoptions').val() + ")");
      carousel.reload(newOptions);
      return false;
    });
  }, [])

  const trailProps = {
    lineDuration: 15,
    lineWidthStart: 10,
    strokeColor: "#EBB935",
    lag: 0,
  };

  return (
    <>
      <Head>
        <title>About | Ignitia</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="./css/logosvg.css" />
        <link href="css/test.css" rel="stylesheet"></link>
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <div style={{ zIndex: 1000 }}>
        <MouseTrail {...trailProps} />
      </div>

      <PopupBtn />
      <Live />

      <div className="preloader" id="preloader">
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>

        <div className="loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>

        <div className="loader">
          <svg viewBox="0 0 80 80">
            <rect x="8" y="8" width="64" height="64"></rect>
          </svg>
        </div>
      </div>
      <section id="about" className={`${styles.section} ${styles.about} ${styles["section-bg"]}`} style={{ display: "none" }}>
        <div className={styles2.container} data-aos="fade-up">

          <div style={{ paddingTop: "30px" }} className={styles["section-title"]}>
            <h2>About</h2>
          </div>

          <div className={`${styles2.row}`} style={{ alignItems: "center" }}>
            <div className={styles2["col-lg-6"]} data-aos="fade-right" data-aos-delay="100" style={{ display: "flex", flexWrap: "nowrap", justifyContent: "center", paddingLeft: 0 }}>
              <div className="portfolio-details" id="portfolio-details">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">

                    <div className="swiper-slide">
                      <img src="./img/about/daypsit.png" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="./img/about/E1.jpg" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="./img/about/E2.jpg" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="./img/about/E3.jpg" alt="" />
                    </div>

                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
            <div className={`${styles2["col-lg-6"]} ${styles2["pt-4"]} ${styles2["pt-lg-0"]} ${styles.content} ${styles2["d-flex"]} ${styles2["flex-column"]} ${styles2["justify-content-center"]}`} data-aos="fade-up" data-aos-delay="100" style={{ alignItems: "center" }}>
              <img src="./img/logo.png" style={{ width: "217px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}></img>
              <p className={styles.aboutcustom}>
                The two-day techno-cultural fest of PSIT provides an enticing opportunity to students to showcase their potential.
                A plethora of activities exploring the vast domains of technology and culture take place, igniting the spirit of the participants and the audience alike.
                This carnival of events makes way for profound entertainment and holistic learning that leaves an unwavering impact on the audience.
                An all round cultural fiesta with fascinating execution of cutting edge tech is put on display, which fills the campus with an infectious energy, leaving everyone craving for more.
              </p>
            </div>
          </div>
        </div>
        <div id="carousel" className={styles.carousel}>
          <img src="img/about/celebrity/1.PNG" />
          <img src="img/about/celebrity/2.PNG" />
          <img src="img/about/celebrity/3.PNG" />
          <img src="img/about/celebrity/4.PNG" />
          <img src="img/about/celebrity/5.PNG" />
          <img src="img/about/celebrity/6.PNG" />
          <img src="img/about/celebrity/7.PNG" />
          <img src="img/about/celebrity/8.PNG" />
          <img src="img/about/celebrity/9.PNG" />
          <img src="img/about/celebrity/10.PNG" />
          <img src="img/about/celebrity/11.PNG" />
          <img src="img/about/celebrity/12.PNG" />
          <img src="img/about/celebrity/13.PNG" />
          <img src="img/about/celebrity/14.PNG" />
          <img src="img/about/celebrity/15.PNG" />
          <img src="img/about/celebrity/16.PNG" />
          <img src="img/about/celebrity/17.PNG" />
          <img src="img/about/celebrity/18.PNG" />
          <img src="img/about/celebrity/19.PNG" />
          <img src="img/about/celebrity/20.PNG" />
          <img src="img/about/celebrity/21.PNG" />
          <img src="img/about/celebrity/22.PNG" />
          <img src="img/about/celebrity/23.PNG" />
          <img src="img/about/celebrity/24.PNG" />
          <img src="img/about/celebrity/25.PNG" />
          <img src="img/about/celebrity/26.PNG" />
          <img src="img/about/celebrity/27.PNG" />
          <img src="img/about/celebrity/28.PNG" />
          <img src="img/about/celebrity/29.PNG" />
          <img src="img/about/celebrity/30.PNG" />
        </div>
      </section>
      <Footer />
    </>
  );
}
