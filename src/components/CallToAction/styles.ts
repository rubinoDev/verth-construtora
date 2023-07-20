import Colors from '@/styles/Colors';
import styled from 'styled-components';
import { ICallToAction } from '.';
import { ScreenSize } from '../utils';

export const CTAContainer = styled.div<ICallToAction>`
  width: 100%;
  padding: 1rem;
  background-color: ${Colors.blue};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    > button {
      align-self: flex-end;
    }
  }

  @media (${ScreenSize.laptop}) {
    > div {
      margin: 0 auto;
      display: flex;
      padding-block: 2rem;
      padding-inline: 0rem;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1024px;
      flex-direction: row;

      > button {
        align-self: inherit;
      }
    }

    .CTA__text-container {
      width: 40rem;
      margin: 0 auto;
      display: flex;
      justify-content: center;

      > p {
        display: inline-block;
      }
    }
  }
`;

export const CTAText = styled.p`
  color: ${Colors.white};
  font-size: 2rem;
  font-weight: 700;
`;
