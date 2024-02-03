import Image from '../../styled/image/image.js';

import {StyledSlide, Wrapper, StyledImage} from './styles.js';
import {Author} from '../author/author.jsx';


function Slide({data}) {
  const {img, author} = data;

  return (
    <StyledSlide>
      <Wrapper>
        <StyledImage>
          <Image src={img} alt={author} />
        </StyledImage>
          <Author>
          Design by {author}
          </Author>
      </Wrapper>
    </StyledSlide>
  );
}

export default Slide;
