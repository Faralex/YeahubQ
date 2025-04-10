import styles from "./SkillFilter.module.css";
import { Skill } from "../../model/types";

interface Props {
  skills: Skill[];
  selected: number[];
  onChange: (id: number, selected: boolean) => void;
}

export const SkillFilter = ({ skills, selected, onChange }: Props) => {
  return (
    <div className={styles.skillContainer}>
      <h3 className={styles.title}>Навыки</h3>
      <div className={styles.skillList}>
        {skills.map((skill) => {
          const isActive = selected.includes(skill.id);
          return (
            <button
              key={skill.id}
              className={`${styles.skillButton} ${isActive ? styles.active : ""}`}
              onClick={() => onChange(skill.id, !isActive)}
            >
              {skill.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};
