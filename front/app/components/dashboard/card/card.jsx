import styles from "./card.module.css";

const Card = ({ icon: Icon, title, number, detail, change }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}> Total Users </span>
        <span className={styles.number}>10.275</span>
        <span className={styles.detail}>
        <span className={styles.positive}>{change}</span> {detail}
        </span>
      </div>
    </div>
  );
};

export default Card;
