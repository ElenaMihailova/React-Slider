import {createContext, useState} from 'react';
import ArrowsSlider from '../../ui/arrow/arrow';
import SlidesList from '../slidesList/slidesList';
import PropTypes from 'prop-types';

import {SlyledSlider} from './styles.js';

export const SliderContext = createContext();

const Slider = function ({data, width, height}) {
  const [slide, setSlide] = useState(0);
  const visibleSlides = 3;

  const changeSlide = (direction = 1) => {
    let slideNumber = slide + direction;

    let maxSlideNumber = Math.ceil(data.length / visibleSlides) - 1;

    if (slideNumber > maxSlideNumber) {
      slideNumber = maxSlideNumber;
    } else if (slideNumber < 0) {
      slideNumber = 0;
    }
    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % data.length);
  };

  return (
    <SlyledSlider style={{width, height}}>
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: data.length,
          slideNumber: slide,
          items: data,
          visibleSlides,
        }}
      >
        <SlidesList />
        <ArrowsSlider />
      </SliderContext.Provider>
    </SlyledSlider>
  );
};

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Slider.defaultProps = {
  width: '100%',
  height: '100%',
};

export default Slider;
