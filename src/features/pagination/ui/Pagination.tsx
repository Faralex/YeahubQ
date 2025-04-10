import styles from "./Pagination.module.css";
import { PaginationProps } from "./types";
import PrevIcon from "../../../shared/assets/icons/prevBtn.svg";
import NextIcon from "../../../shared/assets/icons/nextBtn.svg";

export const Pagination = ({ page, totalPages, pageNumbers, onPageChange }: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className={styles.navButton}
      >
        <img className={styles.prevBtn} src={PrevIcon} alt="Назад" />
      </button>

      {pageNumbers.map((p) =>
        p === "..." ? (
          <span key={`dots-${Math.random()}`} className={styles.dots}>
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`${styles.pageButton} ${page === p ? styles.active : ""}`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className={styles.navButton}
      >
        <img src={NextIcon} alt="Вперёд" />
      </button>
    </div>
  );
};
