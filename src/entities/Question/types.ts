import { Question } from "./model/types";

export interface QuestionItemProps {
  question: Question;
  isOpen: boolean;
  isSelected?: boolean;
  onToggle: (id: number) => void;
  onSelect?: (checked: boolean) => void;
  onSkillClickFromCheckbox?: (skillId: number, checked: boolean) => void;
}
