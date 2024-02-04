import {SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation} from 'swiper/modules';
import Image from '../../styled/image/image';
import {Author} from '../../ui/author/author';
import 'swiper/css/navigation';

import * as Styled from './styles';

function Slider({data}) {
  return (
    <Styled.Slider
      modules={[Navigation]}
      spaceBetween={20}
      loop
      navigation={{prevEl: '.custom-prev', nextEl: '.custom-next'}}
      breakpoints={{
        768: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >
      {data &&
        data.map((slide) => (
          <SwiperSlide key={slide.id} data={slide}>
            <Styled.Wrapper>
              <Styled.Image>
                <Image src={slide.img} />
              </Styled.Image>
              <Author>Design by {slide.author}</Author>
            </Styled.Wrapper>
          </SwiperSlide>
        ))}
      <Styled.Arrows>
        <Styled.Arrow direction='left' className='custom-prev'>
          <Styled.Icon />
        </Styled.Arrow>
        <Styled.Arrow direction='right' className='custom-next'>
          <Styled.Icon />
        </Styled.Arrow>
      </Styled.Arrows>
    </Styled.Slider>
  );
}

export default Slider;
