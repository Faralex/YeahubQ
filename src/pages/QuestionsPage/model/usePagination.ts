import { getVisiblePageNumbers } from "../../../features/pagination";
import { UsePaginationProps } from "./types";

const QUESTIONS_PER_PAGE = 8;
const MAX_VISIBLE_PAGES = 6;

export function usePagination({
  setSearchParams,
  setOpenedQuestionId,
  title,
  complexity,
  total,
}: UsePaginationProps) {
  const searchParams = new URLSearchParams(window.location.search);
  const page = Number(searchParams.get("page")) || 1;

  const onPageChange = (newPage: number) => {
    setSearchParams({
      page: String(newPage),
      title,
      complexity: complexity.join(","),
    });
    setOpenedQuestionId(null);
  };

  const totalPages = Math.ceil(total / QUESTIONS_PER_PAGE);

  const pageNumbers = getVisiblePageNumbers({
    currentPage: page,
    totalPages,
    maxVisiblePages: MAX_VISIBLE_PAGES,
  });

  return {
    page,
    totalPages,
    pageNumbers,
    onPageChange,
  };
}
