import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  LinearScale,
  Title,
} from 'chart.js'
ChartJS.register(BarController, BarElement, LinearScale, Title)

import 'chart.js/auto'
import UserAxios from '../../axios/index.jsx'
import { useEffect, useState } from 'react'
import { StyledH3 } from '../../styles/elements/typography.jsx'

const BarChart = () => {
  // Sample data for the chart
  const [chartData, setChartData] = useState({ datasets: [] })
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await UserAxios.get('reports/all/')
      const reports = response.data

      const incidentTypeCounts = reports.reduce((acc, report) => {
        acc[report.incident_type] = (acc[report.incident_type] || 0) + 1
        return acc
      }, {})

      // Extracting labels and values from incidentTypeCounts
      const labels = [
        'Bicycle Accident',
        'Legalize Violations',
        'Bicycle Theft',
        'Dangerous Location',
      ]
      const values = Object.values(incidentTypeCounts)

      // Constructing the chart data object
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'No of Reports for each Incident type',
            data: values,
            // backgroundColor: ['var(--accent-main)','var(--accent-red)','var(--accent-blue)','var(--accent-orange)'],
            //backgroundColor:  ["pink", "Thistle", "azure","PaleGreen"],
            backgroundColor: ['#EE4266', '#20B69E', '#FFB800', '#0075FF'],
            borderColor: 'WhiteSmoke',
            borderWidth: 10,
          },
        ],
      }

      setChartData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div>
      <StyledH3>Number of reports for each incident type</StyledH3>
      <Bar data={chartData} options={{ legend: { display: false } }} />
    </div>
  )
}

export default BarChart
