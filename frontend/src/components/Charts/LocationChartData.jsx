
ChartJS.register(BarController, BarElement, LinearScale, Title);
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarController, BarElement, LinearScale, Title } from 'chart.js';

ChartJS.register(BarController, BarElement, LinearScale, Title);

import 'chart.js/auto';
import UserAxios from "../../axios/index.jsx";
import { useEffect, useState } from "react";

const LocationChart = () => {
    // Sample data for the chart
    const [chartData, setChartData] = useState({ datasets: [] });
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await UserAxios.get('reports/all/');
            console.log(response.data)
            const reports = response.data;

            // Grouping reports by latitude and longitude
            const coordinatesCounts = {};
            reports.forEach(report => {
                const { latitude, longitude } = report;
                const key = `${latitude},${longitude}`;
                if (coordinatesCounts[key]) {
                    coordinatesCounts[key]++;
                } else {
                    coordinatesCounts[key] = 1;
                }
            });

            // Constructing the chart data object
            const labels = Object.keys(coordinatesCounts);
            const counts = Object.values(coordinatesCounts);

            const data = {
                labels: labels,
                datasets: [
                    {
                        label: 'Report Counts by Location',
                        data: counts,
                        backgroundColor: 'rgb(75, 192, 192)',
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 1,
                    },
                ],
            };

            setChartData(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h2>Location Chart Example</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default LocationChart;