import {useContext} from 'react';
import {SliderContext} from '../../blocks/slider/slider';
import {StyledArrow, StyledArrows, StyledArrowIcon} from './styles.js';

function ArrowsSlider() {
  const {changeSlide, slideNumber, slidesCount, visibleSlides} = useContext(
    SliderContext
  );

  const maxSlideNumber = Math.ceil(slidesCount / visibleSlides) - 1;

  const isPrevDisabled = slideNumber === 0;
  const isNextDisabled = slideNumber >= maxSlideNumber;

  return (
    <StyledArrows>
      <StyledArrow
        direction='left'
        onClick={() => changeSlide(-1)}
        aria-label='Previous slide'
        disabled={isPrevDisabled}
      >
        <StyledArrowIcon />
      </StyledArrow>
      <StyledArrow
        direction='right'
        onClick={() => changeSlide(1)}
        aria-label='Next slide'
        disabled={isNextDisabled}
      >
        <StyledArrowIcon />
      </StyledArrow>
    </StyledArrows>
  );
}

export default ArrowsSlider;
