import styles from "./SkillItem.module.css";
import { Skill } from "../../model/types";

interface Props {
  skill: Skill;
}

export const SkillItem = ({ skill }: Props) => {
  return <span className={styles.skill}>{skill.title}</span>;
};
