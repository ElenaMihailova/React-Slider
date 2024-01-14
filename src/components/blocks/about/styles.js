import styled from 'styled-components';

export const StyledAbout=styled.div`
  padding-bottom: 57px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: 36%;
  max-width: ${(props) => props.theme.pageWidth};
  display: flex;
  flex-direction: column;
  gap: 43px;

  @media (max-width: 768px) {
    padding-right: 5%;
    };
`;
