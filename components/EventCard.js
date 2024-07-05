import Image from "next/image";
import style from "@/styles/EventCard.module.css";
import { useEffect } from "react";

const EventCard = (props) => {

  function ShowData(data){
    props.details(data);
  }

  if((props.data.Url).length == 0){
    return(<></>);
  }

  const handleform = ()=>{
    window.open("https://forms.gle/s1Ua8xDJemiQoPpb6");
  }

  return (
    <>
      <main className={style.pageContent + " fadein"} id={props.data.Id}>
        <div
          className={style.card + " fadein" }
          style={{ backgroundImage: `url("${props.data.Url}")` }}
        >
          <div className={style.content + " fadein"}>
            <h2 className={style.title + " fadein" }>{props.data.EventName}</h2>
              <button className={style.btn + " fadein" } onClick={()=>ShowData(props.data)}>Know More</button>
              <button className={style.btn + " fadein" } id="registerbutton" onClick={handleform}>Register</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default EventCard;
