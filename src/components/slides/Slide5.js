import React from "react";
import videoHeart from "../../asssets/videos/academy-heart.mp4";
import styles from "./CommonSl.module.css";

function Slide5() {
  return (
    <div className={styles.slide_container}>
      <div className={styles.caption}>
        <h2>Nasıl Başvurabilirim?</h2>
        <p>
          {" "}
          Öncelikle kaydol. Ardından senin için hazırladığımız online eğitim videolarını izle. 20 Haziran’da mail’ine brief gelmiş olacak. 1 hafta
          içinde bize en iyi işini gönder. Gelen işleri 9-16 kreatif ekibi değerlendirecek ve en iyi 15 işin sahibi NineSixteen Academy programına
          katılacak.
        </p>
      </div>
      <div>
        <video className={styles.video_container} src={videoHeart} loop autoPlay muted loading="lazy"></video>
      </div>
    </div>
  );
}

export default Slide5;
