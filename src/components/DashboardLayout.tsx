// DashboardLayout.tsx
import React from "react";
import { Link } from "react-router-dom";

interface IDashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="flex items-center justify-center h-16 shadow-md">
          <h1 className="text-lg font-bold">NYT Dashboard</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/" className="block px-4 py-2 rounded hover:bg-gray-700">
            Home
          </Link>
          <hr />
          <Link to="/property" className="block px-4 py-2 rounded hover:bg-gray-700">
            Properties
          </Link>
          <hr />
          <Link to="/settings" className="block px-4 py-2 rounded hover:bg-gray-700">
            Tenants
          </Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white shadow-md px-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Profile
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
