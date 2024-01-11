import {useContext} from 'react';
import {SliderContext} from '../../blocks/slider/slider';
import {StyledArrow, StyledArrows, StyledArrowIcon} from './styles.js';

function ArrowsSlider() {
  const {changeSlide, slideNumber, slidesCount} = useContext(SliderContext);

  return (
    <StyledArrows>
      <StyledArrow
        disabled={slideNumber === 0}
        direction='left'
        onClick={() => changeSlide(-1)}
        aria-label='Previous slide'
      >
        <StyledArrowIcon />
      </StyledArrow>
      <StyledArrow
        disabled={slideNumber === slidesCount - 1}
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
