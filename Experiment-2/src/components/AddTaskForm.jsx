import { useState } from "react";

function AddTaskForm({ dispatch }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      dispatch({ type: "ADD_TASK", payload: text });
      setText("");
    }
  };

  return (
    <div className="flex gap-2 my-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new task"
        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
      />
      <button onClick={handleSubmit} className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700">
        Add Task
      </button>
    </div>
  );
}

export default AddTaskForm;
