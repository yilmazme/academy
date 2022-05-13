import React, { useState } from "react";
import styles from "./Register.module.css";
import logoSmall from "../../asssets/images/logo_small.png";
import { Link } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({ fullName: "", school: "", email: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert(JSON.stringify(user));
      setUser({ fullName: "", school: "", email: "" });
    }, 500);
  };
  return (
    <div className={styles.main}>
      <div className={styles.navContainer}>
        <img src={logoSmall} alt="logo" className={styles.logo_small} />

        <div className={styles.linkGroup}>
          <Link to="/">ana sayfa</Link>

          <Link to="/courses">kurslar</Link>

          <Link to="/register">kayıt</Link>
        </div>
      </div>
      <div className={styles.form_container}>
        <h2>Kaydol</h2>
        <p>Brief'imizi seninle paylaşabilmemiz için hemen kaydol !</p>
        <form onSubmit={onSubmit}>
          <div className={styles.name}>
            <input
              type="text"
              name="name"
              placeholder="Eda Karaca"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              required
            ></input>
          </div>
          <div className={styles.school}>
            <input
              type="text"
              name="school"
              placeholder="Anadolu Üniversitesi"
              value={user.school}
              onChange={(e) => setUser({ ...user, school: e.target.value })}
              required
            ></input>
          </div>
          <div className={styles.email}>
            <input
              type="email"
              name="email"
              placeholder="edakaraca@gmail.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            ></input>
          </div>
          <div className={styles.submit}>
            <input type="submit" value="Kaydol" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
