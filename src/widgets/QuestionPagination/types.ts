export interface Props {
  page: number;
  totalPages: number;
  pageNumbers: number[];
  onPageChange: (page: number) => void;
}
