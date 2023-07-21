import Colors from '@/styles/Colors';
import styled from 'styled-components';
import { IHamburguerProps } from '../Hamburguer/styles';
import { ScreenSize } from '../utils';

export const HeaderWrapper = styled.span`
  position: fixed;

  width: 100vw;

  z-index: 999;
`;

export const Container = styled.header`
  width: 100vw;

  background: ${Colors.white};
  z-index: 999;
  box-shadow: 0px 4px 10px -3px rgba(0, 0, 0, 0.1);

  > div {
    > div {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        cursor: pointer;
        width: 45%;
      }

      > button {
        background: transparent;
        margin-right: 0.5rem;
      }
    }
  }

  @media (${ScreenSize.laptop}) {
    width: 100%;
    display: flex;
    justify-content: center;

    > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      max-width: 1024px;
      > div {
        > img {
          width: 100%;
        }
      }
    }
  }
`;

export const NavContainer = styled.nav<IHamburguerProps>`
  width: 100vw;
  background: ${Colors.white};
  position: absolute;
  transform-origin: top;
  transform: ${({ isOpened }) => (isOpened ? 'scaleY(1)' : 'scaleY(0)')};
  transition: all 0.2s linear;

  box-shadow: 0px 4px 10px -3px rgba(0, 0, 0, 0.1);

  padding: 0.5rem 0;

  @media (${ScreenSize.laptop}) {
    transform: scaleY(1);
    position: initial;
    width: 45%;
    box-shadow: none;
    display: flex;
    justify-content: flex-end;

    > ul {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`;

export const NavItem = styled.li`
  text-align: center;
  width: 100%;
  padding: 0.5rem;
  font-weight: bold;
  word-break: unset;

  &:hover {
    color: ${Colors.blue};
    cursor: pointer;
  }

  @media (${ScreenSize.laptop}) {
    width: auto;
    font-size: 1.125rem;
  }
`;
