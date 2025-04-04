import { Question } from "../../../shared/types/questions";

export interface Props {
  questions: Question[];
  openedQuestionId: number | null;
  onToggle: (id: number) => void;
}
