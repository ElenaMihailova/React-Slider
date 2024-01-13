import {SliderContext} from '../slider/slider';
import {useContext} from 'react';
import Slide from '../../ui/slide/slide';
import {List} from './slideList';

export default function SlidesList() {
  const {slideNumber, items, visibleSlides} = useContext(SliderContext);

  const totalSlides = items.length;

  let startIndex = slideNumber * visibleSlides;

  if (startIndex + visibleSlides > totalSlides) {
    startIndex = totalSlides - (totalSlides % visibleSlides || visibleSlides);
  }

  startIndex = Math.max(0, startIndex);

  let visibleItems = items.slice(startIndex, startIndex + visibleSlides);

  while (visibleItems.length < visibleSlides) {
    visibleItems.push({isEmpty: true});
  }

  return (
    <List>
      {visibleItems.map((slide, id) =>
        slide.isEmpty ? <Slide key={id} /> : <Slide key={id} data={slide} />
      )}
    </List>
  );
}
