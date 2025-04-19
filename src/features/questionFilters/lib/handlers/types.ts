export type PageChangeParams = {
  newPage: number;
  setSearchParams: (params: URLSearchParams) => void;
  title: string;
  complexity: string[];
  setOpenedQuestionId: (id: number | null) => void;
};

export type SearchParams = {
  setSearchParams: (params: URLSearchParams) => void;
  searchTerm: string;
  complexity: string[];
  setOpenedQuestionId: (id: number | null) => void;
};

export type CheckboxParams = {
  value: string;
  checked: boolean;
  complexity: string[];
  title: string;
  setSearchParams: (params: URLSearchParams) => void;
  setOpenedQuestionId: (id: number | null) => void;
};
