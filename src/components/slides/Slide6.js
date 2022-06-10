import React from "react";
import academyPlay from "../../asssets/videos/academy-play.mp4";
import styles from "./CommonSl.module.css";

function Slide6() {
  return (
    <div className={styles.slide_container}>
      <div className={styles.caption}>
        <h2>Online Videolar</h2>
        <p>
          O zaman ufaktan başlıyoruz! <br></br> İlk adımda ihtiyacın olacak tüm bilgiler burada. Seni kreatif ekibimizle baş başa bırakmadan önce son
          hatırlatma; kaydolmayı sakın unutma!
        </p>
      </div>
      <div>
        {" "}
        <video className={styles.video_container} src={academyPlay} loop autoPlay muted loading="lazy"></video>{" "}
      </div>
    </div>
  );
}

export default Slide6;
