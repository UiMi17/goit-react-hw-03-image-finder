import PropTypes from 'prop-types';
import { StyledImageGalleryItem, StyledImage } from './StyledImageGalleryItem';

export const ImageGalleryItem = ({ image }) => {
  return (
    <StyledImageGalleryItem onClick={image.handleModalOpen}>
      <StyledImage
        src={image.webformatURL}
        alt={image.tags}
        data-large={image.largeImageURL}
      />
    </StyledImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
