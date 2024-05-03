import { PreviewImage, ReportPreviewImage } from './styles'

function MapReportImg({ images }) {
  return (
    <ReportPreviewImage>
      {images.length > 0 && (
        <PreviewImage  style={{ backgroundImage: `url(${images[0].images})` }} alt="Description" />
      )}
    </ReportPreviewImage>
  )
}

export default MapReportImg
