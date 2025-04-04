export const getPaginationRange = (
  currentPage: number,
  totalPages: number,
  maxVisible: number
): number[] => {
  const currentBlock = Math.floor((currentPage - 1) / maxVisible);
  const startPage = currentBlock * maxVisible + 1;
  const endPage = Math.min(startPage + maxVisible - 1, totalPages);

  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
};
