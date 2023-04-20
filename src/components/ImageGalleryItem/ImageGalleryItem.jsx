import { StyledImageGalleryItem, StyledImage } from './StyledImageGalleryItem';

export const ImageGalleryItem = ({ image }) => {
  return (
    <StyledImageGalleryItem>
      <StyledImage src={image.webformatURL} alt={image.tags} />
    </StyledImageGalleryItem>
  );
};
