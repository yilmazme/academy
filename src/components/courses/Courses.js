import React from "react";
import styles from "./Courses.module.css";
import logoSmall from "../../asssets/images/logo_small.png";
import { Link } from "react-router-dom";
import videoHeart from "../../asssets/videos/academy-heart.mp4";
import videoCrown from "../../asssets/videos/academy-crown.mp4";
import videoSkate from "../../asssets/videos/academy-Skateboard.mp4";
import videoQMark from "../../asssets/videos/academy-questionmark.mp4";
import { useNavigate } from "react-router-dom";
import { Carousel } from "3d-react-carousal";

function Courses() {
  const navigate = useNavigate();

  let slides = [
    <div>
      <video className={styles.video_container} src={videoCrown} controls loading="lazy"></video>
    </div>,
    <div>
      <video className={styles.video_container} src={videoSkate} controls loading="lazy"></video>
    </div>,
    <div>
      <video className={styles.video_container} src={videoQMark} controls loading="lazy"></video>
    </div>,
    <div>
      <video className={styles.video_container} src={videoHeart} controls loading="lazy"></video>
    </div>,
  ];

  return (
    <div className={styles.main}>
      <div className={styles.navContainer}>
        <img
          src={logoSmall}
          alt="logo"
          className={styles.logo_small}
          onClick={() => {
            navigate("/");
          }}
        />

        <div className={styles.linkGroup}>
          <Link to="/">home</Link>

          <Link to="/courses">courses</Link>

          <Link to="/register">register</Link>
        </div>
      </div>

      <div className={styles.videos_container}>
        <Carousel slides={slides} autoplay={false} />
      </div>
    </div>
  );
}

export default Courses;
