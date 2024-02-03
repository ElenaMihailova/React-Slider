import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  padding: ${(props) => props.theme.pagePadding};
  margin-left: auto;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.colorWhite};
  align-items: center;
  box-sizing: border-box;
`;
