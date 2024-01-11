import {ReactComponent as LogoImage} from '../../../assets/logo.svg';

import {StyledLogo} from './styled';

function Logo() {
  return (
    <StyledLogo href='/'>
      <LogoImage />
    </StyledLogo>
  );
}

export default Logo;
