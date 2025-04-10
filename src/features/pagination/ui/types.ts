export type PageNumber = number | "...";

export interface PaginationProps {
  page: number;
  totalPages: number;
  pageNumbers: PageNumber[];
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}
