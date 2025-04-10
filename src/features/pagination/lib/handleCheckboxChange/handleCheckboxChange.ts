import { buildParams } from "../../../../shared/lib/buildParams/buildParams";

export const handleCheckboxChange = ({
  value,
  checked,
  complexity,
  title,
  setSearchParams,
  setOpenedQuestionId,
}: {
  value: string;
  checked: boolean;
  complexity: string[];
  title?: string;
  setSearchParams: (params: Record<string, string>) => void;
  setOpenedQuestionId: (val: null) => void;
}) => {
  const newComplexity = checked ? [...complexity, value] : complexity.filter((c) => c !== value);

  setSearchParams(
    buildParams({
      page: 1,
      title,
      complexity: newComplexity,
    })
  );

  setOpenedQuestionId(null);
};
