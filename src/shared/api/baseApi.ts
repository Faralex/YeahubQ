import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { QuestionsResponse, Question } from "../types/questions";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.yeatwork.ru/",
  }),
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<
      QuestionsResponse,
      { page: number; limit: number; title?: string; complexity?: string[] }
    >({
      query: ({ page, limit, title, complexity }) => {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(limit));
        if (title) params.set("title", title);
        if (complexity && complexity.length > 0) {
          params.set("complexity", complexity.join(","));
        }

        return `questions/public-questions?${params.toString()}`;
      },
    }),

    getPublicQuestionById: builder.query<Question, number>({
      query: (id) => `questions/public-questions/${id}`,
    }),
  }),
});

export const { useGetPublicQuestionsQuery, useGetPublicQuestionByIdQuery } = baseApi;
