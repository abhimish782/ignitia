import styles from "@/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import $ from "jquery"
import AlertData from "@/Data/Alerts.json";

const Navbar = () => {
  const [open, setopen] = useState(true);
  const [ActiveAlerts, setActiveAlerts] = useState(0);
  useEffect(()=>{
    FetchLocalStorage();
  },[]);

  const FetchLocalStorage = ()=>{
    var prev = localStorage.getItem("PrevAlerts");
    if(prev){
      var temp = Math.abs(parseInt(prev) - AlertData.length)
      setActiveAlerts(temp);
    }else{
      localStorage.setItem("PrevAlerts",0);
      FetchLocalStorage();
    }
  }

  useEffect(() => {
    $("body").css("overflow", "");
    if (window.innerWidth < 1200) {
      $("#options").attr("style", "width: 50px !important; height: 40px !important;");
    };
    const element = document.getElementById("options");
    function handle() {
      if (window.innerWidth >= 1200) {
        element.classList.add(styles.collapse);
        element.style.width = "840px";
        setopen(true);
      } else {
        element.classList.remove(styles.collapse);
        element.style.width = "50px";
        setopen(false);
      }
    }
    window.addEventListener("resize", () => {
      handle();
    });
    handle();
  }, []);

  useEffect(() => {
    $(`.${styles.logo}`).click(function () {
      location.href = '/';
    });
    $(`.${styles.hamburger}`).hover(function () {
      $('#hamburgerIcon').attr('src', 'data:image/png;base64,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')
    }, function () {
      $('#hamburgerIcon').attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2UlEQVR4nO3aOwrCQBiF0QFXo+LafVTqpkTtbK4ErLRyTPAXz1lAEuZCpvlaAwAAAAAA+GNJlkl2Sc7hU8MZbpMsesdYJbl+/Bk8G8501TPI8eVRjOXw7hizJLfRXs+z4WxnBvnVQfyyJrd/7wJxqU/p0nWpP0ZZJNkkOU36if/hlGSdZN41BgAAAAAAAAAA9FG/j0r9XpT6vSD1ezHq92LU78Wo3wtRvxehfgcAAAAAAAAA4BvU76NSvxelfi9I/V6M+r0Y9Xsx6vdC1O9FqN8BAAAAAIBGa3dzrLjHogbwCQAAAABJRU5ErkJggg==')
    });
  }, [])

  const handleHamburger = () => {
    const parent = document.getElementById("options");
    if (!open) {
      if (window.innerWidth < 1200) {
        $("#options").attr("style", "");
        $("body").css("overflow", "hidden");
      }
      parent.classList.add(styles.collapse);
      // parent.classList.add("collapse");
      parent.style.width = "840px";
      setopen(true);
    } else {
      if (window.innerWidth < 1200) {
        $("#options").attr("style", "width: 50px !important; height: 40px !important;");
        $("body").css("overflow", "");
      }
      parent.classList.remove(styles.collapse);
      // parent.classList.remove("collapse");
      parent.style.width = "50px";
      // parent.classList.remove("AnimateWidth");
      setopen(false);
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <img
          className={styles.logo}
          src={"/img/PSIT_Ignitia23.png"}
          width={1000}
          height={1000}
          alt="logo"
        />

        <ul id="options">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/events">
            <li>Events</li>
          </Link>
          <Link href="/alerts" style={{position:"relative"}}>
            <li>
              {ActiveAlerts>=1 ? <span className={styles.ActiveAlerts}>{ActiveAlerts}</span> : ""}
              Alerts
            </li>
          </Link>
          <Link href="/Sponsor">
            <li>Sponsors</li>
          </Link>
          <Link href="/gallery">
            <li>Gallery</li>
          </Link>
          <Link href="/contact">
            <li>
              <pre>Contact Us</pre>
            </li>
          </Link>

          <li
            className={styles.hamburger}
            onClick={handleHamburger}
            id="hamburger"
          >
            <img id="hamburgerIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2UlEQVR4nO3aOwrCQBiF0QFXo+LafVTqpkTtbK4ErLRyTPAXz1lAEuZCpvlaAwAAAAAA+GNJlkl2Sc7hU8MZbpMsesdYJbl+/Bk8G8501TPI8eVRjOXw7hizJLfRXs+z4WxnBvnVQfyyJrd/7wJxqU/p0nWpP0ZZJNkkOU36if/hlGSdZN41BgAAAAAAAAAA9FG/j0r9XpT6vSD1ezHq92LU78Wo3wtRvxehfgcAAAAAAAAA4BvU76NSvxelfi9I/V6M+r0Y9Xsx6vdC1O9FqN8BAAAAAIBGa3dzrLjHogbwCQAAAABJRU5ErkJggg==" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
