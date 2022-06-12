import React, { useEffect } from "react";
import styles from "./Slide1.module.css";
import homeVideo from "../../asssets/videos/home.mp4";

function Slide1() {
  useEffect(() => {}, []);

  return (
    <div className={styles.slide1_container}>
      {/* <img src={logoLine} alt="bigLogo" className={styles.logo} /> */}
      <video className={styles.video_container} src={homeVideo} loop autoPlay muted loading="lazy"></video>
      <p>NineSixteen Academy, 9-16’ya ve sektöre yeni yetenekler kazandırmak amacıyla 9-16 tarafından hayata geçirilen eğitim/staj programıdır.</p>
    </div>
  );
}

export default Slide1;
