import {SectionContainer} from '../../../../styles'
import {FormTwoColumn, InputGroup} from '../../../../styles/elements/forms'
import {AccentButton} from '../../../../styles/elements/buttons'
import {LeadParagraph, StyledH2, StyledH3} from '../../../../styles/elements/typography'
//import compose from '../../../../assets/icons/compose.png'
//import {useState} from "react";
import DatePicker from "../Elements/Date/index.jsx";
//import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAccidentReport, setCommonFields} from "../../../../store/slices/reportCreateSlice.js";
import sendReport from "../../../../axios/sendReport.js";
import Images from "../Elements/Images/index.jsx";
import LocationPicker from "../Elements/Location/index.jsx";
import {useState} from "react";
//import {useState} from "react";

//comment
function AccidentReport() {
    const dispatch = useDispatch()
    //const [reportData, setReportData] = useState({})
    const reportData = useSelector((store) => store.report)
    const [uploadedImages, setUploadedImages] = useState([]);
    const INVOLVED_PARTIES_CHOICES = [
        "Car",
        "Bus, trolleybus, tram",
        "Commercial vehicle",
        "Motorcycle",
        "Another bicycle",
        "Pedestrian",
        "E-Scooter",
        "Road markings or infrastructure",
        "Other",
    ];
      const handleImagesChange = (imageFiles) => {
          console.log(imageFiles);
          console.log("we are !!!!")
        setUploadedImages(imageFiles);
    };
    const inputHandler = (e) => {
        const {id, value} = e.target

     if (id === 'was_police_called') {
        dispatch(setAccidentReport({ was_police_called: value }));
    } else if (id === 'involved_parties') {
        dispatch(setAccidentReport({ involved_parties: value }));
    } else {
        dispatch(setCommonFields({ [id]: value }));}
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('description', reportData.description);
        formData.append('longitude', reportData.longitude);
        formData.append('latitude', reportData.latitude);
        formData.append('address', reportData.address);
        formData.append('custom_date', reportData.custom_date);
        formData.append('was_police_called', reportData.was_police_called);
        formData.append('involved_parties', reportData.involved_parties);
        formData.append("incident_type","bicycle_accident")
         uploadedImages.forEach((image) => {
            formData.append('images', image.file);
        });
        try {
            await sendReport(formData)
        } catch (error) {
            console.log('error sending the report:', error)
        }
    }

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
                <LocationPicker/>
                <DatePicker/>
                <div>
                    <StyledH3>Was the police called to document the accident?</StyledH3>
                    <label>
                        <input type="radio"
                               id="was_police_called"
                               value="True"
                               checked={reportData.was_police_called === true}
                               onChange={inputHandler}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="was_police_called"
                            value="False"
                            checked={reportData.was_police_called === false}
                            onChange={inputHandler}
                        />
                        No
                    </label>
                </div>
                <div>
                    <StyledH3>Who was involved in the accident?</StyledH3>
                    <select
                        id="involved_parties"
                        value={reportData.involved_parties}
                        onChange={inputHandler}>
                        <option value="" disabled>Please Choose</option>
                        {
                            INVOLVED_PARTIES_CHOICES.map((party, index) => (
                                <option key={index} value={party}>
                                    {party}
                                </option>
                            ))
                        }</select>
                </div>
                <InputGroup>
                    <p>
                        Please share additional details about the accident below. Your input
                        helps us understand the circumstances and improve safety measures for
                        cyclists in our community. Your contribution is vital in promoting
                        awareness and ensuring the well-being of fellow riders:
                    </p>
                    <textarea
                        id="description"
                        placeholder="More details..."
                        value={reportData.description}
                        onChange={inputHandler}
                        required
                    ></textarea>
                </InputGroup>
                <div>
                    <Images onImagesChange={handleImagesChange}/>
                </div>
                <div>
                    <AccentButton onClick={handleSubmit}>Send</AccentButton>
                </div>
            </FormTwoColumn>
        </SectionContainer>
    )
}

export default AccidentReport
