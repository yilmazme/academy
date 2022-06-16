import React from "react";
import videoHeart from "../../asssets/videos/academy-heart.mp4";
import heart from "../../asssets/images/kalp.png";
import logoBlack from "../../asssets/images/logo-white.png";
import styles from "./CommonSl.module.css";

function Slide2() {
  return (
    <div className={styles.slide_container}>
      <div className={styles.caption}>
        <h2>
          <img src={logoBlack} alt="logo-black" style={{ height: "4rem", marginRight: "1rem" }} />
          <img src={heart} alt="heart" /> Yeni Yetenekler
        </h2>
        <p> Staja giden yolda ilk adımı attın. Bundan sonrası çok keyifli olacak. Hazırsan başlayalım.</p>
      </div>
      <div>
        {/* <video className={styles.video_container} src={videoHeart} loop autoPlay muted loading="lazy"></video> */}
        <video className={styles.video_container} autoPlay loop="loop" muted playsInline preload="auto">
          <source src={videoHeart} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Slide2;
