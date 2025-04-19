import {
  handleSearch,
  resetFilters,
  handleCheckboxChange,
} from "../../../features/questionFilters/lib/handlers";

import { handleSkillClickFromQuestion } from "../../../features/questionFilters/lib/handlers/handleSkillClickFromQuestion";

interface UseFilterHandlersProps {
  setSearchParams: (params: any) => void;
  setOpenedQuestionId: (id: number | null) => void;
  complexity: string[];
  selectedSkills: number[];
  title: string;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export function useFilterHandlers({
  setSearchParams,
  setOpenedQuestionId,
  complexity,
  selectedSkills,
  title,
  searchTerm,
  setSearchTerm,
}: UseFilterHandlersProps) {
  const onSearch = () => {
    handleSearch({ setSearchParams, searchTerm, complexity, setOpenedQuestionId });
  };

  const onReset = () => {
    setSearchTerm("");
    resetFilters(setSearchParams);
    setOpenedQuestionId(null);
  };

  const clearSelectedSkills = () => {
    setSearchParams({
      page: "1",
      title,
      complexity: complexity.join(","),
      skills: "",
    });
    setOpenedQuestionId(null);
  };

  const onComplexityChange = (value: string, checked: boolean) => {
    handleCheckboxChange({
      value,
      checked,
      complexity,
      title,
      setSearchParams,
      setOpenedQuestionId,
    });
  };

  const onSkillChange = (id: number, checked: boolean) => {
    const updated = checked ? [...selectedSkills, id] : selectedSkills.filter((s) => s !== id);
    console.log("onSkillChange called!", updated);

    setSearchParams({
      page: "1",
      title,
      complexity: complexity.join(","),
      skills: updated.join(","),
    });

    setOpenedQuestionId(null);
  };

  const onSkillClickFromQuestion = (skillId: number) => {
    handleSkillClickFromQuestion({
      skillId,
      selectedSkills,
      setSearchParams,
      setOpenedQuestionId,
      title,
      complexity,
    });
  };

  const onSkillClickFromCheckbox = (skillId: number, checked: boolean) => {
    handleSkillClickFromQuestion({
      skillId,
      selectedSkills,
      setSearchParams,
      setOpenedQuestionId,
      title,
      complexity,
      checked,
    });
  };

  return {
    onSearch,
    onReset,
    clearSelectedSkills,
    onComplexityChange,
    onSkillChange,
    onSkillClickFromQuestion,
    onSkillClickFromCheckbox,
  };
}
