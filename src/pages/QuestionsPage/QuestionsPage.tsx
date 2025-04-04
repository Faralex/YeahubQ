import { useSearchParams } from "react-router-dom";
import { useGetPublicQuestionsQuery } from "../../shared/api/baseApi";
import { useState } from "react";

import { SearchForm, QuestionList, ComplexityFilter } from "../../features/";

import {
  Pagination,
  handlePageChange,
  handleSearch,
  toggleId,
  handleCheckboxChange,
  ResetFiltersButton,
} from "../../features/pagination";

const QUESTIONS_PER_PAGE = 15;
const MAX_VISIBLE_PAGES = 10;

export const QuestionsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const title = searchParams.get("title") || "";
  const rawComplexity = searchParams.get("complexity") || "";
  const complexity = rawComplexity ? rawComplexity.split(",") : [];

  const [searchTerm, setSearchTerm] = useState(title);
  const [openedQuestionId, setOpenedQuestionId] = useState<number | null>(null);

  const { data, isLoading, error } = useGetPublicQuestionsQuery({
    page,
    limit: QUESTIONS_PER_PAGE,
    title,
    complexity,
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

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  const totalPages = Math.ceil((data?.total || 0) / QUESTIONS_PER_PAGE);
  const currentBlock = Math.floor((page - 1) / MAX_VISIBLE_PAGES);
  const startPage = currentBlock * MAX_VISIBLE_PAGES + 1;
  const endPage = Math.min(startPage + MAX_VISIBLE_PAGES - 1, totalPages);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div>
      <h1>Список вопросов</h1>

      {/* Поиск */}
      <SearchForm value={searchTerm} onChange={setSearchTerm} onSubmit={onSearch} />

      {/*Фильтр по сложности */}
      <ComplexityFilter selected={complexity} onChange={onComplexityChange} />

      {/* Сброс фильтров */}
      <ResetFiltersButton
        searchTerm={searchTerm}
        complexity={complexity}
        onReset={onResetFilters}
      />

      {/* Вопросы */}
      <QuestionList
        questions={data?.data || []}
        openedQuestionId={openedQuestionId}
        onToggle={toggleQuestion}
      />

      {/* Пагинация */}
      <Pagination
        page={page}
        totalPages={totalPages}
        pageNumbers={pageNumbers}
        onPageChange={onPageChange}
      />
    </div>
  );
};
