export interface UsePaginationProps {
  setSearchParams: (params: any) => void;
  setOpenedQuestionId: (id: number | null) => void;
  title: string;
  complexity: string[];
  total: number;
}
