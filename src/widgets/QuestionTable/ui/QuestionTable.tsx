import styles from "./QuestionTable.module.css";

export const QuestionTable = () => {
  return (
    <div className={styles.header}>
      <label className={styles.checkboxLabel}>
        <input type="checkbox" />
        <span>Специализация</span>
      </label>
      <span className={`${styles.column} ${styles.title}`}>Название</span>
      <span className={styles.column}>Навыки</span>
    </div>
  );
};
