import { baseApi } from "../../../shared/api/baseApi";
import type { Question } from "../model/types";
import type { GetPublicQuestionsArgs, GetPublicQuestionsResponse } from "../../../shared/api/types";

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
      providesTags: ["Question"],
    }),

    getPublicQuestionById: builder.query<Question, number>({
      query: (id) => `questions/public-questions/${id}`,
      providesTags: ["Question"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetPublicQuestionsQuery, useGetPublicQuestionByIdQuery } = questionApi;
