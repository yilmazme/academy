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
          9-16’ya ve sektöre yeni yetenekler kazandırmak amacıyla 9-16 tarafından hayata geçirilen eğitim/staj programıdır. Online videolar ilk adım!
          Ardından 1 aylık program ile 9-16 kreatif ekibinden öğreniyor, Creative Video Designer gibi çalışmayı deneyimliyorsun. Hazır olduğunda
          ekibizdeki yerini alıyorsun. <br></br>
          Nasıl ama?
        </p>
      </div>
      <div>
        <video className={styles.video_container} src={videoCrown} loop autoPlay muted loading="lazy"></video>
      </div>
    </div>
  );
}

export default Slide3;
