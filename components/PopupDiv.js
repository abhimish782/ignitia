import styles from "@/styles/Home.module.css";

const PopupDiv = (props) => {
  return (
    <>
      <div className={styles.PopupDiv} onClick={props.Close}>
        <div className={styles.ParentBox}>
          {/* <div className={styles.ClosePopDiv}><img src="/img/close.png" /></div> */}
          <div className={styles.PopBox}>
            <span>Platinum Sponsor</span>
            <img src={props.Url} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupDiv;
