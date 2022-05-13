import React from "react";
import styles from "./Navbar.module.css";
import logoSmall from "../../asssets/images/logo_small.png";
import { Link } from "react-router-dom";

function Navbar({ showSmallLogo, goRegister, goHome }) {
  return (
    <div className={showSmallLogo ? styles.navContainer : styles.navContainerNoLogo}>
      {showSmallLogo && <img src={logoSmall} alt="logo" className={styles.logo_small} />}

      <div className={styles.linkGroup}>
        <Link to="#" onClick={goHome}>
          home
        </Link>

        <Link to="/courses">courses</Link>

        <Link to="#" onClick={goRegister}>
          register
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
