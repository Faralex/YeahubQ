export function toggleId(currentId: number | null, targetId: number): number | null {
  return currentId === targetId ? null : targetId;
}
