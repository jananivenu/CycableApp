import AnimatedBikeLoading from '../../../trivias/Loading'
import styled from 'styled-components'

const MapLoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  /* transform: translate(-50%, -50%); */
  z-index: 9999;
`

const MapLoader = () => {
  return (
    <MapLoaderWrapper>
      <AnimatedBikeLoading />
    </MapLoaderWrapper>
  )
}

export default MapLoader
