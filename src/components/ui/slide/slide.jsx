import Image from '../../styled/image/image.js';
import Title from '../title/title';
import {ThemeContext} from 'styled-components';
import {useContext, useState, useEffect} from 'react';

import {StyledSlide, StyledWrapper} from './styles.js';
import {Date} from '../date/date.jsx';

function Slide({data: {img, title, date}, updateLastBorderRadius,lastBorderRadius}) {
  const isLongTitle=title.length>35;
  const [borderRadiusStyle, setBorderRadiusStyle] = useState(null);
  const theme=useContext(ThemeContext);
  
  useEffect(() => {
    let styles = ['220px 0px', '120px 0px', '0px 220px'];
    if (lastBorderRadius !== '600px') {
      styles.push('600px');
    }

    const newStyle = styles[Math.floor(Math.random() * styles.length)];
    setBorderRadiusStyle(newStyle);
    updateLastBorderRadius(newStyle);
  }, [lastBorderRadius, updateLastBorderRadius]);

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
