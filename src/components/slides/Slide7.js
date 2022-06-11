import React, { useState } from "react";
import styles from "./CommonSl.module.css";

function Slide7() {
  const [user, setUser] = useState({ fullName: "", school: "", email: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert(JSON.stringify(user));
      setUser({ fullName: "", school: "", email: "" });
    }, 100);
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
