import {createContext, useState, useEffect, useRef} from 'react';
import ArrowsSlider from '../../ui/arrow/arrow';
import SlidesList from '../slidesList/slidesList';
import PropTypes from 'prop-types';

import {SlyledSlider} from './styles.js';

export const SliderContext = createContext();

const getWidth = () => window.innerWidth;

const Slider = function ({data, width, height}) {
  const [items] = useState([]);
  const [slide, setSlide] = useState(0);
  const [transition, setTransition] = useState(0);
  const [translate, setTranslate] = useState(getWidth());

  const sliderRef = useRef();

  useEffect(() => {
    if (transition === 0) {
      setTransition(0.5);
    }
  }, [transition]);

  const changeSlide = (direction = 1) => {
    if (direction === 1) {
      setTranslate(translate + getWidth());
      setSlide(slide === items.length - 1 ? 0 : slide + 1);
    } else {
      setTranslate(0);
      setSlide(slide === 0 ? items.length - 1 : slide - 1);
    }
  };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  return (
    <SlyledSlider style={{width, height}} ref={sliderRef}>
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: data.length,
          slideNumber: slide,
          items: data,
        }}
      >
        <ArrowsSlider />
        <SlidesList
          translate={translate}
          transition={transition}
          slideWidth={getWidth()}
        />
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
