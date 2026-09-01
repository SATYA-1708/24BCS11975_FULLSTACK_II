import { useReducer, useCallback } from "react";
import { taskReducer } from "../taskReducer";
import TaskStats from "./TaskStats";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

const initialTasks = [
  { id: 1, title: "Finish DBMS assignment", completed: false },
  { id: 2, title: "Revise React hooks", completed: false },
  { id: 3, title: "Submit lab report", completed: true },
];

function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const toggleTask = useCallback((id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  }, []);

  const deleteTask = useCallback((id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  }, []);

  return (
    <section className="max-w-md mx-auto p-6 my-4 bg-white rounded-lg shadow">
      <TaskStats tasks={tasks} />
      <AddTaskForm dispatch={dispatch} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </section>
  );
}

export default TaskManager;
