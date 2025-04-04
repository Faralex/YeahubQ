import { Link } from "react-router-dom";
import { stripHtml } from "../../../shared/lib/stripHtml";
import styles from "./QuestionList.module.css";
import { Props } from "./types";

export const QuestionList = ({ questions, openedQuestionId, onToggle }: Props) => {
  return (
    <ul>
      {questions.map((question) => (
        <li key={question.id} className={styles.questionItem}>
          <div onClick={() => onToggle(question.id)} className={styles.questionTitle}>
            {question.title}
          </div>
          {openedQuestionId === question.id && (
            <>
              <p className={styles.shortAnswer}>{stripHtml(question.shortAnswer)}</p>
              <Link to={`/questions/${question.id}`} className={styles.readMore}>
                Читать дальше →
              </Link>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
