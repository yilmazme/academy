import React from "react";
import styles from "./Navbar.module.css";
import logoSmall from "../../asssets/images/logo_small.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
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
  );
}

export default Navbar;
