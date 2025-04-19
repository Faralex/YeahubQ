import { Pagination } from "../../../features/pagination";
import { Props } from "../types";

export const QuestionPagination = ({ page, totalPages, pageNumbers, onPageChange }: Props) => {
  return (
    <div>
      <Pagination
        page={page}
        totalPages={totalPages}
        pageNumbers={pageNumbers}
        onPageChange={onPageChange}
      />
    </div>
  );
};
