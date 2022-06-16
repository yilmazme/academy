import React from "react";
import videoSkate from "../../asssets/videos/academy-Skateboard.mp4";
import styles from "./CommonSl.module.css";

function Slide4() {
  return (
    <div className={styles.slide_container}>
      <div className={styles.caption}>
        <h2>Kimler Başvurabilir?</h2>
        <p>
          Motion Design alanında kendini geliştirmek istiyorsan, Üniversite 3. ve 4. sınıf öğrencisi ya da yeni mezunsan, ve kendine güveniyorsan,
          NineSixteen Academy’e kesin başvurmalısın!
        </p>
      </div>
      <div>
        <video className={styles.video_container} autoPlay loop="loop" muted playsInline preload="auto">
          <source src={videoSkate} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Slide4;
