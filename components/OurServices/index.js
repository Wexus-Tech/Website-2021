import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import ServiceCard from "../ServiceCard";
import styles from "./styles.module.css";

function OurServices() {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <p>What we have to offer</p>
        <hr style={{ marginTop: -10 }} />
      </div>
      <div className={styles.cards} onClick={handleClickOpen}>
        <ServiceCard title="UI/UX Design" imgSrc="/assets/images/phone.png" />
        <ServiceCard
          title="Web/App Development"
          imgSrc="/assets/images/rocket.png"
        />
        <ServiceCard
          onClick={handleClickOpen}
          title="Digital Marketing"
          imgSrc="/assets/images/graph.png"
        />
      </div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <div className={styles.modal}>hi</div>
      </Dialog>
    </div>
  );
}

export default OurServices;
