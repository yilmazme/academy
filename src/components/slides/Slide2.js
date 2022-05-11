import React from "react";
import videoHeart from "../../asssets/videos/academy-heart.mp4";
import heart from "../../asssets/images/kalp.png";
import styles from "./CommonSl.module.css";

function Slide2() {
  return (
    <div className={styles.slide_container}>
      <div className={styles.caption}>
        <h2>
          9-16 <img src={heart} alt="heart" /> yeni yetenekler
        </h2>
        <p> Staja giden yolda ilk adımı attın. Bundan sonrası çok keyifli olacak. Hazırsan başlayalım.</p>
      </div>
      <div>
        <video className={styles.video_container} src={videoHeart} loop autoPlay muted loading="lazy"></video>
      </div>
    </div>
  );
}

export default Slide2;
