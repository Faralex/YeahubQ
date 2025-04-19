import { Question } from "../../entities/Question";
import { Skill } from "../../entities/Skill/model/types";
import { PageNumber } from "../../features/pagination/lib/getVisiblePageNumbers/types";
export interface QuestionFiltersState {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  complexity: string[];
  selectedSkills: number[];
  skills: Skill[];
}
export interface QuestionFiltersHandlers {
  onSearch: () => void;
  onReset: () => void;
  onComplexityChange: (value: string, checked: boolean) => void;
  onSkillChange: (id: number, checked: boolean) => void;
}
export interface QuestionPagination {
  page: number;
  totalPages: number;
  pageNumbers: (PageNumber | number)[];
  onPageChange: (newPage: number) => void;
}
export interface QuestionData {
  list: Question[];
  openedQuestionId: number | null;
  onToggle: (id: number) => void;
}
export interface QuestionSectionProps {
  filters: {
    state: QuestionFiltersState;
    handlers: QuestionFiltersHandlers;
  };
  pagination: QuestionPagination;
  questions: QuestionData;
}
