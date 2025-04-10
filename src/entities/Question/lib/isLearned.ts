import type { Question } from "../model/types";

export const isLearned = (question: Question): boolean => {
  return Boolean(question.isLearned);
};
