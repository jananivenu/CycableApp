import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  LinearScale,
  Title,
  CategoryScale,
} from 'chart.js'
ChartJS.register(BarController, BarElement, LinearScale, Title, CategoryScale)

import 'chart.js/auto'
import UserAxios from '../../axios/index.jsx'
import { useEffect, useState } from 'react'
import { StyledH3 } from '../../styles/elements/typography.jsx'

const StackedBarChartByHour = () => {
  const [chartData, setChartData] = useState({ datasets: [] })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await UserAxios.get('reports/all/')
      const reports = response.data

      // Initialize counts for each incident type by two-hour intervals
      const incidentTypeCountsByInterval = {
        'Bicycle Accident': Array(12).fill(0),
        'Bicycle Theft': Array(12).fill(0),
        'Dangerous Location': Array(12).fill(0),
      }

      // Count incidents for each incident type by two-hour intervals
      reports.forEach((report) => {
        const date = new Date(report.custom_date)
        const hour = date.getHours()

        let incidentType = ''

        // Determine incident type
        if (report.incident_type === 'bicycle_accident') {
          incidentType = 'Bicycle Accident'
        } else if (report.incident_type === 'bicycle_theft') {
          incidentType = 'Bicycle Theft'
        } else if (report.incident_type === 'near_miss') {
          incidentType = 'Dangerous Location'
        }

        // Increment count for the corresponding incident type and interval
        if (incidentType !== '') {
          const index = Math.floor(hour / 2)
          incidentTypeCountsByInterval[incidentType][index]++
        }
      })
      const timeInterval = [
        '0-2AM',
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
        '10PM-12AM',
      ]
      // Constructing the chart data object
      const data = {
        labels: timeInterval,
        datasets: [
          {
            label: 'Bicycle Accident',
            data: incidentTypeCountsByInterval['Bicycle Accident'],
            backgroundColor: '#EE4266',
          },
          {
            label: 'Bicycle Theft',
            data: incidentTypeCountsByInterval['Bicycle Theft'],
            backgroundColor: '#FFB800',
          },
          {
            label: 'Dangerous Location',
            data: incidentTypeCountsByInterval['Dangerous Location'],
            backgroundColor: '#0075FF',
          },
        ],
      }

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
      setChartData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div>
      <StyledH3>Incidents by two-hour intervals</StyledH3>
      <Bar
        data={chartData}
        options={{ scales: { x: { stacked: true }, y: { stacked: true } } }}
      />
    </div>
  )
}

export default StackedBarChartByHour
