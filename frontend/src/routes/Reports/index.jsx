import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MainContainer, SectionContainer } from '../../styles'
import ReportsList from '../../components/Reports/ReportsList'
import { fetchAllReportsAsync } from '../../store/slices/reportsSlice'

const Reports = () => {
  const dispatch = useDispatch()
  const reports = useSelector((state) => state.reports.reports)
  console.log(reports)
  const status = useSelector((state) => state.reports.status)
  const error = useSelector((state) => state.reports.error)

  useEffect(() => {
    dispatch(fetchAllReportsAsync())
  }, [dispatch])

  if (status === 'loading') {
    return <div>Loading reports...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <MainContainer>
      <SectionContainer>
        <ReportsList reports={reports}/>
      </SectionContainer>
    </MainContainer>
  )
}

export default Reports
