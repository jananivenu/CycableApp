import { useState } from 'react'
import { SectionContainer } from '../../../../styles'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../../../styles/elements/typography'

const TheftReport = () => {
  const [selectedDate, setSelectedDate] = useState('')

  const handleSelectDate = (e) => {
    setSelectedDate(e.target.value)
  }

  return (
    <SectionContainer>
      <StyledH2>Bicycle Theft</StyledH2>
      <LeadParagraph>
        We understand the frustration and inconvenience that comes with having
        your bike stolen. <br />
        Here, you have the opportunity to share your experience and help us
        address this issue within our community. <br />
        Was your bike stolen? Don't hesitate to report it! <br />
        By providing details such as the <em>location</em> and{' '}
        <em>whether your bicycle was locked</em>, you're contributing to
        creating safer streets for cyclists.
      </LeadParagraph>
      <>
        <div>
          <StyledH3>Where?</StyledH3>
          <input placeholder="You can share your geolocation"></input>
        </div>

        <div>
          <StyledH3>Date and Time</StyledH3>
          <label>
            Right Now
            <input type="checkbox" />
          </label>
          OR
          <label>
            Select a Date
            <input
              type="date"
              value={selectedDate}
              onChange={handleSelectDate}
            />
          </label>
        </div>
        <div>
          <StyledH3>Was The Bicycle Locked?</StyledH3>
          <label>
            YES
            <input type="radio" value="true" />
          </label>
          <label>
            NO
            <input type="radio" value="false" />
          </label>
        </div>
        <div>
          <p>
            If possible, please attach photo/s of your stolen bicycle, and, if
            available, include a photo of the location where the bike was
            stolen.
          </p>
          <input type="file" multiple className="fileInput" />
        </div>

        <div>
          <p>
            Feel free to provide more details about the incident below. <br />
            Your contribution assists fellow cyclists by providing valuable
            insights and supporting our efforts to combat bicycle theft in our
            community.:
          </p>
          <textarea placeholder="More details..."></textarea>
        </div>
      </>
    </SectionContainer>
  )
}

export default TheftReport
