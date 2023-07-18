import Colors from '@/styles/Colors';
import styled from 'styled-components';
import { IHamburguerProps } from '../Hamburguer/styles';

export const Container = styled.header`
  position: fixed;

  width: 100vw;

  background: ${Colors.white};
  z-index: 999;

  > div {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      width: 45%;
    }

    > button {
      background: transparent;
      margin-right: 0.5rem;
    }
  }
`;

export const NavContainer = styled.nav<IHamburguerProps>`
  position: absolute;
  width: 100vw;
  background: ${Colors.white};
  transform-origin: top;
  transform: ${({ isOpened }) => (isOpened ? 'scaleY(1)' : 'scaleY(0)')};
  transition: all 0.2s linear;

  box-shadow: 0px 4px 10px -3px rgba(0, 0, 0, 0.1);

  padding: 0.5rem 0;
`;

export const NavItem = styled.li`
  text-align: center;
  width: 100%;
  padding: 0.5rem;
  font-weight: bold;
`;
