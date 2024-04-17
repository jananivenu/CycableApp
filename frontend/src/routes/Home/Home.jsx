import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { MainContainer, SectionContainer } from '../../styles'
import {
  AccentButton,
  ArticleComment,
  ArticleReport,
  SimpleButton,
} from '../../styles/elements'

const Home = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <h1>Home</h1>
        <fotm>
          <input placeholder="write something"></input>
          <textarea placeholder="want to say something?"></textarea>
          <AccentButton>click me</AccentButton>
        </fotm>
        <SimpleButton>And Me!</SimpleButton>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 750: 3 }}>
          <Masonry gutter="1rem">
            <ArticleComment>Comment look like this</ArticleComment>
            <ArticleReport type="blue">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              nostrum debitis ipsum, possimus fugiat optio illo sint inventore
              similique dolorum.
            </ArticleReport>
            <ArticleReport type="red">Accident report</ArticleReport>
          </Masonry>
        </ResponsiveMasonry>
      </SectionContainer>
    </MainContainer>
  )
}

export default Home
