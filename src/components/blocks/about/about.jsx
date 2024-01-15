import {StyledAbout} from './styles.js';
import Title from '../../ui/title/title.jsx';
import {StyledCopyright} from '../../ui/copyright/copyright.jsx';

export default function About() {
  return (
    <StyledAbout>
      <Title level='1' size='big'>
        The best photos of the year 2023 from the magazine National Geographic
      </Title>
      <StyledCopyright href='https://www.nationalgeographic.com/premium/graphics/pictures-of-the-year-2023'>
        Information from the website National Geographic
      </StyledCopyright>
    </StyledAbout>
  );
}
