import { GridTwoColumns, MainContainer, SectionContainer } from '../../styles'
import BarChart from '../../components/Charts/BarChartData.jsx'
import StackedBarChartByHour from '../../components/Charts/BarChartByIncidentType.jsx'
import handleDownloadReports from '../../utils/handleReports.js'
import { SquareButton } from '../../styles/elements/buttons.jsx'
import { StyledH2 } from '../../styles/elements/typography.jsx'
import { TbFileDownload } from 'react-icons/tb'
import { ButtonContainer, NotaBene } from './styles.jsx'

function Statistics() {
  return (
    <MainContainer>
      <SectionContainer>
        <StyledH2>Statistics</StyledH2>

        <GridTwoColumns>
          <BarChart />
          <ButtonContainer>
            <SquareButton onClick={handleDownloadReports}>
              <TbFileDownload /> Download in .geojson
            </SquareButton>
            <NotaBene>
              If necessary, for research purposes, you can download all
              available reports in <strong>.geojson</strong> format. Please cite our project in
              any work that uses these data.
            </NotaBene>
          </ButtonContainer>
        </GridTwoColumns>
        <GridTwoColumns>
          <StackedBarChartByHour />
        </GridTwoColumns>
      </SectionContainer>
    </MainContainer>
  )
}

export default Statistics
