import {StyledAbout} from './styles.js';
import Title from '../../ui/title/title.jsx';
import {StyledCopyright} from '../../ui/copyright/copyright.jsx';

export default function About() {
  return (
    <StyledAbout>
      <Title level='1' size='big'>
      20 of the Best Book Covers of 2023
      </Title>
      <StyledCopyright href='https://www.printmag.com/book-covers/50-best-book-covers-of-2023/'>
        Information from the website Print
      </StyledCopyright>
    </StyledAbout>
  );
}
