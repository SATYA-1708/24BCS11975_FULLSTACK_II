import { StudentProvider } from "./StudentContext";
import Header from "./components/Header";
import ProfilePanel from "./components/ProfilePanel";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <StudentProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <ProfilePanel />
        <TaskManager />
      </div>
    </StudentProvider>
  );
}

export default App;
