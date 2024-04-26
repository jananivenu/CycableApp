import { useState } from 'react'
import {
  DeleteButton,
  FileUploadButton,
  HiddenInput,
  ImagePreview,
  ImagePreviewWrapper,
} from './styles'

const Images = ({ onImagesChange }) => {
  const [images, setImages] = useState([])

  const handleFilesChange = (e) => {
    const filesArray = Array.from(e.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }))
    setImages((prevImages) => [...prevImages, ...filesArray])
    onImagesChange(filesArray)
  }

  const handleDeleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index))
  }


  return (
    <>
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
