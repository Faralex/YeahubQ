import { useSearchParams } from "react-router-dom";
import { useGetPublicQuestionsQuery, useGetSkillsQuery } from "../../shared/api/baseApi";
import { useState } from "react";
import { Question as EntityQuestion } from "../../entities/Question";
import {
  handlePageChange,
  handleSearch,
  handleCheckboxChange,
  toggleId,
  getVisiblePageNumbers,
} from "../../features/pagination";
import { QuestionSection } from "../../widgets/QuestionSection";
import { Header } from "../../widgets/Header/ui/Header";
import { Skill } from "../../shared/types/questions";

const QUESTIONS_PER_PAGE = 8;
const MAX_VISIBLE_PAGES = 6;

export const QuestionsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const title = searchParams.get("title") || "";
  const rawComplexity = searchParams.get("complexity") || "";
  const complexity = rawComplexity ? rawComplexity.split(",") : [];

  const rawSkills = searchParams.get("skills") || "";
  const selectedSkills = rawSkills ? rawSkills.split(",").map(Number) : [];

  const [searchTerm, setSearchTerm] = useState(title);
  const [openedQuestionId, setOpenedQuestionId] = useState<number | null>(null);

  const { data: skillsData } = useGetSkillsQuery();
  const skills = skillsData?.data || [];

  const { data, isLoading, error } = useGetPublicQuestionsQuery({
    page,
    limit: QUESTIONS_PER_PAGE,
    title,
    complexity,
    skills: selectedSkills,
  });

  const onPageChange = (newPage: number) =>
    handlePageChange({
      newPage,
      setSearchParams,
      title,
      complexity,
      setOpenedQuestionId,
    });

  const onSearch = () =>
    handleSearch({
      setSearchParams,
      searchTerm,
      complexity,
      setOpenedQuestionId,
    });

  const onComplexityChange = (value: string, checked: boolean) =>
    handleCheckboxChange({
      value,
      checked,
      complexity,
      title,
      setSearchParams,
      setOpenedQuestionId,
    });

  const toggleQuestion = (id: number) => {
    setOpenedQuestionId((prev) => toggleId(prev, id));
  };

  const onResetFilters = () => {
    setSearchTerm("");
    setSearchParams({ page: "1" });
    setOpenedQuestionId(null);
  };

  const handleSkillChange = (id: number, checked: boolean) => {
    const updated = checked ? [...selectedSkills, id] : selectedSkills.filter((s) => s !== id);

    setSearchParams({
      page: "1",
      title,
      complexity: complexity.join(","),
      skills: updated.join(","),
    });

    setOpenedQuestionId(null);
  };

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  const totalPages = Math.ceil((data?.total || 0) / QUESTIONS_PER_PAGE);
  const pageNumbers = getVisiblePageNumbers({
    currentPage: page,
    totalPages,
    maxVisiblePages: MAX_VISIBLE_PAGES,
  });

  return (
    <div>
      <Header />
      <QuestionSection
        questions={(data?.data as EntityQuestion[]) || []}
        page={page}
        totalPages={totalPages}
        pageNumbers={pageNumbers}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        complexity={complexity}
        selectedSkills={selectedSkills}
        skills={skills as Skill[]}
        openedQuestionId={openedQuestionId}
        onSearch={onSearch}
        onReset={onResetFilters}
        onComplexityChange={onComplexityChange}
        onToggle={toggleQuestion}
        onPageChange={onPageChange}
        onSkillChange={handleSkillChange}
      />
    </div>
  );
};
