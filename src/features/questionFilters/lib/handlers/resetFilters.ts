export function resetFilters(setSearchParams: (params: URLSearchParams) => void) {
  setSearchParams(new URLSearchParams({ page: "1" }));
}
