import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllReportsAsync } from '../../store/slices/reportsSlice'
import AnimatedBikeLoading from '../../components/trivias/Loading'
import ReportsList from '../../components/Reports/ReportsList'
import { MainContainer, SectionContainer } from '../../styles'


const Reports = () => {
  const dispatch = useDispatch()
  const reports = useSelector((state) => state.reports.reports)
  const status = useSelector((state) => state.reports.status)
  const error = useSelector((state) => state.reports.error)

  useEffect(() => {
    dispatch(fetchAllReportsAsync())
  }, [dispatch])

  if (status === 'loading') {
    return <AnimatedBikeLoading />
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <MainContainer>
      <SectionContainer>
        <ReportsList reports={reports} />
      </SectionContainer>
    </MainContainer>
  )
}

export default Reports
