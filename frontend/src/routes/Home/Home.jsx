import { MainContainer, SectionContainer } from '../../styles'
import { AccentButton, SimpleButton } from '../../styles/elements'

const Home = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <h1>Home</h1>
        <fotm>
         <input placeholder='write something'></input>
         <textarea placeholder='want to say something?'></textarea>
         <AccentButton>click me</AccentButton>
        </fotm>
        <SimpleButton>And Me!</SimpleButton>
      </SectionContainer>
    </MainContainer>
  )
}

export default Home
