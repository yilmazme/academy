import React from "react";
import styles from "./Navbar.module.css";
import logoSmall from "../../asssets/images/logo_small.png";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo_container}>
        <img
          src={logoSmall}
          alt="logo"
          className={styles.logo_small}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      <div className={styles.linkGroup}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
          home
        </NavLink>

        <NavLink to="/courses" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
          courses
        </NavLink>

        <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
          register
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
