import MainPage from '../../pages/mainPage/mainPage';
import Footer from '../footer/footer.jsx';

import {StyledMain} from './styles.js';

export default function PageWrapper({data}) {
  return (
    <>
      <StyledMain>
        <MainPage data={data} />
      </StyledMain>
      <Footer/>
    </>
  );
}
