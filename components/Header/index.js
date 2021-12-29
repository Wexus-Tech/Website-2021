import React, { useEffect, useState } from "react";
import DrawerComponent from "./DrawerComponent";
import styles from "./styles.module.css";
import Link from "next/link";

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
    <div className={styles.header}>
      <Link href="/" passHref={true}>
        <h1 className={styles.brand}>WEXUS</h1>
      </Link>
      <div className={styles.links}>
        <span style={{ display: visibilityLinks }}>
          <Link
            href="/"
            passHref={true}
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
            <p className={styles.link}>Services</p>
          </Link>
          <Link
            href="/"
            passHref={true}
            onClick={(e) => {
              const menu = document.getElementById("projects");
              e.preventDefault();
              menu &&
                menu.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <p className={styles.link}>Projects</p>
          </Link>
          <Link
            href="/"
            passHref={true}
            onClick={(e) => {
              const menu = document.getElementById("socials");
              e.preventDefault();
              menu &&
                menu.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <p className={styles.link}>Contact</p>
          </Link>
          <Link
            href="/"
            passHref={true}
            onClick={(e) => {
              const menu = document.getElementById("about");
              e.preventDefault();
              menu &&
                menu.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <p className={styles.link}>About</p>
          </Link>
        </span>
        <span style={{ display: visibilityDrawer }}>
          <DrawerComponent />
        </span>
      </div>
    </div>
  );
}

export default Header;
