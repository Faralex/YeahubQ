import { Link } from "react-router-dom";
import { stripHtml } from "../../../shared/lib/stripHtml/stripHtml";
import { Question } from "../model/types";
import { SpecializationItem } from "../../Specialization";
import ArrowDown from "../../../shared/assets/icons/arrowDown.svg";
import styles from "./QuestionItem.module.css";
import { QuestionItemProps } from "../types";

export const QuestionItem = ({
  question,
  isOpen,
  isSelected = false,
  onToggle,
  onSelect,
  onSkillClickFromCheckbox,
}: QuestionItemProps) => {
  const skillId = question.questionSkills?.[0]?.id;

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    if (!skillId) return;
    onSelect?.(checked);
    onSkillClickFromCheckbox?.(skillId, checked);
  };

  return (
    <li className={styles.questionItem}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={isSelected}
        onChange={handleCheckboxChange}
      />

      <div className={styles.left}>
        <div className={styles.specializations}>
          {question.questionSpecializations?.slice(0, 1).map((spec) => (
            <SpecializationItem key={spec.id} specialization={spec} />
          ))}
        </div>

        <p className={styles.expand} onClick={() => onToggle(question.id)}>
          Развернуть <img src={ArrowDown} alt="Развернуть" className={styles.arrowIcon} />
        </p>
      </div>

      <div className={styles.center}>
        <div className={styles.title} onClick={() => onToggle(question.id)}>
          {question.title}
        </div>

        {isOpen && (
          <div className={styles.details}>
            <p className={styles.shortAnswer}>{stripHtml(question.shortAnswer)}</p>
            <Link to={`/questions/${question.id}`} className={styles.readMore}>
              Читать дальше →
            </Link>
          </div>
        )}
      </div>

      <div className={styles.right}>
        <div className={styles.skills}>
          {question.questionSkills?.map((skill) => (
            <span key={skill.id} className={styles.skill}>
              {skill.title}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};
