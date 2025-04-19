import { useSearchParams } from "react-router-dom";
import { useFilterState } from "./useFiltersState";
import { useFilterHandlers } from "./useFiltersHandlers";
import { getSearchParamsObject } from "../../../shared/lib/urlParams/urlParams";

export function useFilters(setOpenedQuestionId: (id: number | null) => void) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { title, complexity, selectedSkills } = getSearchParamsObject(searchParams);

  const state = useFilterState(title);
  const handlers = useFilterHandlers({
    setSearchParams,
    setOpenedQuestionId,
    complexity,
    selectedSkills,
    title,
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
  });

  return {
    state: {
      ...state,
      complexity,
      selectedSkills,
    },
    handlers,
    title,
    setSearchParams,
  };
}
