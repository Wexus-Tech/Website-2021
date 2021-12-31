import styles from "./styles.module.css";

function Card({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.site}>
        <iframe src={project.url} allowFullScreen className={styles.sites} />
      </div>
    </div>
  );
}

export default Card;
