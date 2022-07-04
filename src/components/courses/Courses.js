import React from "react";
import styles from "./Courses.module.css";
import ComingSoonVideo from "../../asssets/videos/ComingSoonVideo.mp4";
import { Carousel } from "3d-react-carousal";
import Navbar from "../subs/Navbar";

function Courses() {
  let slides = [
    <div className={styles.video_container}>
      <video controls preload="auto">
        <source src={ComingSoonVideo} type="video/mp4"></source>
      </video>
    </div>,
    <div className={styles.video_container}>
      <video controls preload="auto">
        <source src={ComingSoonVideo} type="video/mp4"></source>
      </video>
    </div>,
    <div className={styles.video_container}>
      <video controls preload="auto">
        <source src={ComingSoonVideo} type="video/mp4"></source>
      </video>
    </div>,
    <div className={styles.video_container}>
      <video controls preload="auto">
        <source src={ComingSoonVideo} type="video/mp4"></source>
      </video>
    </div>,
  ];

  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.videos_container}>
        <Carousel slides={slides} autoplay={false} />
      </div>
    </div>
  );
}

export default Courses;
