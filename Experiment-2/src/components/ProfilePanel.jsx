import { useUser } from "../StudentContext";

function ProfilePanel() {
  const { name, email, year } = useUser();
  return (
    <section className="max-w-md mx-auto p-6 my-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Student Details</h2>
      <p className="text-gray-600">Name: {name}</p>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Year: {year}</p>
    </section>
  );
}

export default ProfilePanel;
