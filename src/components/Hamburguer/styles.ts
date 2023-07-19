import styled from 'styled-components';
import { ScreenSize } from '../utils';

export interface IHamburguerProps {
  isOpened: boolean;
}

export const Container = styled.div<IHamburguerProps>`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;

  .burger {
    width: 1.5rem;
    height: 0.2rem;
    border-radius: 10px;
    background-color: black;
    transform-origin: 1px;
    transition: all 0.3s linear;
  }

  .burger1 {
    transform: ${({ isOpened }) => (isOpened ? 'rotate(45deg)' : 'rotate(0)')};
  }
  .burger2 {
    transform: ${({ isOpened }) => (isOpened ? 'translateX(100%)' : 'translateX(0)')};
    opacity: ${({ isOpened }) => (isOpened ? 0 : 1)};
  }
  .burger3 {
    transform: ${({ isOpened }) => (isOpened ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  @media (${ScreenSize.laptop}) {
    display: none;
  }
`;
