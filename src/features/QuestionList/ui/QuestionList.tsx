import { Link } from "react-router-dom";
import { stripHtml } from "../../../shared/lib/stripHtml/stripHtml";
import styles from "./QuestionList.module.css";
import { Props } from "./types";
import { getComplexityLabel, ComplexityLevel } from "../../../entities/Question";
import { SpecializationItem } from "../../../entities/Specialization";

export const QuestionList = ({ questions, openedQuestionId, onToggle }: Props) => {
  return (
    <ul className={styles.list}>
      {questions.map((question) => (
        <li key={question.id} className={styles.questionItem}>
          <div className={styles.left}>
            <div className={styles.specializations}>
              {question.questionSpecializations?.map((spec) => (
                <SpecializationItem key={spec.id} specialization={spec} />
              ))}
            </div>
            <p className={styles.complexity}>
              {getComplexityLabel(question.complexity as ComplexityLevel)}
            </p>
          </div>

          <div className={styles.center}>
            <div className={styles.title} onClick={() => onToggle(question.id)}>
              {question.title}
            </div>

            {openedQuestionId === question.id && (
              <div className={styles.details}>
                <p className={styles.shortAnswer}>{stripHtml(question.shortAnswer)}</p>
                <Link to={`/questions/${question.id}`} className={styles.readMore}>
                  Читать дальше →
                </Link>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
