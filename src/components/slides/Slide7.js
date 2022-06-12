import React, { useState } from "react";
import styles from "./CommonSl.module.css";
import axios from "axios";
import { useSnackbar } from "react-simple-snackbar";

function Slide7() {
  const [user, setUser] = useState({ fullName: "", school: "", email: "" });

  const options = {
    position: "top-center",
    style: {
      backgroundColor: "#30ce88",
      border: "2px solid #fff",
      color: "#fff",
      //fontFamily: "Menlo, monospace",
      fontSize: "20px",
      textAlign: "center",
    },
    closeStyle: {
      color: "lightcoral",
      fontSize: "16px",
    },
  };
  const [openSnackbar] = useSnackbar(options);

  const onSubmit = (e) => {
    e.preventDefault();
    openSnackbar(`Tebrikler ${user.fullName}! Kaydınız başarıyla alınmıştır.`);
    axios
      .post("https://suiteapidev.9-16.app/api/Academy/register", {
        name: user.fullName,
        university: user.school,
        email: user.email,
      })
      .then(function (response) {
        console.log(response);
        setTimeout(() => {
          setUser({ fullName: "", school: "", email: "" });
          openSnackbar(`Tebrikler ${user.fullName}! Kaydınız başarıyla alınmıştır.`);
        }, 200);
      })
      .catch(function (error) {
        console.log(error);
        setTimeout(() => {
          openSnackbar(`Üzgünüz! Bir hata oluştu :( Lütfen daha sonra tekrar deneyin.`);
        }, 200);
      });
  };
  return (
    <div className={styles.slide_container}>
      <div className={styles.caption}>
        <h2>Kaydol</h2>
        <p>Brief'imizi seninle paylaşabilmemiz için hemen kaydol !</p>
      </div>
      <div className={styles.form_container}>
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
      <div>
        {/* {" "}
      <video className={styles.video_container} src={academyPlay} loop autoPlay muted loading="lazy"></video>{" "} */}
      </div>
    </div>
  );
}

export default Slide7;
