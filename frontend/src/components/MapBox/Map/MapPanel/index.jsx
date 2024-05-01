import MapCounter from './MapCounter'
import MapFilterMenu from './MapFilterMenu'
import { MapPanelWrapper } from './styles'

function MapPanel({ reports }) {
  return (
    <MapPanelWrapper>
      <MapFilterMenu />
      <MapCounter reports={reports} />
    </MapPanelWrapper>
  )
}

export default MapPanel
