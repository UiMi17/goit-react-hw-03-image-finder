import { Component } from 'react';
import { StyledOverlay, StyledModal } from './StyledModal';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.handleModalClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.handleModalClose);
  }
  render() {
    const { image, handleModalClose } = this.props;

    return (
      <StyledOverlay onClick={handleModalClose}>
        <StyledModal>
          <img
            src={image.largeImageURL}
            alt={image.alt}
            width="800"
            height="600"
          />
        </StyledModal>
      </StyledOverlay>
    );
  }
}
