import Image from '../../styled/image/image.js';
import Title from '../title/title';
import {ThemeContext} from 'styled-components';
import {useContext} from 'react';

import {StyledSlide, StyledWrapper} from './styles.js';
import {Date} from '../date/date.jsx';

function getRandomBorderRadius(previousStyle) {
  const styles = ['220px 0px', '0px 220px', '50%', '0px 120px', '120px 0px'];
  if (previousStyle === '50%') {
    return styles[Math.floor(Math.random() * 2)];
  }
  return styles[Math.floor(Math.random() * styles.length)];
}

function Slide({data, isDouble, previousBorderRadiusStyle}) {
  const theme = useContext(ThemeContext);

  const {img, title, date} = data;
  const isEmpty = data.isEmpty;

  let borderRadiusStyle;
  if (isDouble) {
    borderRadiusStyle = '600px';
  } else {
    borderRadiusStyle = getRandomBorderRadius(previousBorderRadiusStyle);
  }

  return (
    <StyledSlide isLongTitle={isDouble} isEmpty={isEmpty}>
      {!isEmpty && (
        <>
          <Image src={img} alt={title} borderRadiusStyle={borderRadiusStyle} />
          <StyledWrapper>
            <Title level='2' color={theme.colorGrayDark}>
              {title}
            </Title>
            <Date>{date}</Date>
          </StyledWrapper>
        </>
      )}
    </StyledSlide>
  );
}

export default Slide;
