import React, { useState } from "react";
import styles from "./CommonSl.module.css";
import axios from "axios";

function Slide7() {
  const [user, setUser] = useState({ fullName: "", school: "", email: "" });
  const [registerMessage, setRegisterMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://suiteapidev.9-16.app/api/Academy/register", {
        name: user.fullName,
        university: user.school,
        email: user.email,
      })
      .then(function(response) {
        console.log(response);
        setUser({ fullName: "", school: "", email: "" });
        setRegisterMessage(`Tebrikler ${user.fullName}! Kaydınız başarıyla alınmıştır.`);
      })
      .catch(function(error) {
        console.log(error);
        setRegisterMessage(`Üzgünüz! Bir hata oluştu :( Lütfen daha sonra tekrar deneyin.`);
      });

    setTimeout(() => {
      setRegisterMessage("");
    }, 5000);
  };
  return (
    <div className={styles.slide_container}>
      <div className={styles.caption}>
        <h2>Kaydol</h2>
        <p>Brief'imizi seninle paylaşabilmemiz için hemen kaydol!</p>
      </div>
      <div className={styles.form_container}>
        <form onSubmit={onSubmit}>
          <div className={styles.name}>
            <input
              type="text"
              name="name"
              placeholder="Ad Soyad"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              required
            ></input>
          </div>
          <div className={styles.school}>
            <input
              type="text"
              name="school"
              placeholder="Üniversite"
              value={user.school}
              onChange={(e) => setUser({ ...user, school: e.target.value })}
              required
            ></input>
          </div>
          <div className={styles.email}>
            <input
              type="email"
              name="email"
              placeholder="Mail"
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
            height: "1.2rem",
            marginTop: "5px",
            fontSize: "1.2rem",
            width: "100% !important",
          }}
          className={styles.confirmation}
        >
          {registerMessage}
        </p>
      </div>
      <div>{/* {" "}
      <video className={styles.video_container} src={academyPlay} loop autoPlay muted loading="lazy"></video>{" "} */}</div>
    </div>
  );
}

export default Slide7;
