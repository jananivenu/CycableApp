import { useState } from 'react'
import {
  DeleteButton,
  FileUploadButton,
  HiddenInput,
  ImagePreview,
  ImagePreviewWrapper,
} from './styles'

const Images = () => {
  const [images, setImages] = useState([])

  const bicycle_theft = true
  const bicycle_accident = false
  const near_miss = false
  const violations = false

  const handleFilesChange = (e) => {
    const filesArray = Array.from(e.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }))
    setImages((prevImages) => [...prevImages, ...filesArray])
  }

  const handleDeleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index))
  }

  return (
    <>
      {bicycle_theft && (
        <p>
          If possible, please attach photo/s of your stolen bicycle, and, if
          available, include a photo of the location where the bike was stolen.
        </p>
      )}
      {bicycle_accident && (
        <p>
          If possible, please attach photo/s related to the accident, such as
          images of the scene or the location where the accident occurred.
        </p>
      )}
      {near_miss && (
        <p>
          If possible, please attach any relevant photos related to the near
          miss incident. This could include images of the location,or any
          visible hazards encountered.
        </p>
      )}
      {violations && (
        <p>
          If possible, please attach any relevant photos related to locations
          needing improvements for cyclists. This could include images
          highlighting areas lacking pedestrian crossings, bike paths, or other
          safety measures.
        </p>
      )}
      <HiddenInput
        id="images"
        type="file"
        multiple
        className="fileInput"
        onChange={handleFilesChange}
      />
      <FileUploadButton htmlFor="images">Upload Photos</FileUploadButton>
      <ImagePreviewWrapper>
        {images.map((image, index) => (
          <ImagePreview
            key={index}
            style={{ backgroundImage: `url(${image.preview})` }}
          >
            <DeleteButton onClick={() => handleDeleteImage(index)}>
              <i className="las la-times"></i>
            </DeleteButton>
          </ImagePreview>
        ))}
      </ImagePreviewWrapper>
    </>
  )
}

export default Images
