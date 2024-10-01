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
const OperationalWidget = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Order Fulfillment Rate',
        data: [85, 90, 95, 80],
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Operational Efficiency</h2>
      <Line data={data} />
    </div>
  );
};

export default OperationalWidget;
