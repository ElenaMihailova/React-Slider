import {useContext} from 'react';
import {SliderContext} from '../../blocks/slider/slider';
import {StyledArrow, StyledArrows, StyledArrowIcon} from './styles.js';

function ArrowsSlider() {
  const {changeSlide} = useContext(SliderContext);

  return (
    <StyledArrows>
      <StyledArrow
        direction='left'
        onClick={() => changeSlide(-1)}
        aria-label='Previous slide'
      >
        <StyledArrowIcon />
      </StyledArrow>
      <StyledArrow
        direction='right'
        onClick={() => changeSlide(1)}
        aria-label='Next slide'
      >
        <StyledArrowIcon />
      </StyledArrow>
    </StyledArrows>
  );
}

export default ArrowsSlider;
