import { MainContainer, SectionContainer } from '../../styles'
import {
  AccentButton,
  ArticleReport,
  SimpleButton,
} from '../../styles/elements'
import CasePages from '../../components/CasePreview/CaseReport'
import CaseComment from '../../components/CasePreview/CaseComment'
import MasonryContainer from '../../components/wrappers/MasonryContainer'

const Home = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <h1>Home</h1>
        <form>
          <input placeholder="write something"></input>
          <textarea placeholder="want to say something?"></textarea>
          <AccentButton>click me</AccentButton>
        </form>
        <SimpleButton>And Me!</SimpleButton>

        <MasonryContainer>
          <CaseComment />
          <ArticleReport type="blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            nostrum debitis ipsum, possimus fugiat optio illo sint inventore
            similique dolorum.
          </ArticleReport>
          <ArticleReport type="red">Accident report</ArticleReport>
          <CasePages />
        </MasonryContainer>
      </SectionContainer>
    </MainContainer>
  )
}

export default Home
