import { useQuestionsData } from "./useQuestionsData";
import { useFilters } from "./useFilters";
import { usePagination } from "./usePagination";
import { useState } from "react";

export function useQuestions() {
  const { openedQuestionId, setOpenedQuestionId, questions, total, isLoading, error } =
    useQuestionsData();

  const [selectedQuestionIds, setSelectedQuestionIds] = useState<number[]>([]);

  const filters = useFilters(setOpenedQuestionId);
  const pagination = usePagination({
    setSearchParams: filters.setSearchParams,
    setOpenedQuestionId,
    title: filters.title,
    complexity: filters.state.complexity,
    total,
  });

  const handleQuestionSelect = (id: number, checked: boolean) => {
    setSelectedQuestionIds((prev) => (checked ? [...prev, id] : prev.filter((qId) => qId !== id)));
  };

  const handleClearSelected = () => setSelectedQuestionIds([]);

  return {
    filters,
    pagination,
    questions: {
      list: questions,
      openedQuestionId,
      onToggle: (id) => setOpenedQuestionId((prev) => (prev === id ? null : id)),
      selectedQuestionIds,
      onSelect: handleQuestionSelect,
    },
    ui: {
      isLoading,
      error,
    },
    clearSelection: handleClearSelected,
  };
}
