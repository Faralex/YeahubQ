export interface Props {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  complexity: string[];
  onSearch: () => void;
  onReset: () => void;
  onComplexityChange: (val: string, checked: boolean) => void;
  onClearSelected: () => void;
}
