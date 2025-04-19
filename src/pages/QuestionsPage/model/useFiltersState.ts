import { useState } from "react";
import { useGetSkillsQuery } from "../../../entities/Skill/api/skillApi";
import { Skill } from "../../../shared/types/questions";

export function useFilterState(initialTitle: string) {
  const [searchTerm, setSearchTerm] = useState(initialTitle);
  const { data: skillsData } = useGetSkillsQuery();
  const skills = skillsData?.data || [];

  return {
    searchTerm,
    setSearchTerm,
    skills: skills as Skill[],
  };
}
