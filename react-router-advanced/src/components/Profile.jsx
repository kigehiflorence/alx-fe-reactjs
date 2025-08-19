import { Outlet, Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">User Profile</h1>
      <nav className="space-x-4">
        <Link to="details" className="text-blue-500">Profile Details</Link>
        <Link to="settings" className="text-blue-500">Profile Settings</Link>
      </nav>

      {/* Nested route content will render here */}
      <Outlet />
    </div>
  );
}
