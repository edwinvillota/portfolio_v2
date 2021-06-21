import styled from 'styled-components';
import { ScaleUp, ScaleDown } from 'styles/Animations';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
`;

type AnimatedWrapper = {
  isVisible: boolean;
  itemIndex: number;
  itemsLength: number;
};

export const AnimatedWrapper = styled.div<AnimatedWrapper>`
  display: flex;
  transform: ${({ isVisible }) => (isVisible ? 'scale(0)' : 'scale(1)')};
  animation-name: ${({ isVisible }) => (isVisible ? ScaleUp : ScaleDown)};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-direction: normal;
  animation-delay: ${({ isVisible, itemIndex, itemsLength }) =>
    isVisible ? `${itemIndex * 0.2}s` : `${itemsLength * 0.1 - itemIndex * 0.1}s`};
  animation-fill-mode: forwards;
`;
