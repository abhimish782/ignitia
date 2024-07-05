import styles from "@/styles/Home.module.css";

const EsportsTrailer = (props) => {
  return (
    <>
      <div className={styles.Specialiframeparent} onClick={props.Close}>
        <div className={styles.EsportsTitle}>
          {/* {props.Title ? props.Title : "Title"} */}
          <img src="/img/Esports1.png" />
        </div>

        <iframe
          id="teaser"
          width="100%"
          height="100%"
          src={"https://www.youtube-nocookie.com/embed/VPObod4SqrA/?autoplay=1"}
          title="IGNITIA 2023 TEASER | PSIT"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div>Register Now</div>

        <div className={styles.ParentRegister}>
          <div
            onClick={() => {
              window.open(
                props.RegisterLink
                  ? props.RegisterLink
                  : "https://forms.gle/BVUUTS3CE7KPL6YM8"
              );
            }}
            className={styles.EsportsRegister}
          >
            <span>For PSIT</span>
          </div>

          <div
            onClick={() => {
              window.open(
                props.RegisterLink
                  ? props.RegisterLink
                  : "https://forms.gle/G1oHbhKJNW5VsCSc8"
              );
            }}
            className={styles.EsportsRegister}
          >
            <span>For Others</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EsportsTrailer;