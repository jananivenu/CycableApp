import { Link } from 'react-router-dom'
import { MainContainer, SectionContainer } from '../../styles'

const NotFound = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <h1>NOT FOUND</h1>
        <Link to="/">Go home?</Link>
      </SectionContainer>
    </MainContainer>
  )
}
export default NotFound
