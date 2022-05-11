import React, { useEffect } from "react";
import logoLine from "../../asssets/images/logo_line.png";
import styles from "./Slide1.module.css";

function Slide1() {
  useEffect(() => {
    console.log("slide1");
  }, []);

  return (
    <div className={styles.slide1_container}>
      <img src={logoLine} alt="bigLogo" className={styles.logo} />
      <p>NineSixteen Academy, 9-16’ya ve sektöre yeni yetenekler kazandırmak amacıyla 9-16 tarafından hayata geçirilen eğitim/staj programıdır.</p>
    </div>
  );
}

export default Slide1;
