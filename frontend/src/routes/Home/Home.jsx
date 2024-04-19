import Map from '../../components/MapBox/Map/Map'
import { MainContainer, SectionContainer } from '../../styles'
import { AccentButton, SimpleButton } from '../../styles/elements/buttons'
import { BasicForm, FormTwoColumn } from '../../styles/elements/forms'
import { MapContainer, MapIframe } from './styles'

const Home = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <h1>Home</h1>
        <Map />
      </SectionContainer>
    </MainContainer>
  )
}

export default Home
