export interface Params {
  setSearchParams: (params: Record<string, string>) => void;
  searchTerm: string;
  complexity: string[];
  setOpenedQuestionId: (value: null) => void;
}
