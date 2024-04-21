import { SectionContainer } from '../../../../styles'
import { FormTwoColumn } from '../../../../styles/elements/forms'
import { AccentButton } from '../../../../styles/elements/buttons'
import { LeadParagraph, StyledH2 } from '../../../../styles/elements/typography'
import LocationPicker from '../Elements/Location'

function LegalReport() {
  return (
    <SectionContainer>
      <StyledH2>Legalizing "Violations"</StyledH2>
      <LeadParagraph>
        There are many places in the city where minor changes would make life
        safer and more convenient for bicyclists. For example, at locations
        where traffic light phases allow safe crossing but there's no pedestrian
        crossing or bike path, simply drawing them could stop such crossings
        from being considered violations. Do you know such places? Tell us!
      </LeadParagraph>
      <FormTwoColumn>
        <LocationPicker />
        <div>
          <input placeholder="Location"></input>
        </div>
        <p>
          If available, attach a photo of the location where improvements are
          needed.
        </p>
        <div>
          <p>Please tell us more about your suggestion or observation.</p>
          <textarea placeholder=""></textarea>
        </div>
        <div>
          <AccentButton>click me</AccentButton>
        </div>
      </FormTwoColumn>
    </SectionContainer>
  )
}

export default LegalReport
