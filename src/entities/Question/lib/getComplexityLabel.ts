import { COMPLEXITY_LABELS } from "../model/constants";
import type { ComplexityLevel } from "../model/types";

export const getComplexityLabel = (level: ComplexityLevel): string => {
  return COMPLEXITY_LABELS[level] || "Неизвестно";
};
