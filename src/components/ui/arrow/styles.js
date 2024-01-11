import styled from 'styled-components';
import {ReactComponent as ArrowIcon} from '../../../assets/arrow.svg';

export const StyledArrows = styled.div`
  color: white;
  display: flex;
  font-size: 30px;
  justify-content: space-between;
  height: 100%;
  max-width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
`;

export const StyledArrow = styled.button`
  height: 23px;
  width: 173px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  position: relative;
  transform: ${(props) =>
    props.direction === 'left' ? 'rotate(180deg)' : 'none'};

  &:hover {
    cursor: pointer;

    & svg {
      fill: ${(props) => props.theme.colorGreyMediumDark};
      stroke: ${(props) => props.theme.colorGreyMediumDark};
    }
  }

  &:disabled {
    cursor: not-allowed;
    & svg {
     opacity: 30%;
    }
  }
`;

export const StyledArrowIcon = styled(ArrowIcon)`
  width: 100%;
  height: 100%;
  fill: ${(props) => props.theme.colorGrayLight};
  stroke: ${(props) => props.theme.colorGrayLight};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
