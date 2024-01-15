import Image from '../../styled/image/image.js';

import {StyledSlide, StyledWrapper, StyledImage} from './styles.js';
import {Description} from '../description/description.jsx';
import {Author} from '../author/author.jsx';
import {Location} from '../location/location.jsx';

function Slide({data, isDouble, previousBorderRadiusStyle}) {
  const {img, location, description, author} = data;
  const isEmpty = data.isEmpty;

  return (
    <StyledSlide isLongTitle={isDouble} isEmpty={isEmpty}>
      {!isEmpty && (
        <>
          <StyledImage>
            <Image src={img} alt={location} />
          </StyledImage>
          <StyledWrapper>
            <Description>{description}</Description>
            <Author>
              PHOTOGRAPH BY <span>{author}</span>
            </Author>
            <Location>{location}</Location>
          </StyledWrapper>
        </>
      )}
    </StyledSlide>
  );
}

export default Slide;
