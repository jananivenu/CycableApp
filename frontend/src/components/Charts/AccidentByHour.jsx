import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS, BarController, BarElement, LinearScale, Title} from 'chart.js';

ChartJS.register(BarController, BarElement, LinearScale, Title);

import 'chart.js/auto';
import UserAxios from "../../axios/index.jsx";
import {useEffect, useState} from "react";

const BarChartByHour = () => {
    const [chartData, setChartData] = useState({datasets: []});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await UserAxios.get('reports/all/');
            const reports = response.data;
            //console.log(response.data);

            const incidentTypeCountsByInterval = {
                dayAccidents: 0,
                nightAccidents: 0,
                midnightAccidents: 0,
                predawnAccidents: 0,
                earlyMorningAccidents: 0,
                morningAccidents: 0,
                lateNightAccidents: 0,
                offTimeDayAccidents: 0,
                noonAccidents: 0,
                afterNoonAccidents: 0,
                EveningAccidents: 0,
                lateEveningAccidents: 0
            };
            reports.forEach(report => {
                const date = new Date(report.custom_date);
                console.log(date)
                const hour = date.getHours();
                console.log(hour)

                // Two Hours gap for every time of the day
                if (hour >= 0 && hour < 2) {
                    incidentTypeCountsByInterval.midnightAccidents++;
                } else if (hour >= 2 && hour < 4) {
                    incidentTypeCountsByInterval.predawnAccidents++;
                } else if (hour >= 4 && hour < 6) {
                    incidentTypeCountsByInterval.earlyMorningAccidents++;
                }  else if (hour >= 6 && hour < 8) {
                    incidentTypeCountsByInterval.morningAccidents++;
                } else if (hour >= 8 && hour < 10) {
                    incidentTypeCountsByInterval.dayAccidents++;
                } else if (hour >= 10 && hour < 12) {
                    incidentTypeCountsByInterval.offTimeDayAccidents++;
                } else if (hour >= 12 && hour < 14) {
                    incidentTypeCountsByInterval.noonAccidents++;
                } else if (hour >= 14 && hour < 16) {
                    incidentTypeCountsByInterval.afterNoonAccidents++;
                } else if (hour >= 16 && hour < 18) {
                    incidentTypeCountsByInterval.EveningAccidents++;
                } else if (hour >= 18 && hour < 20) {
                    incidentTypeCountsByInterval.lateEveningAccidents++;
                } else if (hour >= 20 && hour < 22) {
                    incidentTypeCountsByInterval.nightAccidents++;
                } else {
                    incidentTypeCountsByInterval.lateNightAccidents++;
                }
            });


            // Constructing the chart data object
            const data = {
                labels: ['0-2AM',
'2-4AM',
'4-6AM',
'6-8AM',
'8-10AM',
'10AM-12PM',
'12-2PM',
'2-4PM',
'4-6PM',
'6-8PM',
'8-10PM ',
'10PM-12AM'],
                datasets: [
                    {
                        label: 'Accidents Count',
                        data: Object.values(incidentTypeCountsByInterval),
                        backgroundColor: ["skyblue"],
                        borderColor: "WhiteSmoke",
                        borderWidth: 1,
                    },
                ],
            };

            setChartData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h2>Day vs Night Accidents</h2>
            <Bar data={chartData}/>
        </div>
    );
};
export default BarChartByHour;
