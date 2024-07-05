import styles from "@/styles/ContactUs.module.css";
import { useState } from "react";
import swal from 'sweetalert';

export const ContactFields = () => {
  const [values, setValues] = useState({
    name: '',
    mobileNum: '',
    email: '',
    subject: '',
    message: ''
  });

  const sendData = (e) => {
    e.preventDefault();

    const name = values.name
    const moblienumber = values.mobileNum
    const emailAdress = values.email
    const subject = values.subject
    const text = values.message
    const emailPattern = /[+a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (!name || (/\d/.test(name))) {
      swal("Error !", "Please enter a valid name !", "error");
      return;
    } else if (!moblienumber) {
      swal("Error !", "Please enter a valid Moblie Number !", "error");
      return;
    } else if (!emailAdress || !(emailPattern.test(emailAdress))) {
      swal("Error !", "Please enter a valid email !", "error");
      return;
    } else if (!subject) {
      swal("Error !", "Please enter a valid Subject !", "error");
      return;
    } else if (!text) {
      swal("Error !", "Please enter a valid message !", "error");
      return;
    } else {
      fetch("/api/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      }).then(response => response.json()).then(data => {
        if (!(data.error)) {
          swal("Thanks !", "Thanks for contacting us !", "success");
          setValues({
            name: '',
            mobileNum: '',
            email: '',
            subject: '',
            message: ''
          });
        } else {
          swal("Error !", "Something went wrong 🥲, Please try again !", "error");
        }
      })
    }
  }

  return (
    <div className={styles.FillForm}>
      <form className={styles.form}>
        <div className={styles.fields}>
          <input type={"text"} name={"name"} value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} placeholder="Name" />
          <input type={"text"} name={"number"} value={values.mobileNum} onChange={(e) => setValues({ ...values, mobileNum: e.target.value })} placeholder="Mobile No." />
          <input type={"email"} name={"email"} value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} placeholder="Email" />
          <input type={"text"} name={"subject"} value={values.subject} onChange={(e) => setValues({ ...values, subject: e.target.value })} placeholder="Subject" />
          <textarea name={"description"} value={values.message} onChange={(e) => setValues({ ...values, message: e.target.value })} placeholder="Describe your problem" />
        </div>
        <button style={{ cursor: "pointer" }} onClick={sendData} type={"submit"}>Submit</button>
      </form>
    </div>
  )
}
