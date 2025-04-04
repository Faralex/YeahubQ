export interface Params {
    value: string;
    checked: boolean;
    complexity: string[];
    title: string;
    setSearchParams: (params: Record<string, string>) => void;
    setOpenedQuestionId: (v: null) => void;
  }