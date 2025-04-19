import { Question } from "../../../entities/Question";

export interface QuestionListProps {
  questions: Question[];
  openedQuestionId: number | null;
  onToggle: (id: number) => void;
  selectedQuestionIds: number[];
  onSelect?: (id: number, checked: boolean) => void;
  onSkillClickFromCheckbox?: (skillId: number, checked: boolean) => void;
}
