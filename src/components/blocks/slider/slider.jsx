import {createContext, useState, useEffect} from 'react';
import ArrowsSlider from '../../ui/arrow/arrow';
import SlidesList from '../slidesList/slidesList';
import data from '../../../mocks/mockData.js';
import PropTypes from 'prop-types';

import {SlyledSlider} from './styles.js';

export const SliderContext=createContext();


const Slider = function ({width, height}) {
  const [items] = useState(data);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const updateVisibleSlides = () => {
      const screenWidth = window.innerWidth;
      setVisibleSlides(screenWidth > 768 ? 3 : 1);
    };

    window.addEventListener('resize', updateVisibleSlides);
    updateVisibleSlides();

    return () => {
      window.removeEventListener('resize', updateVisibleSlides);
    };
  }, []);

  const changeSlide = (direction = 1) => {
    let newSlideNumber = slide + (direction * visibleSlides);
    newSlideNumber = Math.max(0, newSlideNumber);
    newSlideNumber = Math.min(newSlideNumber, items.length - visibleSlides);
    setSlide(newSlideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  return (
    <SlyledSlider
      style={{width, height}}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
          visibleSlides,
          canChangeSlide: items.length > 1,
        }}
      >
        <SlidesList />
        <ArrowsSlider />
      </SliderContext.Provider>
    </SlyledSlider>
  );
};

Slider.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Slider.defaultProps = {
  width: '100%',
  height: '100%',
};

export default Slider;
