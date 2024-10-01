import React from 'react';
import DashboardPage from './pages/DashboardPage';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Reports from './components/Reports';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <div className="flex  h-screen max-h-full">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white ">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="w-3/4 bg-gray-100">
          <Routes>
            {/* Define Routes */}
            <Route path="/" element={<DashboardPage />} />
            {/* You can add more routes here */}
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            {/* Redirect to dashboard for unknown paths */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
