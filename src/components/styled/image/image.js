import styled from 'styled-components';

const Image = styled.img`
  display: flex;
  margin: 0 auto;
  height: 344px;
  width: 100%;
  object-fit: cover;
  border-radius: ${(props) => props.borderRadiusStyle};
`;

export default Image;
