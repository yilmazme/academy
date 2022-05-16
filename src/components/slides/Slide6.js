import React from "react";
import videoHeart from "../../asssets/videos/academy-heart.mp4";
import styles from "./CommonSl.module.css";

function Slide6() {
  return (
    <div className={styles.slide_container}>
      <div className={styles.caption6}>
        <h2>Online Videolar</h2>
        <p>
          O zaman ufaktan başlıyoruz! <br></br> İlk adımda ihtiyacın olacak tüm bilgiler burada. Seni kreatif ekibimizle baş başa bırakmadan önce son
          hatırlatma; kaydolmayı sakın unutma!
        </p>
      </div>
      <div>
        {" "}
        <video className={styles.video_container6} src={videoHeart} loop autoPlay muted loading="lazy"></video>{" "}
      </div>
    </div>
  );
}

export default Slide6;
