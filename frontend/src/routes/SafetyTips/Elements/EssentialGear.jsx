import { MainContainer, SectionContainer } from '../../../styles'
import { LeadParagraph, StyledH2 } from '../../../styles/elements/typography'

const EssentialGears = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <StyledH2>Essential Safety Gear</StyledH2>
        <LeadParagraph>
          Learn about the must-have safety gear every cyclist should have before
          hitting the road.
        </LeadParagraph>
        <LeadParagraph>
          <b>Helmet</b>: A properly fitted helmet is the most crucial piece of
          safety gear for cyclists. It protects your head in case of a fall or
          collision and can prevent serious head injuries. Look for helmets that
          meet safety standards and ensure a snug but comfortable fit.
        </LeadParagraph>
        <LeadParagraph>
          <b>Lights</b>: Front and rear lights are essential for increasing your
          visibility, especially during low-light conditions or at night. A
          white front light and a red rear light are required by law in many
          areas, and they help motorists and pedestrians see you from a
          distance.
        </LeadParagraph>
        <LeadParagraph>
          <b>Reflective Gear</b>: Reflective clothing and accessories, such as
          vests, ankle bands, and stickers, enhance your visibility to others on
          the road, particularly in dim lighting or adverse weather conditions.
          Wearing reflective gear makes it easier for drivers to spot you from
          various angles.
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

export default EssentialGears
