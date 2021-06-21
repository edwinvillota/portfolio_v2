import { keyframes } from 'styled-components';

export const ScaleUp = keyframes`
  from {
    transform: scale(0)
  }
  to {
    transform: scale(1)
  }
`;

export const ScaleDown = keyframes`
  from {
    transform: scale(1)
  }
  to {
    transform: scale(0)
  }
`;
