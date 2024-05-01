import styled from 'styled-components'

export const GalleryModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; // Ensure it's above other content
  width: 90vw; // Use viewport width (vw) for responsiveness
  height: 90vh; // Use viewport height (vh) for responsiveness
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledImageGallery = styled.div`
  .image-gallery {
    width: 100%;
    height: 100%;
  }

  .image-gallery-slide img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
    margin: 0 auto;
    border-radius: 8px; // Optional for rounded corners
  }
`
