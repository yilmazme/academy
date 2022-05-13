import React from "react";
import styles from "./Navbar.module.css";
import logoSmall from "../../asssets/images/logo_small.png";
import { Link } from "react-router-dom";

function Navbar({ showSmallLogo, goHome }) {
  return (
    <div className={showSmallLogo ? styles.navContainer : styles.navContainerNoLogo}>
      {showSmallLogo && <img src={logoSmall} alt="logo" className={styles.logo_small} />}

      <div className={styles.linkGroup}>
        <Link to="#" onClick={goHome}>
          ana sayfa
        </Link>

        <Link to="/courses">kurslar</Link>

        <Link to="/register">kayıt</Link>
      </div>
    </div>
  );
}

export default Navbar;
