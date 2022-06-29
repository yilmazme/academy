import React from "react";
import styles from "./CommonSl.module.css";
import videoCrown from "../../asssets/videos/academy-crown.mp4";

function Slide3() {
  return (
    <div className={styles.slide_container}>
      <div className={styles.caption}>
        <h2 className={styles.header}>NineSixteen Academy Nedir?</h2>
        <p>
          {" "}
          <nobr>9-16</nobr>’ya ve sektöre yeni yetenekler kazandırmak amacıyla <nobr>9-16</nobr> tarafından hayata geçirilen eğitim/staj programıdır.
          Online videolar ilk adım! Ardından 1 aylık program ile <nobr>9-16</nobr> kreatif ekibinden öğreniyor, Creative Video Designer gibi çalışmayı
          deneyimliyorsun. Hazır olduğunda ekibizdeki yerini alıyorsun. <br></br>
          Nasıl ama?
        </p>
      </div>
      <div>
        <video className={styles.video_container} autoPlay loop="loop" muted playsInline preload="auto">
          <source src={videoCrown} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Slide3;
