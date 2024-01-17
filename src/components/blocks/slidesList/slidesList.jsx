import {SliderContext} from '../slider/slider';
import {useContext} from 'react';
import Slide from '../../ui/slide/slide';
import {List} from './slideList';

export default function SlidesList() {
  const {slideNumber, items} = useContext(SliderContext);

  return (
    <List style={{transform: `translateX(-${slideNumber * 100}%)`}}>
      {items.map((slide) => (
        <Slide key={slide.id} data={slide} />
      ))}
    </List>
  );
}
