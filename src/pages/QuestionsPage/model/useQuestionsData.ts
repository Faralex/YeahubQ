import { useGetPublicQuestionsQuery } from "../../../entities/Question/api/questionApi";
import { getSearchParamsObject } from "../../../shared/lib/urlParams/urlParams";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const QUESTIONS_PER_PAGE = 8;

export function useQuestionsData() {
  const [searchParams] = useSearchParams();
  const { page, title, complexity, selectedSkills } = getSearchParamsObject(searchParams);
  const [openedQuestionId, setOpenedQuestionId] = useState<number | null>(null);

  const { data, isLoading, error } = useGetPublicQuestionsQuery({
    page,
    limit: QUESTIONS_PER_PAGE,
    title,
    complexity,
    skills: selectedSkills,
  });

  return {
    openedQuestionId,
    setOpenedQuestionId,
    questions: data?.data || [],
    total: data?.total || 0,
    isLoading,
    error,
  };
}
