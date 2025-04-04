import styles from "./ComplexityFilter.module.css";

interface Props {
  selected: string[];
  onChange: (value: string, checked: boolean) => void;
}

export const ComplexityFilter = ({ selected, onChange }: Props) => {
  return (
    <div className={styles.filters}>
      <span>Сложность:</span>
      {[1, 2, 3, 4, 5].map((lvl) => (
        <label key={lvl} className={styles.checkboxLabel}>
          <input
            type="checkbox"
            value={lvl}
            checked={selected.includes(String(lvl))}
            onChange={(e) => onChange(e.target.value, e.target.checked)}
          />
          {lvl}
        </label>
      ))}
    </div>
  );
};
