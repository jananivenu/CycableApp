import MapCounter from './MapCounter'
import DateRangeInline from './MapDataPicker'
import MapFilterMenu from './MapFilterMenu'
import { MapPanelWrapper } from './styles'

function MapPanel({ reports }) {
  return (
    <MapPanelWrapper>
      <DateRangeInline />
      <MapFilterMenu />
      <MapCounter reports={reports} />
    </MapPanelWrapper>
  )
}

export default MapPanel
