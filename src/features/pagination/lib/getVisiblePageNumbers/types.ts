export type PageNumber = number | "...";

export interface GetVisiblePageNumbersArgs {
  currentPage: number;
  totalPages: number;
  maxVisiblePages: number;
}
