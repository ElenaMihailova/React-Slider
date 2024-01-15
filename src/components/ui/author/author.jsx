import styled from 'styled-components';

import {P} from '../../styled/index';

export const Author = styled(P)`
  color: ${(props) => props.theme.colorGreyMediumLight};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  text-align: left;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
`;
