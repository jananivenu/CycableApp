import { ComposeIconTitleWrapper } from '../../../../../styles'
import { LeadParagraph, StyledH2 } from '../../../../../styles/elements/typography'
import composeIcon from '../../../../../assets/icons/compose.png'
import { ComposeIcone } from '../../../../../styles/elements/icons'

function AboutForm({ title, children }) {
  return (
    <>
      <ComposeIconTitleWrapper>
        <ComposeIcone src={composeIcon} />
        <StyledH2>{title}</StyledH2>
      </ComposeIconTitleWrapper>
      <LeadParagraph>{children}</LeadParagraph>
    </>
  )
}

export default AboutForm
