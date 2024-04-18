import { MainContainer, SectionContainer } from '../../styles'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../styles/elements/typography'
import CommentList from './CommentList'
import {
  ReportContent,
  ReportCover,
  ReportGridContainer,
  ReportInfo,
  ReportPicture,
} from './styles'

import coverBg from '../../assets/photos/map.png'
import photo from '../../assets/photos/sample.png'
import CaseRow from '../../components/CasePreview/Elements/CaseRow'
import { CaseBodyContainer } from '../../components/CasePreview/styles'

const Report = () => {
  const comments = [
    {
      id: 1,
      userName: 'Rudolf Nureyev',
      comment:
        "It seems like every week there's a new incident on Maximilian-straße. We need a dedicated bike path there, it's overdue!",
      dateTime: '2024-01-12 14:23:45',
    },
    {
      id: 2,
      userName: 'Vaslav Nijinsky',
      comment:
        'This is becoming too common around there. We should petition for better bike lanes and clearer road markings on Maximilianstraße.',
      dateTime: '2024-02-05 18:09:32',
    },
    {
      id: 3,
      userName: 'Isadora Duncan',
      comment: "That's awful, stay safe!",
      dateTime: '2024-03-21 09:17:58',
    },
    {
      id: 4,
      userName: 'Lucia Lacarra',
      comment: 'Just last month, a car almost sideswiped me there.',
      dateTime: '2024-03-28 16:45:12',
    },
    {
      id: 5,
      userName: 'Margot Fonteyn',
      comment:
        'I had a similar fright not long ago right on Maximilianstraße. It was early evening, and a car just zoomed past, barely missing me as I tried to cross at a quieter intersection. The shock of it really stayed with me for days.',
      dateTime: '2024-04-04 20:34:19',
    },
  ]

  return (
    <MainContainer>
      <ReportCover img={coverBg} />
      <ReportGridContainer>
        <ReportInfo>
          <CaseBodyContainer>
            {/* <CaseRow type="pin" content={address} />
            <CaseRow type="calendar" content={date} /> */}
            <CaseRow type="pin" content="Maximilianstraße 16" />
            <CaseRow type="calendar" content="16.01.2024" />
          </CaseBodyContainer>
          <StyledH2>Bicycle Accident</StyledH2>
        </ReportInfo>
        <ReportPicture src={photo} />
        <ReportContent>
          <LeadParagraph>
            Today, while riding on Maximilianstraße, a car suddenly pulled out
            from a side street without looking, causing a collision.
            Fortunately, there were no injuries, but the incident left me
            shaken. The car did not stop, and no police were called. We
            desperately need better enforcement of traffic laws to protect
            cyclists, especially at less visible intersections.
          </LeadParagraph>
        </ReportContent>
      </ReportGridContainer>
      <SectionContainer>
        <StyledH3>Comments</StyledH3>
        <CommentList comments={comments} />
      </SectionContainer>
    </MainContainer>
  )
}

export default Report
