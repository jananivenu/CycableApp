import { Source, Layer } from 'react-map-gl'
import { heatmapLayer } from './map-style'

const HeatmapLayer = ({ data }) => {
  return (
    <Source id="heatmap" type="geojson" data={data}>
      <Layer {...heatmapLayer} />
    </Source>
  )
}

export default HeatmapLayer
