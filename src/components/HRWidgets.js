import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart,
    LineElement,
    BarElement,
    PointElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
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
    RadialLinearScale,
    Title,
    Tooltip,
    Legend
  );
const HRWidget = () => {
  const data = {
    labels: ['Job Satisfaction', 'Productivity', 'Absenteeism', 'Training', 'Turnover Rate'],
    datasets: [
      {
        label: 'HR Metrics',
        data: [65, 59, 90, 81, 56],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl mb-4">HR Metrics</h2>
      <Radar data={data} />
    </div>
  );
};

export default HRWidget;
