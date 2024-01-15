import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  margin-left: auto;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.colorWhite};
  align-items: center;
  box-sizing: border-box;
  max-width: 1440px;
  margin: 0 auto;
`;
