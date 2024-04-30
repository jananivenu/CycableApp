import {MainContainer, SectionContainer} from '../../styles'
import BarChart from "../../components/Charts/BarChartData.jsx";

import StackedBarChartByHour from "../../components/Charts/BarChartByIncidentType.jsx";

function Statistics() {
    return (
        <MainContainer>
            <SectionContainer>
                <h2>Statistics</h2>
                <BarChart/>
                <StackedBarChartByHour/>
            </SectionContainer>

        </MainContainer>
    )
}

export default Statistics
