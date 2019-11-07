import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { ThemeProp } from '../theme';
import { shape } from 'prop-types';

interface CursorProps extends ThemeProp {
  cursorState: CursorState;
  clickState: boolean;
}

const StyledCursor = styled.div<CursorProps>`
  border-radius: 100%;
  opacity: 0.8;
  position: fixed;

  transform: translate(-50%, -50%)
    scale(${props => (props.clickState ? 1.5 : 1)});

  pointer-events: none;
  transform-origin: center;

  transition: transform 0.1s ease, background-color 0.2s ease, height 0.2s ease,
    width 0.2s ease;

  z-index: ${(props: CursorProps) => {
    switch (props.cursorState) {
      case 'default':
        return 1;
      case 'none':
        return '';
      default:
        return -1;
    }
  }};
  background-color: ${(props: CursorProps) => {
    switch (props.cursorState) {
      case "default":
        return props.theme.color.dark;
      case 'link-1':
        return props.theme.color.blue;
      case 'link-2':
        return props.theme.color.yellow;
      case 'none':
        return '';
      default:
        return props.theme.color.dark;
    }
  }};

  ${(props: CursorProps) => {
    switch (props.cursorState) {
      case 'default':
        return css`
          @media (max-width: 575px) {
            width: 20px;
            height: 20px;
          }
          @media (min-width: 571px) and (max-width: 1100px) {
            width: 20px;
            height: 20px;
          }
          @media (min-width: 1101px) {
            width: 25px;
            height: 25px;
          }
          @media (min-width: 1921px) {
            width: 33px;
            height: 33px;
          }
          @media (min-width: 2561px) {
            width: 50px;
            height: 50px;
          }
        `;
      case 'none':
        return css`
          width: 0px;
          height: 0px;
        `;
      default:
        return css`
          @media (max-width: 575px) {
            width: 70px;
            height: 70px;
          }
          @media (min-width: 571px) and (max-width: 1100px) {
            width: 70px;
            height: 70px;
          }
          @media (min-width: 1101px) {
            width: 75px;
            height: 75px;
          }
          @media (min-width: 1921px) {
            width: 100px;
            height: 100px;
          }
          @media (min-width: 2561px) {
            width: 150px;
            height: 150px;
          }
        `;
    }
  }};
`;

interface CursorLocation {
  top: string;
  left: string;
}
type ShapeType = 'shape-1' | 'shape-1' | 'shape-1';
type ColorType =
  | 'color-1'
  | 'color-2'
  | 'color-3'
  | 'color-4'
  | 'color-5'
  | 'color-6';

interface CursorType {
  shape: 'shape-1' | 'shape-1' | 'shape-1';
  color: 'color-1' | 'color-2' | 'color-3' | 'color-4' | 'color-5' | 'color-6';
}

type CursorState = CursorType | 'none' | 'default';

const Cursor = () => {
  const [cursorLocation, setCursorLocation] = useState<CursorLocation>({
    top: '0',
    left: '0',
  });
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [clickState, setClickState] = useState(false);

  const handleMouseMovement = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const target = event.target as HTMLElement;

    /**
     * wish the following could be more optimized. I am not sure why the component would have cursorState === 'link' while
     * this function had cursorState === 'default'
     */
    if (target.nodeName === 'A') {
      if (target.classList.length === 0) {
        return;
      }
      const shapeType = target.classList[target.classList.length - 2];
      const colorType = target.classList[target.classList.length - 1];
      setCursorState({
        shape: shapeType as ShapeType,
        color: colorType as ColorType,
      });
    } else if (target.nodeName !== 'A') {
      setCursorState('default');
    }

    setCursorLocation({
      left: `${clientX}px`,
      top: `${clientY}px`,
    });
  };

  const handleMouseDown = (event: MouseEvent) => {
    setClickState(true);
  };
  const handleMouseUp = (event: MouseEvent) => {
    setClickState(false);
  };

  const handleMouseEnter = (event: MouseEvent) => {
    setCursorState('default');
  };
  const handleMouseLeave = (event: MouseEvent) => {
    setCursorState('none');
  };

  // TODO: check when this is getting called and uncalled
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMovement);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousemove', handleMouseMovement);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <StyledCursor
      clickState={clickState}
      cursorState={cursorState}
      style={{ ...cursorLocation }}
    />
  );
};

export default Cursor;
