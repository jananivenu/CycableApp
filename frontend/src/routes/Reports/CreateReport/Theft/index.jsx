import { useState } from 'react'
import { SectionContainer } from '../../../../styles'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../../../styles/elements/typography'
import { FormTwoColumn } from '../../../../styles/elements/forms'
import { AccentButton } from '../../../../styles/elements/buttons'
import compose from '../../../../assets/icons/compose.png'
import { ComposeIcone } from '../../../../styles/elements/icons'
import { FlexContainer } from './styles'
import { SendReport } from '../../../../axios/sendReport'
import { useNavigate } from 'react-router-dom'

const TheftReport = () => {
  
  const navigate = useNavigate()

  const [reportData, setReportData] = useState([])

  const [selectedDate, setSelectedDate] = useState('')
  const [isUseCurrentTime, SetisUseCurrentTime] = useState(false)
  const [description, setDescription] = useState('')
  const [wasBicycleLocked, setWasBicycleLocked] = useState(false)
  const [address, setAdress] = useState('')
  const [location, setLocation] = useState({ latitude: '', longitude: '' })
  const [images, setImages] = useState([])

  const handleSelectDate = (e) => {
    setSelectedDate(e.target.value)
  }

  // const handleLocationChange = (e) => {
  //   const coordinates = e.target.value.split(',')
  //   setLocation({
  //     latitude: coordinates[0].trim(),
  //     longitude: coordinates[1].trim(),
  //   })
  // }

  const inputHandler= e =>{
    const {id, value}= e.target
    setReportData((prevData)=>{
      ...prevData,
      [id]: value
    
    })
  }

  const handleSubmit=async ()=>{
    try {
      await SendReport(reportData)
      navigate('/')
    }catch(error){
      console.log('error sending the report:', error)
    }
    

  }

  return (
    <SectionContainer>
      <FlexContainer>
        <ComposeIcone src={compose} />
        <StyledH2>Bicycle Theft</StyledH2>
      </FlexContainer>
      <LeadParagraph>
        We understand the frustration and inconvenience that comes with having
        your bike stolen. Here, you have the opportunity to share your
        experience and help us address this issue within our community.
        <b>Was your bike stolen? Don't hesitate to report it!</b>
        By providing details such as the <b>location</b> and
        <b>whether your bicycle was locked</b>, you're contributing to creating
        safer streets for cyclists.
      </LeadParagraph>
      <FormTwoColumn>
        <div>
          <StyledH3>Where?</StyledH3>
          <input
            placeholder="Click here to select the location"
            onChange={inputHandler}
            value={`${reportData.location.latitude}, ${reportData.location.longitude}`}
            required
          />
          <p>If possible, enter the street name</p>
          <input
            placeholder="Street name"
            value={reportData.address}
            onChange={inputHandler}
          />
        </div>

        <div>
          <StyledH3>Date and Time</StyledH3>
          <label>
            Right Now
            <input
              type="checkbox"
              value={reportData.use_current_time}
              onChange={inputHandler}
            />
          </label>
          OR
          <label>
            Select a Date
            <input
              type="date"
              value={reportData.custom_date}
              onChange={inputHandler}
            />
          </label>
        </div>

        <div>
          <StyledH3>Was The Bicycle Locked?</StyledH3>
          <label>
            YES
            <input
              type="radio"
              name="lockStatus"
              value={reportData.was_bicycle_locked}
              checked={reportData.was_bicycle_locked == true}
              onChange={inputHandler}
            />
          </label>
          <label>
            NO
            <input
              type="radio"
              name="lockStatus"
              value={reportData.was_bicycle_locked}
              checked={reportData.was_bicycle_locked == false}
              onChange={inputHandler}
            />
          </label>
        </div>

        <div>
          <p>
            If possible, please attach photo/s of your stolen bicycle, and, if
            available, include a photo of the location where the bike was
            stolen.
          </p>
          <input
            type="file"
            multiple
            className="fileInput"
            value={images}
            onChange={(e) => setImages(e.target.value)}
          />
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
          <AccentButton onClick={handleSubmit}>Send</AccentButton>
        </div>
      </FormTwoColumn>
    </SectionContainer>
  )
}

export default TheftReport
