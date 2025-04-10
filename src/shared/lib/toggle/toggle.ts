export const toggleId = (currentId: number | null, clickedId: number): number | null => {
  return currentId === clickedId ? null : clickedId;
};
