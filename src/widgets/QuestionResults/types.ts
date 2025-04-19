import { Question } from "../../entities/Question";

export interface Props {
  questions: Question[];
  openedQuestionId: number | null;
  onToggle: (id: number) => void;
  onSkillClickFromQuestion: (skillId: number) => void;
  selectedQuestionIds: number[];
  onSelect: (id: number, checked: boolean) => void;
}
