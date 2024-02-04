import styled from 'styled-components';
import {Swiper} from 'swiper/react';
import {ReactComponent as ArrowIcon} from '../../../assets/arrow.svg';

export const Slider = styled(Swiper)`
  overflow: hidden;
  position: relative;
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  transition: transform 0.5s ease-in-out;
  padding-left: 20px;
  align-items: center;
  justify-content: space-around;
`;

export const Image = styled.div`
  height: 350px;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.pagePadding};
  box-shadow: 5px 5px 21px -5px rgba(120, 132, 165, 0.61) inset;
`;

export const Arrows = styled.div`
  color: white;
  display: flex;
  font-size: 30px;
  justify-content: space-between;
  height: 100%;
  max-width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding: ${(props) => props.theme.indent};
  width: 80%;
`;

export const Arrow = styled.button`
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

  &:disabled {
    cursor: default;
    & svg {
      opacity: 10%;
      fill: initial;
    }
  }
  &:hover:not(:disabled) {
    cursor: pointer;

    & svg {
      fill: ${(props) => props.theme.colorGreyMediumDark};
      stroke: ${(props) => props.theme.colorGreyMediumDark};
    }
  }
`;

export const Icon = styled(ArrowIcon)`
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
