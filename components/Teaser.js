import styles from "@/styles/Home.module.css"


const Teaser = (props) =>{

  
    
    return (
        <>
        <div className={styles.iframeparent} onClick={props.Close}>

        <iframe
          id="teaser"
          width="100%"
          height="100%"

          src={props.Url}

          title="IGNITIA 2023 TEASER | PSIT"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          ></iframe>
        
        </div>
        </>
    )
}

export default Teaser;