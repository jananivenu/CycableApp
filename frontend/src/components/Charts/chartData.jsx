import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title} from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

import 'chart.js/auto';
import UserAxios from "../../axios/index.jsx";
import {useEffect, useState} from "react";

const LineChart = () => {
    // Sample data for the chart
    const [chartData, setChartData] = useState({ datasets: [] });
    useEffect(() => {

            fetchData()
        }
        , []);

    const fetchData = async () => {
        try {
            const response = await UserAxios.get('reports/all/');
            console.log(response.data)
            const reports = response.data;

            const incidentTypeCounts = reports.reduce((acc, report) => {
                acc[report.incident_type] = (acc[report.incident_type] || 0) + 1;
                return acc;
            }, {});

            // Extracting labels and values from incidentTypeCounts
            const labels = Object.keys(incidentTypeCounts);
            console.log(labels);
            const values = Object.values(incidentTypeCounts);
            console.log(values);

            // Constructing the chart data object
            const data = {
                labels: labels,
                datasets: [
                    {
                        label: 'Report Values',
                        data: values,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                    },
                ],
            };

            setChartData(data);
            console.log((data))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h2>Line Chart Example</h2>
            <Line data={chartData}/>
        </div>
    );
};
export default LineChart
