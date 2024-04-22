import {SectionContainer} from '../../../../styles'
import {FormTwoColumn} from '../../../../styles/elements/forms'
import {AccentButton} from '../../../../styles/elements/buttons'
import {LeadParagraph, StyledH2, StyledH3} from '../../../../styles/elements/typography'
import compose from '../../../../assets/icons/compose.png'
import {useState} from "react";
import DatePicker from 'react-datepicker';


function AccidentReport() {
    const [selectedParty, setSelectedParty] = useState('')
    const [isUseCurrentTime, SetisUseCurrentTime] = useState(false)
    const [selectedValue, setSelectedValue] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)
    const [selectedDate, setSelectedDate] = useState('')
    const handleInvolvedPartyChange = (e) => {
        setSelectedParty(e.target.value)
    }
    const handleSelectDate = (e) => {
        setSelectedDate(e.target.value)
    }
    const handleOptionChange = (event) => {
        setSelectedValue(event.target.value === 'true');
    };
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        // Automatically trigger file upload when a file is selected
        uploadFile(event.target.files[0]);
    };
    const uploadFile = (file) => {
        if (file) {
            // To Perform upload logic here, such as sending the file to a server
            console.log('Uploading file:', file);
            // Clear the selected file after upload
            setSelectedFile(null);
        } else {
            alert('Please select a file to upload.');
        }
    };
    return (
        <SectionContainer>
            <StyledH2>Bicycle Accident</StyledH2>
            <LeadParagraph>
                We hear a lot of Bicycle Accidents!Mostly because the people are not following rules,
                or run into potholes or unkempt roads.Sometimes it is unfortunate!!Maybe he lane is too small for two
                vehicles to be on the same lane/oppposite to each other.
                Please report your incident here,so that it can get a larger audience,and also that people are
                BikeAware.
            </LeadParagraph>
            <FormTwoColumn>
                <div>
                    <StyledH3>Where?</StyledH3>
                    <input placeholder="You can share your geolocation"></input>
                </div>
                <div>
                    <StyledH3>Date and Time</StyledH3>
                    <label>
                        Right Now
                        <input
                            type="checkbox"
                            value={isUseCurrentTime}
                            onChange={(e) => SetisUseCurrentTime(e.target.value)}
                        />
                    </label>
                    OR
                    <label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                        </label>
                </div>
                <div>
                    <StyledH3>Was the police called to document the accident?</StyledH3>
                    <label>
                        <input type="radio"
                               value="true"
                               checked={selectedValue === true}
                               onChange={handleOptionChange}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="false"
                            checked={selectedValue === false}
                            onChange={handleOptionChange}
                        />
                        No
                    </label>
                </div>
                <div>
                    <StyledH3>Who was involved in the accident?</StyledH3>
                    <select placeholder="Please choose"
                            value={selectedParty}
                            onChange={handleInvolvedPartyChange}
                    />
                </div>
                <div>
                    <StyledH3>Comment</StyledH3>
                    <textarea placeholder="Please describe the details of the incident"></textarea>
                </div>
                <div>
                    <StyledH3>Photo</StyledH3>
                    <input type="file" onChange={handleFileChange}/>
                    <br/>
                    {selectedFile && <p>Selected File: {selectedFile.name}</p>}
                </div>
                <div>
                    <AccentButton>Send</AccentButton>
                </div>
            </FormTwoColumn>
        </SectionContainer>
    )
}

export default AccidentReport
