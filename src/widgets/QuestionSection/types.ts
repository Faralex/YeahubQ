import { Question } from "../../entities/Question";
import { Skill } from "../../entities/Skill/model/types";
import { PageNumber } from "../../features/pagination/lib/getVisiblePageNumbers/types";

export interface QuestionSectionProps {
  questions: Question[];
  page: number;
  totalPages: number;
  pageNumbers: PageNumber[];
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  complexity: string[];
  selectedSkills: number[];
  skills: Skill[];
  openedQuestionId: number | null;
  onSearch: () => void;
  onReset: () => void;
  onComplexityChange: (value: string, checked: boolean) => void;
  onToggle: (id: number) => void;
  onPageChange: (newPage: number) => void;
  onSkillChange: (id: number, checked: boolean) => void;
}
