import { baseApi } from "../../../shared/api/baseApi";
import type { Skill } from "../model/types";

export const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<Skill[], void>({
      query: () => "skills",
      providesTags: ["Skill"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSkillsQuery } = skillApi;
