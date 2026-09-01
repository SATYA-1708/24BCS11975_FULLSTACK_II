import { useUser } from "../StudentContext";

function Header() {
  const { name } = useUser();
  return (
    <header className="bg-purple-600 text-white p-4 text-center">
      <h1 className="text-3xl font-bold">STUDYHUB</h1>
      <h3 className="text-lg">Welcome, {name}</h3>
    </header>
  );
}

export default Header;
