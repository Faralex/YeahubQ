import { Question } from "../../entities/Question";

export interface GetPublicQuestionsArgs {
  page: number;
  limit: number;
  title?: string;
  complexity?: string[];
  skills?: number[];
}

export interface GetPublicQuestionsResponse {
  data: Question[];
  total: number;
  page: number;
  limit: number;
}
