export interface Params {
  newPage: number;
  setSearchParams: (params: Record<string, string>) => void;
  title: string;
  complexity: string[];
  setOpenedQuestionId: (id: number | null) => void;
}
