import { ReportPreviewFooter, ShowDetailsLink } from './styles'
import { TbSquareRoundedArrowRight } from "react-icons/tb";
import { LuXSquare } from 'react-icons/lu'

function MapReportFooter({ id }) {
  const detailUrl = `/reports/${id}`

  return (
    <ReportPreviewFooter>
      <div>
      </div>
      <ShowDetailsLink to={detailUrl}>
        show details <TbSquareRoundedArrowRight />
      </ShowDetailsLink>
    </ReportPreviewFooter>
  )
}

export default MapReportFooter
