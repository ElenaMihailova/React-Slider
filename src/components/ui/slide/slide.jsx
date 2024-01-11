import Image from '../../styled/image/image.js';
import Title from '../title/title';
import {ThemeContext} from 'styled-components';
import {useContext} from 'react';

import {StyledSlide, StyledWrapper} from './styles.js';
import {Date} from '../date/date.jsx';

function getRandomBorderRadius() {
  const styles = ['220px 0px', '600px', '120px 0px', '0px 220px'];
  return styles[Math.floor(Math.random() * styles.length)];
}

function Slide({data: {img, title, date}}) {
  const isLongTitle = title.length > 35;
  const borderRadiusStyle = isLongTitle ? '600px' : getRandomBorderRadius();

  const theme = useContext(ThemeContext);

  return (
    <StyledSlide isLongTitle={isLongTitle}>
      <Image src={img} alt={title} borderRadiusStyle={borderRadiusStyle} />
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
