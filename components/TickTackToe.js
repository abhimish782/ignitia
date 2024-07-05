import { useEffect, useState } from "react";
import styles from "../styles/TickTackToe.module.css";
import Lottie from "react-lottie-player";
import Confetti from "@/Data/confetti.json";
import { Player } from "@lottiefiles/react-lottie-player";
import swal from 'sweetalert';

const TickTackToe = (prop) => {

  const [values, setValues] = useState({
    name: '',
    mobileNum: '',
    email: ''
  });

  const sendData = (e) => {
    e.preventDefault();
    const btn = document.getElementById("SubmitEgg");
    btn.style.pointerEvents = "none";

    const name = values.name
    const moblienumber = values.mobileNum
    const emailAdress = values.email
    const emailPattern = /[+a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (!name || (/\d/.test(name))) {
      swal("Error !", "Please enter a valid name !", "error");
      btn.style.pointerEvents = "all";
      return;
    } else if (!moblienumber) {
      swal("Error !", "Please enter a valid Moblie Number !", "error");
      btn.style.pointerEvents = "all";
      return;
    } else if (!emailAdress || !(emailPattern.test(emailAdress))) {
      swal("Error !", "Please enter a valid email !", "error");
      btn.style.pointerEvents = "all";
      return;
    } else {
      fetch("/api/contactus", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      }).then(response => response.json()).then(data => {
        btn.style.pointerEvents = "all";
        if (!(data.error)) {
          swal("Thanks !", "Thanks for Submitting Form we will contact you soon and don't forget to share screenshot in telegram group https://t.me/PSITIgnitia !", "success");
          setValues({
            name: '',
            mobileNum: '',
            email: ''
          });
        } else {
          swal("Error !", "Something went wrong 🥲, Please try again !", "error");
        }
      })
    }
  }

  return (
    <>
      <div id="main" className={styles.main}>

        <img src="/img/Esports1.png" className={styles.esportsLogo} />


        <Player
        className={styles.confetti}
          autoplay
          loop
          src="https://assets1.lottiefiles.com/packages/lf20_C51Bca6c0m.json"
          style={{ height: "100vh", width: "100vw" }}
        />

        <div className={styles.close} onClick={prop.close} style={{zIndex:"10"}}>   
          X
        </div>


        <div className={styles.title}>Yay you found it 👏</div>
        <div className={styles.formDiv}>
          <form>
            <div>
              <input type={"text"} onChange={(e) => setValues({ ...values, name: e.target.value })} placeholder={"Enter Name"} />
            </div>
            <div>
              <input type={"email"} onChange={(e) => setValues({ ...values, email: e.target.value })} placeholder={"Enter Email"} />
            </div>
            <div>
              <input type={"tel"} onChange={(e) => setValues({ ...values, mobileNum: e.target.value })} placeholder={"Email Mobile No."} />
            </div>
            <div className={styles.submitEaster}>
              <button onClick={sendData} type={"submit"} id={"SubmitEgg"}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TickTackToe;