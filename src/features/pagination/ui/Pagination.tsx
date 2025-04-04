import styles from "./Pagination.module.css";
import { PaginationProps } from "./types";

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
  maxVisiblePages = 10,
}: PaginationProps) => {
  const currentBlock = Math.floor((page - 1) / maxVisiblePages);
  const startPage = currentBlock * maxVisiblePages + 1;
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className={styles.pageButton}
      >
        ← Назад
      </button>

      {pageNumbers.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`${styles.pageButton} ${page === p ? styles.active : ""}`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className={styles.pageButton}
      >
        Вперёд →
      </button>
    </div>
  );
};
