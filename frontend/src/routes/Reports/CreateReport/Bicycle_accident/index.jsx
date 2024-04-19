import { SectionContainer } from '../../../../styles'
import { FormTwoColumn } from '../../../../styles/elements/forms'
import { AccentButton } from '../../../../styles/elements/buttons'
import { LeadParagraph, StyledH2 } from '../../../../styles/elements/typography'

function BicyclaccidentReport() {
  return (
    <SectionContainer>
      <StyledH2>Bicycle Accident</StyledH2>
      <LeadParagraph>
        We hear a lot of Bicycle Accidents!Mostly because the people are not following rules,
          or run into potholes or unkempt roads.Sometimes it is unfortunate.Maybe he lane is too small for two vehicles to be on the same lane/oppposite to each other.
          Please report your incident here,so that it can get a larger audience,and also that people are BikeAware.
      </LeadParagraph>
        <FormTwoColumn>
            <div>
                <input placeholder="Location"></input>
            </div>
            <p>
                If available, attach a photo of the location where improvements are
                needed.
            </p>
            <div>
                <input placeholder="Location"></input>
            </div>
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

export default BicyclaccidentReport
