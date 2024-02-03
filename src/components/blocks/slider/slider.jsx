import { Swiper, SwiperSlide } from "swiper/react"; 
import ArrowsSlider from '../../ui/arrow/arrow';
import SlidesList from '../slidesList/slidesList';
import PropTypes from 'prop-types';

import {SlyledSlider} from './styles.js';


const getWidth = () => window.innerWidth;

const Slider = function ({data, width, height}) {

  return (
    <SlyledSlider style={{width, height}} >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: data.length,
          slideNumber: slide,
          items: data,
        }}
      >
        <SlidesList
          translate={translate}
          transition={transition}
          slideWidth={getWidth()}
        />
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
