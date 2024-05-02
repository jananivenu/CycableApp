import truncateText from '../../../utils/useTruncate'
import {formatDate} from '../../../utils/formatDate'
import {MapReportContainer} from './styles'
import MapReportHeader from './Elements/MapReportHeader'
import MapReportFooter from './Elements/MapReportFooter'
import MapReportRow from './Elements/MapReportRow'
import MapReportImg from './Elements/MapReportImg'

function ReportOnMap({report, onClose}) {
    const {id, address, description, created_at, incident_type, images} = report

    const truncatedComment = truncateText(description, 100)
    const date = formatDate(created_at)

    return (
        <MapReportContainer>
            <MapReportHeader type={incident_type} onClose={onClose}/>
            <MapReportImg images={images}/>
            <MapReportRow type="comment" content={truncatedComment}/>
            <MapReportRow type="pin" content={address}/>
            <MapReportRow type="calendar" content={date}/>
            <MapReportFooter id={id}/>
        </MapReportContainer>
    )
}

export default ReportOnMap
