import {StyledAbout} from './styles.js';
import Title from '../../ui/title/title.jsx';
import {P} from '../../styled/index.js';

export default function About() {
  return (
    <StyledAbout>
      <Title level='1' size='big'>
        Полезные материалы
      </Title>
      <P>
        Собрали для вас полезные исследования схемы кормления и другие
        материалы, которые пригодятся для лучших результатов на вашем хозяйстве
      </P>
    </StyledAbout>
  );
}
