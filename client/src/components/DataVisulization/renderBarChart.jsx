// BarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2'; // Assuming you are using Chart.js for the bar chart

const BarChart = ({ data }) => {
    // Data for the bar chart
    const chartData = {
        labels: data.map((item) => item.label),
        datasets: [
            {
                label: 'Data for Bar Chart',
                data: data.map((item) => item.value),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Options for the bar chart
    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Bar Chart</h2>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default BarChart;