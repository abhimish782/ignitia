import styles from "@/styles/Sponsor.module.css";

const SponsorCard = (prop) => {
  return (
    <>
      {/* <div id={prop.data.Title} className={styles.Title}>{prop.data.Title}</div> */}
      <div className={styles.CardHolder}>
        {prop.data.Data.map((single) => {
          return (
            <>
              <div className={styles.Card}>
                <img src={single.Url} />
                <div id={single.ID} style={{ textAlign: "Center" }}>
                  {single.Name}
                  <br/>
                  <span style={{color:"#FFD600"}}>{single.Desig}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SponsorCard;
