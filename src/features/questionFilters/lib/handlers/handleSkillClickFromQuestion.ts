export const handleSkillClickFromQuestion = ({
  skillId,
  selectedSkills,
  setSearchParams,
  setOpenedQuestionId,
  title,
  complexity,
  checked,
}: {
  skillId: number;
  selectedSkills: number[];
  setSearchParams: (params: any) => void;
  setOpenedQuestionId: (id: number | null) => void;
  title: string;
  complexity: string[];
  checked?: boolean;
}) => {
  const updated =
    checked === undefined
      ? selectedSkills.includes(skillId)
        ? selectedSkills.filter((s) => s !== skillId)
        : [...selectedSkills, skillId]
      : checked
      ? [...selectedSkills, skillId]
      : selectedSkills.filter((s) => s !== skillId);

  setSearchParams({
    page: "1",
    title,
    complexity: complexity.join(","),
    skills: updated.join(","),
  });

  setOpenedQuestionId(null);
};
