import React, { Component, useEffect, useState } from "react";
import DrawerComponent from "./DrawerComponent";
import styles from "./styles.module.css";

function Header() {
  const [visibilityDrawer, setVisibilityDrawer] = useState("none");
  const [visibilityLinks, setVisibilityLinks] = useState("flex");
  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 800) {
        setVisibilityDrawer("flex");
        setVisibilityLinks("none");
      }
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        padding: 0,
        paddingLeft: 20,
        top: 0,
        position: "fixed",
        zIndex: 100,
        backgroundColor: "#fff",
        width: "100vw",
        // borderBottom: "1px solid #ededed",
      }}
    >
      <h1 style={{ textAlign: "left", width: "auto" }}>WEXUS</h1>
      <div
        style={{
          display: "flex",
          paddingRight: 10,
          alignItems: "center",
          marginLeft: "auto",
          justifyContent: "end",
        }}
      >
        <span style={{ display: visibilityLinks }}>
          <a
            href="/"
            onClick={(e) => {
              const menu = document.getElementById("about");
              e.preventDefault();
              menu &&
                menu.scrollIntoView({ behavior: "smooth", block: "start" });
              // if (window.location.href!='http://localhost:3000/') {
              //   location.href = '/#about';
              // }
            }}
          >
            <p className={styles.headernav}>Services</p>
          </a>
          <a
            href="/"
            onClick={(e) => {
              const menu = document.getElementById("skills");
              e.preventDefault();
              menu &&
                menu.scrollIntoView({ behavior: "smooth", block: "start" });
              // if (window.location.href!='http://localhost:3000/') {
              //   location.href = '/#about';
              // }
            }}
          >
            <p className={styles.headernav}>Pricing</p>
          </a>
          <a
            href="/"
            onClick={(e) => {
              const menu = document.getElementById("projects");
              e.preventDefault();
              menu &&
                menu.scrollIntoView({ behavior: "smooth", block: "start" });
              // if (window.location.href!='http://localhost:3000/') {
              //   location.href = '/#about';
              // }
            }}
          >
            <p className={styles.headernav}>Projects</p>
          </a>
          <a
            href="/"
            onClick={(e) => {
              const menu = document.getElementById("socials");
              e.preventDefault();
              menu &&
                menu.scrollIntoView({ behavior: "smooth", block: "start" });
              // if (window.location.href!='http://localhost:3000/') {
              //   location.href = '/#about';
              // }
            }}
          >
            <p className={styles.headernav}>Contact</p>
          </a>
          <a
            href="/"
            onClick={(e) => {
              const menu = document.getElementById("about");
              e.preventDefault();
              menu &&
                menu.scrollIntoView({ behavior: "smooth", block: "start" });
              // if (window.location.href!='http://localhost:3000/') {
              //   location.href = '/#about';
              // }
            }}
          >
            <p className={styles.headernav}>About</p>
          </a>
        </span>
        <span style={{ display: visibilityDrawer }}>
          <DrawerComponent />
        </span>
      </div>
    </div>
  );
}

export default Header;
