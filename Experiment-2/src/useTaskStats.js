import { useMemo } from "react";

export const useTaskStats = (tasks) => {
  return useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const remaining = total - completed;
    return { total, completed, remaining };
  }, [tasks]);
};
