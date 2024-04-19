import { useState } from 'react'
import { SectionContainer } from '../../../../styles'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../../../styles/elements/typography'
import { FormTwoColumn } from '../../../../styles/elements/forms'
import { AccentButton } from '../../../../styles/elements/buttons'

const TheftReport = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [isCurrentDate, setIsCurrentDate] = useState(false)
  const [description, setDescription] = useState('')

  const handleSelectDate = (e) => {
    setSelectedDate(e.target.value)
  }

  return (
    <SectionContainer>
      <p>maybe add icon of the type theft</p>
      <StyledH2>Bicycle Theft</StyledH2>
      <LeadParagraph>
        We understand the frustration and inconvenience that comes with having
        your bike stolen. <br />
        Here, you have the opportunity to share your experience and help us
        address this issue within our community. <br /> <br />
        <b>Was your bike stolen? Don't hesitate to report it!</b> <br />
        By providing details such as the <b>location</b> and{' '}
        <b>whether your bicycle was locked</b>, you're contributing to creating
        safer streets for cyclists.
      </LeadParagraph>
      <FormTwoColumn>
        <div>
          <StyledH3>Where?</StyledH3>
          <input placeholder="Click here to select the location"></input>
        </div>

        <div>
          <StyledH3>Date and Time</StyledH3>
          <label>
            Right Now
            <input
              type="checkbox"
              value={isCurrentDate}
              onChange={(e) => setIsCurrentDate(e.target.value)}
            />
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
            <input type="radio" />
          </label>
          <label>
            NO
            <input type="radio" />
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
          <textarea
            placeholder="More details..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <AccentButton>Send</AccentButton>
        </div>
      </FormTwoColumn>
    </SectionContainer>
  )
}

export default TheftReport
