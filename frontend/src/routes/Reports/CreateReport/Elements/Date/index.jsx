import {InputGroup, QuestionGroup} from "../../../../../styles/elements/forms.jsx";
import {StyledH3} from "../../../../../styles/elements/typography.jsx";
import {useState} from "react";
import {DateText, FlexContainer} from "./styles.js";
import {formatDateTime} from "../../../../../utils/formatDateandTime.js";


function DatePicker() {
    const [useCurrentTime, setUseCurrentTime] = useState(false);
    const [customTime, setCustomTime] = useState('');
    const handleCheckboxChange = (event) => {
        setUseCurrentTime(event.target.checked);
    };

    // Function to handle custom time change
    const handleCustomTimeChange = (event) => {
        formatDateTime(setCustomTime(event.target.value));
    };
    return (<QuestionGroup>
        <StyledH3>Date and Time</StyledH3>
        <InputGroup>
            <FlexContainer>
                <label>

                    <input
                        type="checkbox"
                        checked={useCurrentTime}
                        onChange={handleCheckboxChange}
                    />
                    <DateText>Right Now</DateText>
                </label>
                {!useCurrentTime && (
                    <input
                        type="datetime-local"
                        value={customTime}
                        onChange={handleCustomTimeChange}
                    />
                )}
                {/*<p>{useCurrentTime ? formatDateTime(new Date()) : formatDateTime(customTime)}</p>*/}
            </FlexContainer>
        </InputGroup>

    </QuestionGroup>)
}

export default DatePicker