import styles from "./QuestionInfoPanel.module.css";

interface Props {
  complexity: number;
  rating: number;
  skills: string[];
  keywords: string[];
  author: string;
}

export const QuestionInfoPanel = ({ complexity, rating, skills, keywords, author }: Props) => {
  return (
    <>
      <div className={styles.panel}>
        <div className={styles.block}>
          <h3 className={styles.label}>Уровень:</h3>
          <div className={styles.levels}>
            <span className={styles.levelDiff}>
              Сложность: <span className={styles.levelValue}>{complexity}</span>
            </span>
            <span className={styles.levelRating}>
              Рейтинг: <span className={styles.levelValue}>{rating}</span>
            </span>
          </div>
        </div>

        <div className={styles.block}>
          <h3 className={styles.label}>Навыки:</h3>
          <div className={styles.tags}>
            {skills?.map((skill) => (
              <span key={skill} className={styles.tag}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <h3 className={styles.label}>Ключевые слова:</h3>
          <div className={styles.keywords}>
            {keywords?.map((word) => (
              <span key={word} className={styles.keyword}>
                #{word}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.author}>
        <span>
          <span className={styles.authorLabel}>Автор:</span>{" "}
          <span className={styles.authorName}>{author}</span>
        </span>
      </div>
    </>
  );
};
