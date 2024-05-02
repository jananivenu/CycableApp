import { CounterLine, MapCounterNumbers, MapCounterWrapper } from './styles'
import { GoDotFill } from 'react-icons/go'

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
        <CounterLine>
          <GoDotFill style={{ color: 'var(--accent-red)' }} />
          Accidents:
          <strong>{incidentsInView['bicycle_accident'] || 0}</strong>
        </CounterLine>
        <CounterLine>
          <GoDotFill style={{ color: 'var(--accent-orange)' }} />
          Near miss: <strong>{incidentsInView['near_miss'] || 0}</strong>
        </CounterLine>
        <CounterLine>
          <GoDotFill style={{ color: 'var(--accent-blue)' }} />
          Thefts:
          <strong>{incidentsInView['bicycle_theft'] || 0}</strong>
        </CounterLine>
        <CounterLine>
          <GoDotFill style={{ color: 'var(--accent-main)' }} />
          Ideas: <strong>{incidentsInView['violations'] || 0}</strong>
        </CounterLine>
      </MapCounterNumbers>
    </MapCounterWrapper>
  )
}

export default MapCounter
