import { StyledButton } from './StyledButton';

export const Button = ({ handleLoadMoreBtnClick }) => {
  return (
    <StyledButton type="button" onClick={handleLoadMoreBtnClick}>
      Load more
    </StyledButton>
  );
};
