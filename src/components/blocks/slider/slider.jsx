import {createContext, useState, useEffect} from 'react';
import ArrowsSlider from '../../ui/arrow/arrow';
import SlidesList from '../slidesList/slidesList';
import data from '../../../mocks/mockData.js';
import PropTypes from 'prop-types';

import {SlyledSlider} from './styles.js';

export const SliderContext = createContext();

const Slider = function ({width, height, autoPlay, autoPlayTime}) {
  const [items, setItems] = useState(data);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const changeSlide = (direction = 1) => {
    let slideNumber = slide + direction;

    if (slideNumber >= items.length) {
      slideNumber = items.length - 1;
    } else if (slideNumber < 0) {
      slideNumber = 0;
    }

    setSlide(slideNumber);
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
