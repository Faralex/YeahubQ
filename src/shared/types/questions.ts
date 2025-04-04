export interface Question {
  id: number;
  title: string;
  description: string;
  code: string | null;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string; //
  updatedBy: string | null;
  questionSpecializations: Specialization[];
  questionSkills: Skill[];
  profileId: string;
  questionId: number;
  checksCount: number;
  isLearned: boolean;
  lastUpdate: string;
}

export interface Specialization {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Skill {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface QuestionsResponse {
  data: Question[];
  total: number;
  page: number;
  limit: number;
}
