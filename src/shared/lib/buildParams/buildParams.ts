export const buildParams = ({
  page,
  title,
  complexity,
}: {
  page: number;
  title?: string;
  complexity?: string[];
}) => {
  const params: Record<string, string> = {
    page: String(page),
  };

  if (title?.trim()) {
    params.title = title;
  }

  if (complexity && complexity.length > 0) {
    params.complexity = complexity.join(",");
  }

  return params;
};
