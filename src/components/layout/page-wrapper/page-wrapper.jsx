import MainPage from '../../pages/mainPage/mainPage';

import {StyledMain} from './styles.js';

export default function PageWrapper({...prop}) {
  return (
    <>
      <StyledMain>
        <MainPage/>
      </StyledMain>
    </>
  );
}
