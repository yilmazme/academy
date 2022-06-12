import React from "react";
import styles from "./Navbar.module.css";
import logoSmall from "../../asssets/images/logo_small.png";
import { Link } from "react-router-dom";

function Navbar({ goHome }) {
  return (
    <div className={styles.navContainer}>
      <img src={logoSmall} alt="logo" className={styles.logo_small} onClick={goHome} />

      <div className={styles.linkGroup}>
        <Link to="#" onClick={goHome} style={{ margin: 0, padding: 0 }}>
          home
        </Link>

        <Link to="/courses">courses</Link>

        <Link to="/register">register</Link>
      </div>
    </div>
  );
}

export default Navbar;
