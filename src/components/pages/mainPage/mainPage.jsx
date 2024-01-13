import Slider from '../../blocks/slider/slider';
import About from '../../blocks/about/about';

function MainPage({data}) {
  return (
    <>
      <About />
      <Slider data={data} />
    </>
  );
}

export default MainPage;
