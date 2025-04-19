import { QuestionItem } from "../../../entities/Question/ui/QuestionItem";
import { Question } from "../../../entities/Question";
import styles from "./QuestionList.module.css";
import { QuestionListProps } from "./types";

export const QuestionList = ({
  questions,
  openedQuestionId,
  onToggle,
  selectedQuestionIds,
  onSelect,
  onSkillClickFromCheckbox,
}: QuestionListProps) => {
  return (
    <ul className={styles.list}>
      {questions.map((question) => {
        const skillId = question.questionSkills?.[0]?.id;
        const isSelected = skillId ? selectedQuestionIds.includes(skillId) : false;

        return (
          <QuestionItem
            key={question.id}
            question={question}
            isOpen={openedQuestionId === question.id}
            isSelected={isSelected}
            onToggle={onToggle}
            onSelect={(checked) => skillId && onSelect?.(skillId, checked)}
            onSkillClickFromCheckbox={onSkillClickFromCheckbox}
          />
        );
      })}
    </ul>
  );
};
