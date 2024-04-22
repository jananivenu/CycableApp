import { useState } from 'react'
import { InputGroup } from '../../../../styles/elements/forms'

const Description = () => {
  const [description, setDescription] = useState('')
  // fetch the incident_type the user selected, based on that one of these
  //descriptions will be displayed
  return (
    <InputGroup>
      {bicycle_theft && (
        <p>
          Feel free to provide more details about the incident below. Your
          contribution assists fellow cyclists by providing valuable insights
          and supporting our efforts to combat bicycle theft in our community:
        </p>
      )}
      {bicycle_accident && (
        <p>
          Please share additional details about the accident below. Your input
          helps us understand the circumstances and improve safety measures for
          cyclists in our community. Your contribution is vital in promoting
          awareness and ensuring the well-being of fellow riders:
        </p>
      )}
      {near_miss && (
        <p>
          Share your experience regarding near misses or hazardous locations for
          cyclists below. Your input aids in identifying potential risks and
          improving safety measures for our biking community. Your contribution
          is invaluable in creating safer routes and promoting awareness among
          fellow riders:
        </p>
      )}
      {violations && (
        <p>
          There are many places in the city where minor changes would make life
          safer and more convenient for bicyclists. For example, at locations
          where traffic light phases allow safe crossing but there's no
          pedestrian crossing or bike path, simply drawing them could stop such
          crossings from being considered violations. Do you know such places?
          Tell us!
        </p>
      )}
      <textarea
        id="description"
        placeholder="More details..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
    </InputGroup>
  )
}

export default Description
