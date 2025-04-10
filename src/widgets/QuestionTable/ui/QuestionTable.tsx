import styles from "./QuestionTable.module.css";

export const QuestionTable = () => {
  return (
    <div className={styles.header}>
      <span className={styles.column}>Специализация</span>
      <span className={`${styles.column} ${styles.title}`}>Название</span>
      <span className={styles.column}>Навыки</span>
    </div>
  );
};
