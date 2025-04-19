import { CheckboxParams } from "./types";

export function handleCheckboxChange({
  value,
  checked,
  complexity,
  title,
  setSearchParams,
  setOpenedQuestionId,
}: CheckboxParams) {
  const updated = checked ? [...complexity, value] : complexity.filter((v) => v !== value);

  const params = new URLSearchParams();
  params.set("page", "1");
  if (title) params.set("title", title);
  if (updated.length) params.set("complexity", updated.join(","));

  setSearchParams(params);
  setOpenedQuestionId(null);
}
