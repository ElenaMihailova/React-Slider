import PageWrapper from '../layout/page-wrapper/page-wrapper';
import data from '../../mocks/mockData.js';

import {GlobalStyle} from './styles.js';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper stars={data} />
    </>
  );
}
