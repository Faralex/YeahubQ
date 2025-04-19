import { PageChangeParams } from "./types";

export function handlePageChange({
  newPage,
  setSearchParams,
  title,
  complexity,
  setOpenedQuestionId,
}: PageChangeParams) {
  const params = new URLSearchParams();
  params.set("page", String(newPage));
  if (title) params.set("title", title);
  if (complexity.length) params.set("complexity", complexity.join(","));

  setSearchParams(params);
  setOpenedQuestionId(null);
}
