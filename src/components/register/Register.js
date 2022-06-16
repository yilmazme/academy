import React, { useState } from "react";
import styles from "./Register.module.css";
import logoSmall from "../../asssets/images/logo_small.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({ fullName: "", school: "", email: "" });

  const [registerMessage, setRegisterMessage] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://suiteapidev.9-16.app/api/Academy/register", {
        name: user.fullName,
        university: user.school,
        email: user.email,
      })
      .then(function (response) {
        console.log(response);

        setUser({ fullName: "", school: "", email: "" });
        setRegisterMessage(`Tebrikler ${user.fullName}! Kaydınız başarıyla alınmıştır.`);
      })
      .catch(function (error) {
        console.log(error);

        setRegisterMessage(`Üzgünüz! Bir hata oluştu :( Lütfen daha sonra tekrar deneyin.`);
      });
    setTimeout(() => {
      setRegisterMessage("");
    }, 5000);
  };
  return (
    <div className={styles.main}>
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
        <p
          style={{
            visibility: registerMessage.length ? "visible" : "hidden",
            height: "2rem",
            marginTop: "10px",
          }}
        >
          {registerMessage}
        </p>
      </div>
    </div>
  );
}

export default Register;
