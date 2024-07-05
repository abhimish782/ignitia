import React, { useEffect, useState } from "react";
import devCSS from "../styles/Dev.module.css";

import Front from "../assets/Front";
import Design from "../assets/Design";
import Back from "../assets/Back";

import D from "../assets/D.js";
import E from "../assets/E.js";
import V from "../assets/V.js";
import L from "../assets/L.js";
import P from "../assets/P.js";
import O from "../assets/O.js";
import R from "../assets/R.js";
import S from "../assets/S.js";
import array from "@/Data/localfile.json";


import DevelopersModel from "../components/DevelopersModel";
import TickTackToe from "./TickTackToe";
import Github from "@/assets/Github";
import Linkedin from "@/assets/Linkedin";

import AllowlockScroll from "./AllowlockScroll";

const Developers = (props) => {
  const [game, setGame] = useState([]);
  const [blockScroll, allowScroll] = AllowlockScroll();
  const OriginalSeq = array;
  var setSeq = OriginalSeq.slice();
  var correct = false;

  const HandleEventListner = (event) => {
    const keyPressed = event.key.toLocaleLowerCase();
    if (keyPressed >= "a" && keyPressed <= "z") {
      if (setSeq[0] == keyPressed) {
        setSeq.shift();
      } else {
        if (correct) {
          console.log("Sequence Incorrect , try again from start");
        }
        setSeq = OriginalSeq.slice();
        correct = false;
      }
      if (setSeq.length == 18) {
        console.log("You Got 1 word correct");
        correct = true;
      } else if (setSeq.length == 13) {
        console.log("You Got 2 word correct");
        correct = true;
      } else if (setSeq.length == 7) {
        console.log("You Got 3 word correct");
        correct = true;
      } else if (setSeq.length == 0) {
        setGame(<TickTackToe close={handleClose} />);
        blockScroll();
        setSeq = OriginalSeq.slice();
      }
    }
  };

  useEffect(() => {
    document.title = "Ignitia '23 | Developers";
    document.addEventListener("keypress", HandleEventListner);
    return () => {
      document.removeEventListener("keypress", HandleEventListner);
    };

  }, []);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const handleClose = () => {
    allowScroll();
    setGame([]);
  };

  const front = [
    {
      img: "/img/developers/photography.jpg",
      name: "Ingenious Club"
    }
  ];

  const design = [
    {
      img: "/image/content.jpg",
      name: "Khushi Gupta",
      github: "https://github.com/iskhushii",
      linkedin: "https://www.linkedin.com/in/khushi-gupta-9265b9222/",
    },
  ];

  const back = [
    {
      img: "/image/31098.png",
      name: "Ayush Agnihotri",
      github: "https://github.com/AyushAgnihotri2025",
      linkedin: "https://www.linkedin.com/in/ayushagnihotri2025/",
    },
    {
      img: "/img/29784.jpg",
      name: "Satvik Shukla",
      github: "https://github.com/deadland2002",
      linkedin: "https://www.linkedin.com/in/satvik-shukla-a758791b1/",
    },
    {
      img: "/img/30218.jpg",
      name: "Anshika Pandey",
      github: "https://github.com/AnshikaPandey27/",
      linkedin: "https://www.linkedin.com/in/anshika-pandey-0593b0229/",
    },
  ];

  useEffect(() => {
    document.querySelectorAll(".devLetter");
    document.querySelectorAll(".vector");
  }, []);

  const parallax = (e) => {
    let i = 1;
    document.querySelectorAll(".devLetter").forEach((div) => {
      i++;
      const speed = div.getAttribute("dataSpeed") * 0.01;
      const left = 0;
      const top = (e.pageY * speed) / 1.2;
      div.style.transform = `translateX(${left}px) translateY(${top}px)`;
    });
    i = 1;
    document.querySelectorAll(".vector").forEach((div) => {
      i++;
      const speed = div.getAttribute("dataSpeed") * 0.01;
      const left = div.style.left;
      const top = div.style.top;
      const x = left - e.pageX * speed;
      const y = top - e.pageY * speed * 2;
      div.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
    i = 1;
    document.querySelectorAll(".devIcon").forEach((div) => {
      i++;
      const speed = div.getAttribute("dataSpeed") * 0.01;
      const left = div.style.left;
      const top = div.style.top;
      const x = left - e.pageX * speed;
      const y = top - e.pageY * speed;
      div.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  const [openFront, setOpenFront] = useState(0);
  const [openDesign, setOpenDesign] = useState(0);
  const [openBack, setOpenBack] = useState(0);

  useEffect(() => {
    document.addEventListener("mousemove", parallax);
  }, []);

  return (
    <>
      <div className={devCSS.container}>
        <div className={devCSS.devContainer}>
          <div className={devCSS.developers}>
            <div className={devCSS.devLetters}>
              <div
                className={`${devCSS.devLetter} devLetter`}
                id={devCSS.devLetter1}
                dataSpeed={1}
              >
                <D />
              </div>
              <div
                className={`${devCSS.devLetter} devLetter`}
                id={devCSS.devLetter2}
                dataSpeed={-1}
              >
                <E />
              </div>
              <div
                className={`${devCSS.devLetter} devLetter`}
                id={devCSS.devLetter3}
                dataSpeed={2}
              >
                <V />
              </div>
              <div
                className={`${devCSS.devLetter} devLetter`}
                id={devCSS.devLetter4}
                dataSpeed={-2}
              >
                <E />
              </div>
              <div
                className={`${devCSS.devLetter} devLetter`}
                id={devCSS.devLetter5}
                dataSpeed={2}
              >
                <L />
              </div>
              <div
                className={`${devCSS.devLetter} devLetter`}
                id={devCSS.devLetter6}
                dataSpeed={-2}
              >
                <O />
              </div>
              <div
                className={`${devCSS.devLetter} devLetter`}
                id={devCSS.devLetter7}
                dataSpeed={1}
              >
                <P />
              </div>
              <div
                className={`${devCSS.devLetter} devLetter`}
                id={devCSS.devLetter8}
                dataSpeed={2}
              >
                <E />
              </div>
              <div
                className={`${devCSS.devLetter} devLetter`}
                id={devCSS.devLetter9}
                dataSpeed={-1}
              >
                <R />
              </div>
              <div
                className={`${devCSS.devLetter} devLetter`}
                id={devCSS.devLetter10}
                dataSpeed={1}
              >
                <S />
              </div>
            </div>

            <div className={devCSS.vectors}>
              <img
                src={"/img/developers/vector1.svg"}
                className={`${devCSS.vector} vector`}
                id={devCSS.vector1}
                dataSpeed={1}
                alt=""
              />
              <img
                src={"/img/developers/vector2.svg"}
                className={`${devCSS.vector} vector`}
                id={devCSS.vector2}
                dataSpeed={-2}
                alt=""
              />
              <img
                src={"/img/developers/vector3.svg"}
                className={`${devCSS.vector} vector`}
                id={devCSS.vector3}
                dataSpeed={-3}
                alt=""
              />
              <img
                src={"/img/developers/vector4.svg"}
                className={`${devCSS.vector} vector`}
                id={devCSS.vector4}
                dataSpeed={2}
                alt=""
              />
              <img
                src={"/img/developers/vector5.svg"}
                className={`${devCSS.vector} vector`}
                id={devCSS.vector5}
                dataSpeed={2}
                alt=""
              />
              <img
                src={"/img/developers/vector6.svg"}
                className={`${devCSS.vector} vector`}
                id={devCSS.vector6}
                dataSpeed={-1}
                alt=""
              />
              <img
                src={"/img/developers/vector7.svg"}
                className={`${devCSS.vector} vector`}
                id={devCSS.vector7}
                dataSpeed={-3}
                alt=""
              />
            </div>

            <div className={devCSS.devIcons}>
              <div
                className={`${devCSS.devIcon} devIcon`}
                id={devCSS.front}
                // onClick={() => setOpenFront(1)}
                dataSpeed={-2}
              >
                <Front />
              </div>
              <div
                className={`${devCSS.devIcon} devIcon`}
                id={devCSS.design}
                // onClick={() => setOpenDesign(1)}
                dataSpeed={1}
              >
                <Design />
              </div>
              <div
                className={`${devCSS.devIcon} devIcon`}
                id={devCSS.back}
                // onClick={() => setOpenBack(1)}
                dataSpeed={-1}
              >
                <Back />
              </div>
            </div>
          </div>
        </div>

        <div className={devCSS.CardSection}>
          <div className={devCSS.CardDiv}>
            <div className={devCSS.title}>Full Stack Developers</div>
            <div className={devCSS.CardHolder}>
              {shuffle(back).map((single) => {
                return (
                  <>
                    <div className={devCSS.Card}>
                      <div className={devCSS.CardInner}>
                        <div>
                          <img src={single.img} />
                        </div>
                        <div>{single.name}</div>
                        <div>
                          <Github github={single.github} />
                          <Linkedin linkedin={single.linkedin} />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className={devCSS.CardDiv}>
            <div className={devCSS.title}>Content Writer</div>
            <div className={devCSS.CardHolder}>
              {design.map((single) => {
                return (
                  <>
                    <div className={devCSS.Card}>
                      <div className={devCSS.CardInner}>
                        <div>
                          <img src={single.img} />
                        </div>
                        <div>{single.name}</div>
                        <div>
                          <Github github={single.github} />
                          <Linkedin linkedin={single.linkedin} />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>




          <div className={devCSS.CardDiv}>
            <div className={devCSS.title}>Video and Photography</div>
            <div className={devCSS.CardHolder}>
              {front.map((single) => {
                return (
                  <>
                    <div className={devCSS.CardLandScape}>
                      <div className={devCSS.CardInner}>
                        <div>
                          <img src={single.img} />
                        </div>
                        <div>{single.name}</div>
                        <div>
                          <Github github={single.github} />
                          <Linkedin linkedin={single.linkedin} />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>




        </div>
      </div>
      {openFront ? (
        <div
          style={{ overflowX: "hidden", zIndex: "150" }}
          className={devCSS.model}
          id="frontModel"
        >
          {/* <DevelopersModel
                        setOpen={setOpenFront}
                        team="Special Thanks"
                        devs={shuffle(front)}
                        background={"/img/developers/background.jpg"}

                    /> */}
        </div>
      ) : (
        <></>
      )}

      {openDesign ? (
        <div
          style={{ overflowX: "hidden", zIndex: "150" }}
          className={devCSS.model}
          id="designModel"
        >
          {/* <DevelopersModel
          setOpen={setOpenDesign}
          team="Content Writer"
          devs={shuffle(design)}
          background={"/img/developers/contentwriter.jpg"}
      /> */}
        </div>
      ) : (
        <></>
      )}

      {openBack ? (
        <div
          style={{ overflowX: "hidden", zIndex: "150" }}
          className={devCSS.model}
          id="backModel"
        >
          <DevelopersModel
            setOpen={setOpenBack}
            team="Full Stack Team"
            devs={shuffle(back)}
            background={"/img/developers/background.jpg"}
          />
        </div>
      ) : (
        <></>
      )}

      {game}
    </>
  );
};

export default Developers;
