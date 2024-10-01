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
const CustomerSatisfactionWidget = () => {
  const data = {
    labels: ['Satisfied', 'Neutral', 'Unsatisfied'],
    datasets: [
      {
        data: [300, 100, 50],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Customer Satisfaction</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default CustomerSatisfactionWidget;
