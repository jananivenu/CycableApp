import { ArticleReport } from '../../styles/elements'
import CaseRow from './Elements/CaseRow'
import { CaseBodyContainer } from './styles'

function CasePages() {
  return (
    <ArticleReport type="red">
      <CaseBodyContainer>
        <CaseRow type="pin" content="Maximilianstraße 16" />
        <CaseRow type="calendar" content="16.01.2024" />
        <CaseRow
          type="comment"
          content="  Today, while riding on Maximilianstraße, a car suddenly pulled out from a side street without looking, causing a collision. Fortunately, there were no injuries, but the incident left me shaken. The car did not stop, and no police were called. We desperately need better enforcement of traffic laws to protect cyclists, especially at less visible intersections."
        />
      </CaseBodyContainer>
    </ArticleReport>
  )
}

export default CasePages
