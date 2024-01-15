import styled from 'styled-components';

const P = styled.p`
  padding: 0;
  margin: 0;
  text-align: center;
  margin-top: ${(props) => props.theme.indent};
`;

export default P;
