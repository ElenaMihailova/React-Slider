import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body,
html {
  margin: 0;
}

body {
  position: relative;
  min-height: 100%;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 133%;
  font-weight: 400;
  color: ${(props) => props.theme.colorBlackForText};

  #root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  }
}
`;
