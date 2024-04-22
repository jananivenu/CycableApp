import { MainContainer, SectionContainer } from '../../styles'
import { AccentButton, SimpleButton } from '../../styles/elements/buttons'
import { BasicForm, FormTwoColumn } from '../../styles/elements/forms'
import { MapContainer, MapIframe } from './styles'
import Map from '../../components/MapBox/Map/Map'
const Home = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <h1>Home</h1>
        <Map/>
      </SectionContainer>
      <SectionContainer>
        <FormTwoColumn>
          <input placeholder="write something"></input>
          <textarea placeholder="want to say something?"></textarea>
          <AccentButton>click me</AccentButton>
        </FormTwoColumn>
      </SectionContainer>
    </MainContainer>
    
  )
}

export default Home
