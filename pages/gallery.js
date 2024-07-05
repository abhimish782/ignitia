import Head from "next/head";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import { useState } from "react";
import styles from "@/styles/TestingGallery.module.css";
import styles2 from "@/styles/TestGallery.module.css";
import $ from "jquery";
import Image from "next/image";
import Footer from "@/components/Footer";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import Live from "@/components/live";

function Gallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      start();
      async function start() {
        const loader = document.getElementById("preloader");
        if (loader) {
          const res = await fetch("api/gallery");
          var posts = await res.json();
          posts = posts.result;
          setData(posts);
          $("#preloader").hide();
          $(`.${styles.portfolio}`).fadeIn();
        }
      }
    }
  }, []);

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const trailProps = {
    lineDuration: 15,
    lineWidthStart: 10,
    strokeColor: "#EBB935",
    lag: 0,
  };

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  useEffect(() => {
    setInterval(() => {
      GLightbox({
        selector: `.${styles["portfolio-lightbox"]}`
      })
    }, 100);
  }, [])

  useEffect(() => {
    document.querySelectorAll("#portfolio-flters li").forEach(ele => {
      ele.addEventListener('click', function (e) {
        e.preventDefault();

        let portfolioFilters = select(`#portfolio-flters li`, true);

        portfolioFilters.forEach(function (el) {
          el.classList.remove(`${styles['filter-active']}`);
        });

        this.classList.add(`${styles['filter-active']}`);

        window.$('.portfolio-container').isotope({
          filter: this.getAttribute('data-filter')
        });
      })
    })
  }, []);


  return (
    <>
      <Head>
        <title>Gallery | Ignitia</title>
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
      </Head>
      <Navbar />
      <Live />
      <div style={{ zIndex: 1000 }}>
        <MouseTrail {...trailProps} />
      </div>
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
      <section id="portfolio" className={styles.portfolio} style={{ display: "none" }}>
        <div className={styles2.container}>

          <div style={{ paddingTop: "90px" }} className={styles["section-title"]}>
            <h2>Gallery</h2>
          </div>

          <div className={styles2.row}>
            <div className={`${styles2["col-lg-12"]} ${styles2["d-flex"]} ${styles2["justify-content-center"]}`}>
              <ul id="portfolio-flters" className={styles["portfolio-flters"]}>
                <li data-filter="*" className={styles["filter-active"]}>All</li>
                <li data-filter=".filter-photos">Photos</li>
                <li data-filter=".filter-videos">Videos</li>
              </ul>
            </div>
          </div>

          <div className={`${styles2.row} portfolio-container`}>

            {data.map((single) => (
              (single.type === "image") ? (
                <div key={single.id} style={{ cursor: "pointer" }} className={`${styles2["col-lg-4"]} ${styles2["col-md-6"]} ${styles["portfolio-item"]} filter-photos`}>
                  <img src={single.content} style={{ borderRadius: "10px" }} className={`${styles["portfolio-lightbox"]} ${styles2["img-fluid"]}`} alt={""} />
                </div>
              ) : (
                <div key={single.id} style={{ cursor: "pointer" }} className={`${styles2["col-lg-4"]} ${styles2["col-md-6"]} ${styles["portfolio-item"]} filter-videos`}>
                  <a href={single.content} className={styles["portfolio-lightbox"]}>
                    <img src={single.thumbnail} style={{ borderRadius: "10px" }} className={styles2["img-fluid"]} alt={""} />
                  </a>
                </div>)
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Gallery;