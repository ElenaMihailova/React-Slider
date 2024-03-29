import styled from 'styled-components';
import {TitleSize} from './title';

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: ${(props) => {
    let fontWeight = '600';
    if (props.$size === TitleSize.BIG) {
      fontWeight = '600';
    }
    return fontWeight;
  }};
  line-height: 100%;
  letter-spacing: -0.576px;
  color: ${(props) => props.color || props.theme.colorForTitle};
  font-size: ${(props) => {
    let fontSize = '24px';
    if (props.$size === TitleSize.BIG) {
      fontSize = '54px';
    }
    return fontSize;
}};
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${(props) => {
      let fontSize = '20px';
      if (props.$size === TitleSize.BIG) {
        fontSize = '50px';
      }
      return fontSize;
    }};
  }
`;
