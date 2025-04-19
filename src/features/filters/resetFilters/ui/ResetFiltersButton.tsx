import { Props } from "../types";
import styles from "./ResetFilters.module.css";

export const ResetFiltersButton = ({ onReset, onClearSelectedSkills }: Props) => {
  const handleClick = () => {
    onReset();
    onClearSelectedSkills?.();
  };

  return (
    <p onClick={handleClick} className={styles.textReset}>
      Удалить выбранное
    </p>
  );
};
