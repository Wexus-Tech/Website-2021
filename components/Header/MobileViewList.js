import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Avatar } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function MobileViewList() {
  return (
    <List>
      <Avatar
        src="/assets/images/logo.png"
        style={{
          height: 100,
          width: 100,
          marginRight: "auto",
          marginLeft: "auto",
          marginBottom: "10px",
          marginTop: "30px",
        }}
      />
      <Link
        passHref={true}
        href="/#services"
        className={styles.headernav}
        style={{
          color: "#000",
          opacity: 0.5,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ListItem>
          <ListItemText primary="Services" />
        </ListItem>
      </Link>

      <Link
        passHref={true}
        href="/#projects"
        className={styles.headernav}
        style={{
          color: "#000",
          opacity: 0.5,
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <ListItem>
          <ListItemText primary="Projects" />
        </ListItem>
      </Link>

      <Link
        passHref={true}
        href="/#contact"
        className={styles.headernav}
        style={{
          color: "#000",
          opacity: 0.5,
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <ListItem>
          <ListItemText primary="Contact" />
        </ListItem>
      </Link>
      <Link
        passHref={true}
        href="/#about"
        className={styles.headernav}
        style={{
          color: "#000",
          opacity: 0.5,
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <ListItem>
          <ListItemText primary="About" />
        </ListItem>
      </Link>
      <hr style={{ color: "#636262", width: "90%", opacity: 0.2 }} />
    </List>
  );
}

export default MobileViewList;
