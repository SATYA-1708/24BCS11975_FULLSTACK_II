import { createContext, useContext } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const student = {
    name: "Priya Nair",
    email: "priya@gmail.com",
    year: "3rd Year",
  };

  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
};

export const useUser = () => useContext(StudentContext);
