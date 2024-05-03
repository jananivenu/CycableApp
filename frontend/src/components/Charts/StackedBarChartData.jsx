import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend);

import 'chart.js/auto';
import UserAxios from "../../axios/index.jsx";
import { useEffect, useState } from "react";

const StackedBarChart = () => {
    const [chartData, setChartData] = useState({ datasets: [] });
    const getTimePeriod = () => {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    const currentWeek = Math.ceil((today.getDay() + 1 + pastDaysOfYear) / 7);
    return `Week ${currentWeek}`;
};

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await UserAxios.get('reports/all/');
            console.log(response.data);
            const reports = response.data;

            // Group reports by time period (e.g., day) and incident type
            const dataByTimePeriod = {};
            reports.forEach(report => {
                const timePeriod = getTimePeriod();  // Implement a function to get time period (e.g., day, week, month)
                if (!dataByTimePeriod[timePeriod]) {
                    dataByTimePeriod[timePeriod] = {
                        bicycle_accident: 0,
                        violations: 0,
                        bicycle_theft: 0,
                        near_miss: 0
                    };
                }
                dataByTimePeriod[timePeriod][report.incident_type]++;
            });

            // Convert data to chart.js dataset format
            const labels = Object.keys(dataByTimePeriod);
            const datasets = Object.keys(reports[0]).filter(key => key !== 'created_at').map(incidentType => {
                return {
                    label: incidentType,
                    data: labels.map(label => dataByTimePeriod[label][incidentType]),
                    backgroundColor: "salmon",
                    stack: 'Stack 1' // Ensure all datasets belong to the same stack
                };
            });

            const data = {
                labels: labels,
                datasets: datasets
            };
            const options = {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function(value) { if (value % 1 === 0) { return value; } }
                }
            }]
        }
    };

            setChartData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h2>Stacked Bar Chart Example</h2>
            <Bar data={chartData} options={options}/>
        </div>
    );
};

export default StackedBarChart;