import { keyframes } from 'styled-components';
import { randomBoolean } from '../utils/random';

export const Wiggle = (movementOrigin: number) => keyframes`
  0% { 
    transform:  rotate(${movementOrigin}deg);
  }
  50% { 
    transform: rotate(${
      randomBoolean() ? movementOrigin + 1 : movementOrigin - 1
    }deg);
  }
  100% { 
    transform: rotate(${movementOrigin}deg);
  }
`;

export const Jiggle = (movementOrigin: number) => keyframes`
  0% { 
    transform:  translate(${movementOrigin}px,${movementOrigin}px) ;
  }
  50% { 
    transform: translate(${
      randomBoolean() ? movementOrigin + 5 : movementOrigin - 5
    }px,${randomBoolean() ? movementOrigin + 5 : movementOrigin - 5}px);
  }
  100% { 
    transform: translate(${movementOrigin}px,${movementOrigin}px) ;
  }
`;
