import { Specialization } from "../../Specialization";

export interface Question {
  id: number;
  title: string;
  description: string;
  shortAnswer: string;
  longAnswer: string;
  complexity: ComplexityLevel;
  rate: number;
  createdAt: string;
  updatedAt: string;
  isLearned?: boolean;
  questionSpecializations?: Specialization[];
}

export type ComplexityLevel = 1 | 2 | 3 | 4 | 5;
