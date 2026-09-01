export const taskReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload;
    case "ADD_TASK":
      return [...state, { id: Date.now(), title: action.payload, completed: false }];
    case "TOGGLE_TASK":
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};
