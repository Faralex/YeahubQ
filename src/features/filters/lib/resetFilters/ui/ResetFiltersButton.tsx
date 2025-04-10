import { Props } from "./types";
import styles from "./ResetFilters.module.css";

export const ResetFiltersButton = ({ onReset }: Props) => {
  return (
    <p onClick={onReset} className={styles.textReset}>
      Удалить выбранное
    </p>
  );
};
