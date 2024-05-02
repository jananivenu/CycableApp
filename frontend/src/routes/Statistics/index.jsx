import {MainContainer, SectionContainer} from '../../styles'
import BarChart from "../../components/Charts/BarChartData.jsx";

import StackedBarChartByHour from "../../components/Charts/BarChartByIncidentType.jsx";
import handleDownloadReports from "../../utils/handleReports.js";
import {SquareButton} from "../../styles/elements/buttons.jsx";

function Statistics() {
    return (
        <MainContainer>
            <SectionContainer>
                <h2>Statistics</h2>
                <SquareButton
                    onClick={handleDownloadReports}>
                    Download Reports
                </SquareButton>
                <BarChart/>
                <StackedBarChartByHour/>
            </SectionContainer>

        </MainContainer>
    )
}

export default Statistics
