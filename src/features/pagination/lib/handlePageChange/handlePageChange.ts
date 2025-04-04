import { Params } from "./types";
import { buildParams } from "../buildParams/buildParams";

export const handlePageChange = ({
  newPage,
  setSearchParams,
  title,
  complexity,
  setOpenedQuestionId,
}: Params) => {
  setSearchParams(
    buildParams({
      page: newPage,
      title,
      complexity,
    })
  );

  setOpenedQuestionId(null);
};
