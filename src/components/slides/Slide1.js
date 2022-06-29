import React, { useEffect } from "react";
import styles from "./Slide1.module.css";
import homeVideo from "../../asssets/videos/home.mp4";

function Slide1() {
  useEffect(() => {}, []);

  return (
    <div className={styles.slide1_container}>
      {/* <img src={logoLine} alt="bigLogo" className={styles.logo} /> */}
      {/* <video className={styles.video_container} src={homeVideo} loop autoplay muted loading="lazy"></video> */}
      <video className={styles.video_container} autoPlay loop="loop" muted playsInline preload="auto">
        <source src={homeVideo} type="video/mp4"></source>
      </video>
      <p>
        NineSixteen Academy, <nobr>9-16</nobr>’ya ve sektöre yeni yetenekler kazandırmak amacıyla <nobr>9-16</nobr> tarafından hayata geçirilen
        eğitim/staj programıdır.
      </p>
    </div>
  );
}

export default Slide1;
