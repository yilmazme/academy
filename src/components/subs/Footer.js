import React from "react";
import styles from "./Footer.module.css";
import instaLogo from "../../asssets/images/instagram.png";
import bilgi916 from "../../asssets/images/916Bilgi.png";
import bilgiTalent from "../../asssets/images/bilgiTalent.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logoContainer}>
        <a href="https://www.instagram.com/9_16/" target="_blank" rel="noreferrer">
          <img src={instaLogo} alt="insta-logo" className={styles.instaLogo} />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a href="https://www.9-16.com/" target="_blank" rel="noreferrer">
          <img src={bilgi916} alt="bilgi-916-logo" className={styles.bilgi916Logo} />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a href="https://www.bilgi.edu.tr/tr/talent/" target="_blank" rel="noreferrer">
          <img src={bilgiTalent} alt="bilgi-talent-logo" className={styles.bilgiTalentLogo} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
