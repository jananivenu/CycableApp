import { MainContainer, SectionContainer } from '../../../styles'
import { LeadParagraph, StyledH2 } from '../../../styles/elements/typography'

const Emergency = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <StyledH2>Emergency Preparedness</StyledH2>
        <LeadParagraph>
          Learn about the must-have safety gear every cyclist should have before
          hitting the road.
        </LeadParagraph>
        <LeadParagraph>
          <b>First Aid Kit:</b>: Carry a compact first aid kit specifically
          tailored for cycling emergencies. Include essentials such as adhesive
          bandages, gauze pads, antiseptic wipes, medical tape, blister
          treatment, tweezers, scissors, and pain relievers.
        </LeadParagraph>
        <LeadParagraph>
          <b>Location Tracking</b>: Consider using a cycling app or GPS device
          with live tracking features to share your location in real-time with
          trusted contacts or emergency services. This can be particularly
          helpful if you're cycling alone or in remote areas where assistance
          may be limited.
        </LeadParagraph>
        <LeadParagraph>
          <b>Cell Phone</b>: Always carry a fully charged cell phone with you
          while cycling. In case of emergencies, you can use your phone to call
          for help, contact emergency services, or inform family or friends of
          your location and situation.
        </LeadParagraph>
        <LeadParagraph>
          <b>Bike Lock</b>: A reliable bike lock is essential for securing your
          bike when parked to prevent theft. Choose a high-quality lock, such as
          a U-lock or heavy-duty chain, and secure your bike to a fixed object
          in a well-lit area.
        </LeadParagraph>
      </SectionContainer>
    </MainContainer>
  )
}

export default Emergency
