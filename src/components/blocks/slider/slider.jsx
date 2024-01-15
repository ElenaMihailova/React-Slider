import {createContext, useState, useEffect} from 'react';
import ArrowsSlider from '../../ui/arrow/arrow';
import SlidesList from '../slidesList/slidesList';
import PropTypes from 'prop-types';

import {SlyledSlider} from './styles.js';

export const SliderContext = createContext();
const SLIDE_WIDTH = 344;

const Slider = function ({data, width, height}) {
  const [slide, setSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newVisibleSlides = Math.floor(screenWidth / SLIDE_WIDTH);
      setVisibleSlides(newVisibleSlides);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <ArrowsSlider />
        <SlidesList />
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
