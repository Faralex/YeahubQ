import { GetVisiblePageNumbersArgs, PageNumber } from "./types";

export const getVisiblePageNumbers = ({
  currentPage,
  totalPages,
  maxVisiblePages,
}: GetVisiblePageNumbersArgs): PageNumber[] => {
  if (totalPages <= maxVisiblePages + 2) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= maxVisiblePages) {
    return [...Array.from({ length: maxVisiblePages }, (_, i) => i + 1), "...", totalPages];
  }

  if (currentPage > totalPages - maxVisiblePages) {
    return [
      1,
      "...",
      ...Array.from({ length: maxVisiblePages }, (_, i) => totalPages - maxVisiblePages + 1 + i),
    ];
  }

  return [
    1,
    "...",
    ...Array.from({ length: maxVisiblePages }, (_, i) => currentPage - 2 + i),
    "...",
    totalPages,
  ];
};
