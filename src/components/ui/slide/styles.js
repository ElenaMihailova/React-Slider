import styled from 'styled-components';

export const StyledSlide = styled.article`
  flex: 1 0 30%;
  position: relative;
  height: auto;
  margin-right: 2%;
  opacity: ${(props) => (props.isEmpty ? '0' : '1')};
`;

export const StyledImage = styled.div`
  height: 350px;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.pagePadding};
  box-shadow: 5px 5px 21px -5px rgba(120, 132, 165, 0.61) inset;
`;
