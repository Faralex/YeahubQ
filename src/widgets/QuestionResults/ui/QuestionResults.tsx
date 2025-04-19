import { QuestionList } from "../../QuestionList";
import { QuestionTable } from "../../QuestionTable";
import styles from "./QuestionResults.module.css";
import { Props } from "../types";

export const QuestionResults = ({
  questions,
  openedQuestionId,
  onToggle,
  selectedQuestionIds,
  onSelect,
  onSkillClickFromQuestion,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <QuestionTable />
      <div className={styles.content}>
        <div className={styles.list}>
          <QuestionList
            questions={questions}
            openedQuestionId={openedQuestionId}
            onToggle={onToggle}
            selectedQuestionIds={selectedQuestionIds}
            onSelect={onSelect}
            onSkillClickFromCheckbox={onSkillClickFromQuestion}
          />
        </div>
      </div>
    </div>
  );
};
