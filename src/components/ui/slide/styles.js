import styled from 'styled-components';

export const StyledSlide = styled.article`
  flex: 1 0 auto;
  position: relative;
  width: ${(props) => (props.isLongTitle? '688px':'344px')}; 
  height: 453px;
  margin-right: 2px;
  opacity: ${(props) => (props.isEmpty ? '0' : '1')};
`;

export const StyledWrapper = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  padding-top: ${(props) => props.theme.indent};
`;
