import React from 'react';
import { Doughnut } from 'react-chartjs-2';
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
const SalesByRegionWidget = () => {
  const data = {
    labels: ['North America', 'Europe', 'Asia', 'South America', 'Africa'],
    datasets: [
      {
        label: 'Sales by Region',
        data: [30000, 20000, 15000, 10000, 5000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Sales by Region</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default SalesByRegionWidget;
