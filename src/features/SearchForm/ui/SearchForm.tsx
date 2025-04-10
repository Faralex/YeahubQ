import styles from "./SearchForm.module.css";
import SearchIcon from "../../../shared/assets/icons/search.svg";
import { SearchFormProps } from "./types";

export const SearchForm = ({ value, onChange, onSubmit }: SearchFormProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className={styles.searchWrapper}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Поиск"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <img src={SearchIcon} alt="Search" className={styles.searchIcon} />
      </div>
    </form>
  );
};
