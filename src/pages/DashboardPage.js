import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import SalesRevenueWidget from '../components/SalesRevenueWidget';
import SalesByRegionWidget from '../components/SalesByRegionWidget';
import HRWidget from '../components/HRWidgets';
import CustomerSatisfactionWidget from '../components/CustomerSatisfactionWidget';
import OperationalWidget from '../components/OperationalWidget';
import StrategicWidget from '../components/StrategicWidget';
import Dashboard from '../components/Dashboard'; // Import your Dashboard component

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('Sales'); // Use tab names instead of indices

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="p-6">
      {/* MUI Tabs */}
      <Tabs value={activeTab} onChange={handleTabChange} aria-label="dashboard tabs">
        <Tab label="Sales" value="Sales" />
        <Tab label="Operational" value="Operational" />
        <Tab label="Customer Satisfaction" value="Customer Satisfaction" />
        <Tab label="HR" value="HR" />
        <Tab label="Strategic" value="Strategic Reports" />
      </Tabs>

      {/* Dashboard Component for the active tab */}
      <div className="mt-6">
        <Dashboard activeTab={activeTab} />
      </div>

      {/* Widgets for the Sales Dashboard */}
      {activeTab === 'Sales' && (
        <div className="grid grid-cols-2 gap-6 mt-6">
          <SalesRevenueWidget />
          <SalesByRegionWidget />
        </div>
      )}

      {/* Widgets for Operational Dashboard */}
      {activeTab === 'Operational' && (
        <div className="grid grid-cols-2 gap-6 mt-6">
          <OperationalWidget />
        </div>
      )}

      {/* Widgets for Customer Satisfaction Dashboard */}
      {activeTab === 'Customer Satisfaction' && (
        <div className="grid grid-cols-2 gap-6 mt-6">
          <CustomerSatisfactionWidget />
        </div>
      )}

      {/* Widgets for HR Dashboard */}
      {activeTab === 'HR' && (
        <div className="grid grid-cols-2 gap-6 mt-6">
          <HRWidget />
        </div>
      )}

      {/* Widgets for Strategic Reports */}
      {activeTab === 'Strategic Reports' && (
        <div className="grid grid-cols-2 gap-6 mt-6">
          <StrategicWidget />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
