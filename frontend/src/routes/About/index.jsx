import { GridTwoColumns, MainContainer, SectionContainer } from '../../styles'
import {
  LeadParagraph,
  NotaBene,
  StyledA,
  StyledH2,
} from '../../styles/elements/typography'
import Team from './Team'
import logo from '../../assets/ca-logo.png'

function About() {
  return (
    <MainContainer>
      <SectionContainer>
        <StyledH2>About</StyledH2>

        <GridTwoColumns>
          <LeadParagraph>
            With Cycable, cyclists have the power to swiftly report accidents,
            near misses, and hazards encountered on the road. Through seamless
            reporting features and real-time data collection,{' '}
            <strong>we empower cyclists to advocate for safer streets</strong>{' '}
            and promote awareness among fellow riders and city authorities. Join
            us in our mission to make every ride safer.
          </LeadParagraph>
        </GridTwoColumns>
      </SectionContainer>
      <Team />
      <SectionContainer>
        <GridTwoColumns>
          <div></div>
          <NotaBene>
            <img
              src={logo}
              style={{
                marginTop: '2rem',
                marginBottom: '1rem',
                maxWidth: '220px',
              }}
            />
            <p>
              This project was created by participants of the 27th Batch of the{' '}
              <StyledA href="https://academy.constructor.org/full-stack">
                Full-Stack Coding Bootcamp{' '}
              </StyledA>{' '}
              at Constuctor Academy.
            </p>
          </NotaBene>
        </GridTwoColumns>
      </SectionContainer>
    </MainContainer>
  )
}

export default About
