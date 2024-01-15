import {ReactComponent as LogoImage} from '../../../assets/logo.svg';

import {StyledLogo} from './styled';

function Logo() {
  return (
    <StyledLogo href='https://github.com/ElenaMihailova'>
      <LogoImage />
    </StyledLogo>
  );
}

export default Logo;
