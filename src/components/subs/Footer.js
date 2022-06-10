import React from "react";
import styles from "./Footer.module.css";
import instaLogo from "../../asssets/images/instagram.png";
import by916 from "../../asssets/images/by-916.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://www.instagram.com/9_16/" target="_blank" rel="noreferrer">
        <img src={instaLogo} alt="insta-logo" style={{ height: "2rem", marginLeft: "1rem" }} className={styles.instaLogo} />
      </a>
      <a href="https://www.9-16.com/" target="_blank" rel="noreferrer">
        <img src={by916} alt="916-logo" style={{ height: "2rem", marginLeft: "1rem" }} className={styles.by916} />
      </a>
    </div>
  );
}

export default Footer;
