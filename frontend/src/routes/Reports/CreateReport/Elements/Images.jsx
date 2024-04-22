import { useState } from 'react'

const Images = () => {
  const [images, setImages] = useState([])
  const bicycle_theft = true
  const bicycle_accident = false
  const near_miss = false
  const violations = false
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
      <input
        id="images"
        type="file"
        multiple
        className="fileInput"
        value={images || ''}
        onChange={(e) => setImages(e.target.value)}
      />
    </>
  )
}

export default Images
