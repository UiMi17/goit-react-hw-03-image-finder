import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './StyledImageGallery';

export const ImageGallery = ({ images, handleModalOpen }) => {
  return (
    <StyledImageGallery>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            image={{ webformatURL, tags, largeImageURL, handleModalOpen }}
          />
        );
      })}
    </StyledImageGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired),
  handleModalOpen: PropTypes.func.isRequired,
};
