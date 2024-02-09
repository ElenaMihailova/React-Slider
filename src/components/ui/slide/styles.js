import styled from 'styled-components';

export const StyledSlide = styled.article`
  flex: 1 0 33%;
  position: relative;
  height: auto;
  margin-right: 2px;
  opacity: ${(props) => (props.isEmpty ? '0' : '1')};
`;

export const StyledWrapper = styled.div`
  padding: ${(props) => props.theme.indent};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 367/267;

`;
