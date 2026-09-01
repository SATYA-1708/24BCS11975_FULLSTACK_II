import { useTaskStats } from "../useTaskStats";

function TaskStats({ tasks }) {
  const { total, remaining } = useTaskStats(tasks);
  return <p className="text-sm text-gray-500 mb-2">{remaining} remaining / {total} total</p>;
}

export default TaskStats;
