import styled from 'styled-components';

export const StyledLogo = styled.a`
  display: flex;
  height: 44px;
  align-items: center;
  text-decoration: none;

  transition: transform 0.3s ease-in-out;
  &:hover {
    text-decoration: none;
    transform: scale(1.1);
    
  }
`;
