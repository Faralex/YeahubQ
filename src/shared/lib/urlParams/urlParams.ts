export function getSearchParamsObject(searchParams: URLSearchParams) {
    const page = Number(searchParams.get("page")) || 1;
    const title = searchParams.get("title") || "";
    const rawComplexity = searchParams.get("complexity") || "";
    const complexity = rawComplexity ? rawComplexity.split(",") : [];
  
    const rawSkills = searchParams.get("skills") || "";
    const selectedSkills = rawSkills ? rawSkills.split(",").map(Number) : [];
  
    return { page, title, complexity, selectedSkills };
  }
  