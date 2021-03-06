import React, { useState } from "react";
import Navbar from "../subs/Navbar";
import styles from "./Home.module.css";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../slides/Slide1";
import Slide2 from "../slides/Slide2";
import Slide3 from "../slides/Slide3";
import Slide4 from "../slides/Slide4";
import Slide5 from "../slides/Slide5";
import Slide6 from "../slides/Slide6";
import arrow from "../../asssets/images/ok.png";
import leftArrow from "../../asssets/images/ok_sol.png";
import Footer from "../subs/Footer";
import Slide7 from "../slides/Slide7";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (ind, e) => {
    setIndex(ind);
  };

  // const goFirstSlide = () => {
  //   setIndex(0);
  // };

  return (
    <div className={styles.main}>
      <Navbar />
      <Carousel
        onSelect={(e) => handleSelect(e)}
        controls={true}
        fade={false}
        interval={null}
        pause={false}
        className="my-slider"
        indicators={false}
        prevLabel="hjhj"
        nextIcon={<img src={arrow} alt="--->" />}
        prevIcon={<img src={leftArrow} alt="<---" className={index === 0 ? styles.hide_left_arrow : ""} />}
        keyboard={true}
        touch={true}
        activeIndex={index}
        defaultActiveIndex={0}
        // onSlid={handler} //a callback fired when a slide transition ends.
      >
        <Carousel.Item>
          <Slide1 />
        </Carousel.Item>
        <Carousel.Item>
          <Slide2 />
        </Carousel.Item>
        <Carousel.Item>
          <Slide3 />
        </Carousel.Item>
        <Carousel.Item>
          <Slide4 />
        </Carousel.Item>
        <Carousel.Item>
          <Slide5 />
        </Carousel.Item>
        <Carousel.Item>
          <Slide6 />
        </Carousel.Item>
        <Carousel.Item>
          <Slide7 />
        </Carousel.Item>
      </Carousel>
      <Footer />
    </div>
  );
}

export default Home;
