import Image from "next/image";
import style from "@/styles/EventCard.module.css";
import styles from "@/styles/Gallery.module.css";

const GalleryCard = (props) => {
  const sizes = ["ImgSize1", "ImgSize2", "ImgSize3", "ImgSize4", "ImgSize5"];

  function getsize() {
    var index = Math.floor(Math.random() * sizes.length);
    return sizes[index];
  }
  return (
    <>
      <div key={props.data.id} className={getsize() + " " + styles.imagediv}>
        <img
          src={props.data.url}
          alt={props.data.id}
          width={2000}
          height={2000}
        />
      </div>
    </>
  );
};

export default GalleryCard;
