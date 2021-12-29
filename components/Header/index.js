import React, { useEffect, useState } from "react";
import DrawerComponent from "./DrawerComponent";
import styles from "./styles.module.css";
import Link from "next/link";

function Header() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 800) {
        setOpen(false);
      }
    }
  }, []);

  if (process.browser) {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 800) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
  }

  return (
    <div className={styles.header}>
      <Link href="/" passHref={true}>
        <h1 className={styles.brand}>WEXUS</h1>
      </Link>

      {open && (
        <div className={styles.links}>
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
        </div>
      )}
      {!open && <DrawerComponent />}
    </div>
  );
}

export default Header;
