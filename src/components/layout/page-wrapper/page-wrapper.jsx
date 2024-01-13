import MainPage from '../../pages/mainPage/mainPage';

import {StyledMain} from './styles.js';

export default function PageWrapper({data}) {
  return (
    <>
      <StyledMain>
        <MainPage data={data} />
      </StyledMain>
    </>
  );
}
