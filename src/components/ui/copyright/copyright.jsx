import styled from 'styled-components';

export const StyledCopyright = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colorGreyMediumLight};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  margin-top: 2%;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.5);
  }
`;
