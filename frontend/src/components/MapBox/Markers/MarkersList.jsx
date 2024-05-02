import MarkerComponent from './MarkerComponent'

const MarkersList = ({ reports, handleMarkerClick }) => {
  return (
    <>
      {reports.map((report, index) => (
        <MarkerComponent
          key={index}
          report={report}
          handleMarkerClick={() => handleMarkerClick(report)}
        />
      ))}
    </>
  )
}

export default MarkersList
