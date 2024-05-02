import { PreviewImage, ReportPreviewImage } from './styles'

function MapReportImg({ images }) {
  return (
    <ReportPreviewImage>
      {images.length > 0 && (
        <PreviewImage src={images[0].images} alt="Description" />
      )}
    </ReportPreviewImage>
  )
}

export default MapReportImg
