import React from "react";

const TaskItem = React.memo(({ task, toggleTask, deleteTask }) => (
  <li className="flex items-center justify-between py-2 border-b border-gray-200">
    <span
      className={`cursor-pointer text-gray-800 ${task.completed ? "line-through text-gray-400" : ""}`}
      onClick={() => toggleTask(task.id)}
    >
      {task.title}
    </span>
    <button onClick={() => deleteTask(task.id)} className="text-red-500 text-sm hover:underline">
      Delete
    </button>
  </li>
));

export default TaskItem;
