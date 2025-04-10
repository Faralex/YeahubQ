import { SearchForm } from "../../../features/SearchForm";
import { ComplexityFilter } from "../../../features/ComplexityFilter";
import { ResetFiltersButton } from "../../../features/pagination";
import { QuestionList } from "../../../features/QuestionList";
import { Pagination } from "../../../features/pagination";
import { SkillFilter } from "../../../entities/Skill";
import { QuestionSectionProps } from "../types";
import { QuestionTable } from "../../QuestionTable/ui/QuestionTable";
import styles from "./QuestionSection.module.css";

export function QuestionSection({
  questions,
  page,
  totalPages,
  pageNumbers,
  complexity,
  searchTerm,
  setSearchTerm,
  selectedSkills,
  skills,
  openedQuestionId,
  onSearch,
  onReset,
  onComplexityChange,
  onToggle,
  onPageChange,
  onSkillChange,
}: QuestionSectionProps) {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.mainContent}>
        <div className={styles.filtersRow}>
          <SearchForm value={searchTerm} onChange={setSearchTerm} onSubmit={onSearch} />
          <ComplexityFilter selected={complexity} onChange={onComplexityChange} />
          <ResetFiltersButton searchTerm={searchTerm} complexity={complexity} onReset={onReset} />
        </div>

        <QuestionTable />

        <div className={styles.contentWrapper}>
          <QuestionList
            questions={questions}
            openedQuestionId={openedQuestionId}
            onToggle={onToggle}
          />
          <SkillFilter skills={skills} selected={selectedSkills} onChange={onSkillChange} />
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          pageNumbers={pageNumbers}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
