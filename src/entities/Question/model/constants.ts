import { ComplexityLevel } from "./types";

export const COMPLEXITY_LEVELS: ComplexityLevel[] = [1, 2, 3, 4, 5];

export const COMPLEXITY_LABELS: Record<ComplexityLevel, string> = {
  1: "Очень легко",
  2: "Легко",
  3: "Средне",
  4: "Сложно",
  5: "Очень сложно",
};
