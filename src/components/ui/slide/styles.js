import styled from 'styled-components';

export const StyledSlide = styled.article`
  flex: 1 0 auto;
  position: relative;
  width: ${(props) => (props.isLongTitle ? '688px' : '344px')};
  height: 453px;
`;

export const StyledWrapper = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  padding-top: ${(props) => props.theme.indent}
`;
