import { SearchForm } from "../../../features/SearchForm";
import { ComplexityFilter } from "../../../features";
import { ResetFiltersButton } from "../../../features/filters/resetFilters/ui/ResetFiltersButton";
import styles from "./QuestionFilters.module.css";
import { Props } from "../types";

export const QuestionFilters = ({
  searchTerm,
  setSearchTerm,
  complexity,
  onSearch,
  onReset,
  onComplexityChange,
  onClearSelected,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <SearchForm value={searchTerm} onChange={setSearchTerm} onSubmit={onSearch} />
        <ComplexityFilter selected={complexity} onChange={onComplexityChange} />
      </div>

      <div className={styles.right}>
        <ResetFiltersButton onReset={onReset} onClearSelectedSkills={onClearSelected} />
        <button className={styles.addButton}>Добавить +</button>
      </div>
    </div>
  );
};
