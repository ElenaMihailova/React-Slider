import styled from 'styled-components';

import {P} from '../../styled/index';

export const Description = styled(P)`
  color: ${(props) => props.theme.colorGreyMediumLight};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  text-align: left;
  height: 100px;
  overflow: hidden;  
`;
