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
