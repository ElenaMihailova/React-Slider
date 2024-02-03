import styled from 'styled-components';

export const StyledMain = styled.main`
  padding-top: ${(props) => props.theme.pagePadding};
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;
