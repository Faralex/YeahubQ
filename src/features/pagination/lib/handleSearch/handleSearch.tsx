import { Params } from "./types";

export const handleSearch = ({
  setSearchParams,
  searchTerm,
  complexity,
  setOpenedQuestionId,
}: Params) => {
  setSearchParams({
    page: "1",
    title: searchTerm,
    complexity: complexity.join(","),
  });
  setOpenedQuestionId(null);
};
