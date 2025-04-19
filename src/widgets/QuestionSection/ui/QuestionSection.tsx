import { QuestionFilters } from "../../QuestionFilters";
import { QuestionResults } from "../../QuestionResults";
import { QuestionPagination } from "../../QuestionPagination";
import { QuestionSectionProps } from "../types";
import { useState } from "react";
import styles from "./QuestionSection.module.css";

export const QuestionSection = ({ filters, pagination, questions }: QuestionSectionProps) => {
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<number[]>([]);

  const handleQuestionSelect = (id: number, checked: boolean) => {
    setSelectedQuestionIds((prev) => (checked ? [...prev, id] : prev.filter((qId) => qId !== id)));
  };

  const handleClearSelected = () => {
    setSelectedQuestionIds([]);
  };

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.mainContent}>
        <div className={styles.filtersRow}>
          <QuestionFilters
            searchTerm={filters.state.searchTerm}
            setSearchTerm={filters.state.setSearchTerm}
            complexity={filters.state.complexity}
            onSearch={filters.handlers.onSearch}
            onReset={filters.handlers.onReset}
            onComplexityChange={filters.handlers.onComplexityChange}
            onClearSelected={handleClearSelected}
          />
        </div>

        <div className={styles.contentWrapper}>
          <QuestionResults
            questions={questions.list}
            openedQuestionId={questions.openedQuestionId}
            onToggle={questions.onToggle}
            onSkillClickFromQuestion={filters.handlers.onSkillClickFromQuestion}
            selectedQuestionIds={selectedQuestionIds}
            onSelect={handleQuestionSelect}
          />
        </div>

        <QuestionPagination
          page={pagination.page}
          totalPages={pagination.totalPages}
          pageNumbers={pagination.pageNumbers}
          onPageChange={pagination.onPageChange}
        />
      </div>
    </div>
  );
};
