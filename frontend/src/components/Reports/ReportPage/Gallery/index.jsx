
import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { GalleryModal, StyledImageGallery } from './styles';

const Gallery = ({ images, showGallery, setShowGallery }) => {
    // Check if 'images' is an array and has items before mapping
    const galleryImages = Array.isArray(images) ? images.map(img => ({
      original: img?.images || '', // Use optional chaining and provide a fallback
      thumbnail: img?.images || '', // Use optional chaining and provide a fallback
    })) : [];
  
    if (!showGallery || galleryImages.length === 0) return null;
  
    return (
      <GalleryModal>
        <StyledImageGallery>
          <ImageGallery
            items={galleryImages}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            onClick={() => setShowGallery(false)}
          />
        </StyledImageGallery>
      </GalleryModal>
    );
  };

export default Gallery;
