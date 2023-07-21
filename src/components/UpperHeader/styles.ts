import styled from 'styled-components';
import Colors from '@/styles/Colors';
import { ScreenSize } from '../utils';

export const Container = styled.span`
  display: none;

  @media (${ScreenSize.laptop}) {
    width: 100%;
    background: ${Colors.blue};
    display: flex;

    > span {
      width: 100%;
      display: flex;
      justify-content: space-around;
      max-width: 1024px;
      margin: 0 auto;
      padding: 0.5rem;

      > div {
        display: flex;

        gap: 0.35rem;

        align-items: center;
        font-weight: 700;
        color: ${Colors.white};
      }

      > div.only-desktop {
        display: flex;
      }
    }
  }
`;
