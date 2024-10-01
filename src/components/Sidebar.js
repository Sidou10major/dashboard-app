import React from 'react';

const Sidebar = () => {
  return (
    <nav className="flex flex-col h-full max-h-full bg-gray-800 text-white p-5">
      <h1 className="text-xl font-bold mb-6">Dashboard</h1>
      <ul className="space-y-4 overflow-y-auto">
        <li className="hover:bg-gray-700 p-2 rounded">
          <a href="/analytics" className="block">Analytics</a>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <a href="/reports" className="block">Reports</a>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <a href="/settings" className="block">Settings</a>
        </li>
        {/* Add more items if needed */}
      </ul>
    </nav>
  );
};

export default Sidebar;