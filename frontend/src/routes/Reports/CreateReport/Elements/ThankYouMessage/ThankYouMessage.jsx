import { LeadParagraph } from '../../../../../styles/elements/typography'
import { SuccessMsg } from '../../styles'

function ThankYouMessage() {
  return (
    <SuccessMsg>
      <LeadParagraph>
        Thank you for taking time and reporting the incident via our App. Your
        contribution helps in making our streets safer for cyclists. We
        appreciate your cooperation and concern for the biking community.
      </LeadParagraph>
      <p>--- From Your Stories to Safer Streets ---</p>
    </SuccessMsg>
  )
}

export default ThankYouMessage
