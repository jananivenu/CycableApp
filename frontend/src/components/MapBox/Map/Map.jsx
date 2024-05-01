import { useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactMapGl, { GeolocateControl, NavigationControl } from 'react-map-gl'
import { debounce } from 'lodash'
import { fetchReportsByCoordinatesAsync } from '../../../store/slices/reportsSlice'
import createHeatmapData from './utils/mapDataUtils'
import Geolocation from '../Geolocation/Geolocation' //why is doing problem to my map

import MapLoader from './MapLoader'
import MapPopup from '../Popup/MapPopup'
import HeatmapLayer from '../HeatMap/HeatmapLayer'
import MarkersList from '../Markers/MarkersList'

import { MapWrapper } from './styles'
import MapPanel from './MapPanel'

const Map = () => {
  const dispatch = useDispatch()
  const reports = useSelector((state) => state.reports.reports)
  const status = useSelector((state) => state.reports.status)
  const error = useSelector((state) => state.reports.error)
  const mapRef = useRef(null)

  const [popupInfo, setPopupInfo] = useState(null)
  const [viewport, setViewport] = useState({
    latitude: 48.13610080093856,
    longitude: 11.573792222465947,
    zoom: 11,
  })

  const token = import.meta.env.VITE_MAPBOX_TOKEN

  const fetchReportsDebounced = useRef(
    debounce((coords) => {
      dispatch(fetchReportsByCoordinatesAsync(coords))
      console.log('just fetched' + coords)
    }, 1000),
  ).current

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.getMap()
      const bounds = map.getBounds()
      const coords = {
        minLat: bounds.getSouthWest().lat,
        minLng: bounds.getSouthWest().lng,
        maxLat: bounds.getNorthEast().lat,
        maxLng: bounds.getNorthEast().lng,
      }
      fetchReportsDebounced(coords)
    }
  }, [viewport, fetchReportsDebounced])

  const handleMarkerClick = (report) => {
    if (mapRef.current) {
      mapRef.current.getMap().flyTo({
        center: [report.longitude, report.latitude],
        essential: true,
      })
    }
    setPopupInfo(report)
  }
  const heatmapData = createHeatmapData(reports)

  const onClose = useCallback(() => {
    setPopupInfo(null)
  }, [])

  return (
    <MapWrapper>
      {status === 'loading' && <MapLoader />}

      <ReactMapGl
        ref={mapRef}
        {...viewport}
        mapboxAccessToken={token}
        onMove={(evt) => setViewport(evt.viewState)}
        mapStyle="mapbox://styles/mihaels/clvdnhxt3011901qvco3g86vv"
        // dragPan={false}
        scrollZoom={false}
      >
        {viewport.zoom <= 8 && <HeatmapLayer data={heatmapData} />}
        {viewport.zoom >= 8 && (
          <>
            <HeatmapLayer data={heatmapData} />
            <MarkersList
              reports={reports}
              handleMarkerClick={handleMarkerClick}
            />
          </>
        )}

        {popupInfo && <MapPopup report={popupInfo} onClose={onClose} />}

        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={false}
          auto
        />
        <NavigationControl />
      </ReactMapGl>
      <MapPanel reports={reports} />
    </MapWrapper>
  )
}

export default Map
