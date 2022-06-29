import React from "react";
import academyPlay from "../../asssets/videos/academy-play.mp4";
import styles from "./CommonSl.module.css";
import { useNavigate } from "react-router-dom";

function Slide6() {
  const navigate = useNavigate();
  return (
    <div className={styles.slide_container}>
      <div className={styles.caption}>
        <h2>Online Videolar</h2>
        <p>
          O zaman ufaktan başlıyoruz! <br></br> İlk adımda ihtiyacın olacak tüm bilgiler burada. Seni kreatif ekibimizle baş başa bırakmadan önce son
          hatırlatma; kaydolmayı sakın unutma!
        </p>
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/courses");
        }}
      >
        {" "}
        <video className={styles.video_container} autoPlay loop="loop" muted playsInline preload="auto">
          <source src={academyPlay} type="video/mp4"></source>
        </video>{" "}
      </div>
    </div>
  );
}

export default Slide6;
