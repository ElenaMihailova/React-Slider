import {SliderContext} from '../slider/slider';
import {useContext} from 'react';
import Slide from '../../ui/slide/slide';
import {List} from './slideList';
import {useState} from 'react';

export default function SlidesList({slides}) {
  const {slideNumber, items, visibleSlides} = useContext(SliderContext);
  const [lastBorderRadius, setLastBorderRadius] = useState(null);

  return (
    <List style={{transform: `translateX(-${slideNumber * 100 / visibleSlides}%)`}}>
      {items.slice(slideNumber * visibleSlides, (slideNumber + 1) * visibleSlides).map((slideData, index) => (
        <Slide
          key={index}
          data={slideData}
          lastBorderRadius={lastBorderRadius}
updateLastBorderRadius={setLastBorderRadius}
        />
      ))}
    </List>
  );
}
