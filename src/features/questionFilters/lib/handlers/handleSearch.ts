import { SearchParams } from "./types";

export function handleSearch({
  setSearchParams,
  searchTerm,
  complexity,
  setOpenedQuestionId,
}: SearchParams) {
  const params = new URLSearchParams();
  params.set("page", "1");
  if (searchTerm) params.set("title", searchTerm);
  if (complexity.length) params.set("complexity", complexity.join(","));

  setSearchParams(params);
  setOpenedQuestionId(null);
}
