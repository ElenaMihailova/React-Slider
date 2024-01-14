import {SliderContext} from '../slider/slider';
import {useContext} from 'react';
import Slide from '../../ui/slide/slide';
import {List} from './slideList';

export default function SlidesList() {
  const {slideNumber, items, visibleSlides} = useContext(SliderContext);

  const isDoubleCell = (slide) => slide.title && slide.title.length > 35;

  let screens = [];
  let currentScreen = [];
  let cellCount = 0;
  let startIndex = slideNumber * visibleSlides;
  let totalOffset = 0;

  for (let i = startIndex; i < items.length; i++) {
    let slide = items[i];
    let slideCells = isDoubleCell(slide) ? 2 : 1;

    if (cellCount + slideCells > visibleSlides) {
      screens.push(currentScreen);
      currentScreen = [slide];
      currentScreen = [];
      cellCount = slideCells;
    } else {
      currentScreen.push(slide);
      cellCount += slideCells;
    }
  }

  while (cellCount < visibleSlides) {
    currentScreen.push({isEmpty: true});
    cellCount++;
  }

  if (currentScreen.length > 0) {
    screens.push(currentScreen);
  }

  for (let i = 0; i < startIndex; i++) {
    totalOffset += isDoubleCell(items[i]) ? 2 : 1;
  }

  const offsetPercent = (totalOffset / visibleSlides) * 100;

  return (
    <List style={{transform: `translateX(-${offsetPercent})`}}>
      {screens.map((slides, screenIndex) =>
        slides.map((slide, slideIndex) => (
          <Slide
            key={screenIndex * 100 + slideIndex}
            data={slide}
            isDouble={isDoubleCell(slide)}
          />
        ))
      )}
    </List>
  );
}
