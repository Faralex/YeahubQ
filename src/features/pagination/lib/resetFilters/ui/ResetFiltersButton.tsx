import { Props } from "./types";
import styles from "./ResetFilters.module.css";

export const ResetFiltersButton = ({ searchTerm, complexity, onReset }: Props) => {
  const shouldShow = searchTerm.trim() !== "" || complexity.length > 0;

  if (!shouldShow) return null;

  return (
    <button onClick={onReset} className={styles.button}>
      Сбросить фильтры
    </button>
  );
};
