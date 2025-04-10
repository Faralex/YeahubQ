import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Question } from "../../entities/Question";
import type { Skill } from "../../entities/Skill/model/types";
import type { GetPublicQuestionsArgs, GetPublicQuestionsResponse } from "./types";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.yeatwork.ru/",
  }),
  endpoints: (builder) => ({
    // Вопросы и фильтры
    getPublicQuestions: builder.query<GetPublicQuestionsResponse, GetPublicQuestionsArgs>({
      query: ({ page, limit, title, complexity, skills }) => {
        const params = new URLSearchParams();
        params.append("page", String(page));
        params.append("limit", String(limit));

        if (title) params.append("title", title);
        if (complexity?.length) params.append("complexity", complexity.join(","));
        if (skills?.length) params.append("skills", skills.join(","));

        return `questions/public-questions?${params.toString()}`;
      },
    }),

    // вопрос по ID
    getPublicQuestionById: builder.query<Question, number>({
      query: (id) => `questions/public-questions/${id}`,
    }),

    // навыкии
    getSkills: builder.query<Skill[], void>({
      query: () => "skills",
    }),
  }),
});

export const { useGetPublicQuestionsQuery, useGetPublicQuestionByIdQuery, useGetSkillsQuery } =
  baseApi;
