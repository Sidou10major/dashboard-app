import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart,
    LineElement,
    BarElement,
    PointElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Register Chart.js components
  Chart.register(
    LineElement,
    BarElement,
    PointElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
  );
const SalesRevenueWidget = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales Revenue',
        data: [12000, 19000, 3000, 5000, 2000, 30000, 45000],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Sales Revenue Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesRevenueWidget;
