import Image from '../../styled/image/image.js';
import Title from '../title/title';
import {ThemeContext} from 'styled-components';
import {useContext} from 'react';

import {StyledSlide, StyledWrapper} from './styles.js';
import {Date} from '../date/date.jsx';

function Slide({data}) {
  const theme = useContext(ThemeContext);

  if (!data) {
    return <StyledSlide />;
  }

  const {img, title, date} = data;

  return (
    <StyledSlide>
      <Image src={img} alt={title} />
      <StyledWrapper>
        <Title level='2' color={theme.colorGrayDark}>
          {title}
        </Title>
        <Date>{date}</Date>
      </StyledWrapper>
    </StyledSlide>
  );
}

export default Slide;
