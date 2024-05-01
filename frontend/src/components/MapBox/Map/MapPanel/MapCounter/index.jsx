import { MapCounterNumbers, MapCounterWrapper } from './styles'

function MapCounter({ reports }) {
  const countIncidentsInView = () => {
    const incidentsInView = {}
    reports.forEach((report) => {
      incidentsInView[report.incident_type] =
        (incidentsInView[report.incident_type] || 0) + 1
    })
    return incidentsInView
  }

  const incidentsInView = countIncidentsInView()

  return (
    <MapCounterWrapper>
      <h4>Number of reports</h4>
      <MapCounterNumbers>
        <div>Violations: {incidentsInView['violations'] || 0}</div>
        <div>Bicycle accident: {incidentsInView['bicycle_accident'] || 0}</div>
        <div>Near miss: {incidentsInView['near_miss'] || 0}</div>
        <div>Bicycle theft: {incidentsInView['bicycle_theft'] || 0}</div>
      </MapCounterNumbers>
    </MapCounterWrapper>
  )
}

export default MapCounter
