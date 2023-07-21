import styled from 'styled-components';
import Colors from '@/styles/Colors';
import { ScreenSize } from '../utils';

export const Container = styled.span`
  width: 100%;
  padding: 1rem 0.5rem;
  background: ${Colors.blue};
  display: flex;
  align-items: flex-end;
  > span {
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    .logo {
      display: flex;
      width: 25%;
      img {
        width: 100%;
        object-fit: contain;
      }
    }

    .cnpj {
      font-size: 0.8rem;
      color: ${Colors.white};
    }

    .icons {
      display: flex;
      gap: 0.8rem;
      font-size: 1.5rem;
    }

    .copyright {
      margin-top: 0.5rem;
      font-size: 0.7rem;
      color: ${Colors.white};
    }
  }

  .only-desktop {
    display: none;
  }

  @media (${ScreenSize.laptop}) {
    position: relative;
    .only-desktop {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${Colors.white};
      font-size: 0.8rem;

      svg {
        font-size: 1rem;
      }
    }
    > span {
      padding: 1rem 1rem 2rem;
      flex-direction: row;
      justify-content: space-around;
      max-width: 1024px;
      margin: 0 auto;

      .icons {
        font-size: 1.5rem;

        a:nth-child(3) {
          display: none;
        }

        a:nth-child(4) {
          display: none;
        }
      }

      .copyright {
        position: absolute;
        bottom: 0;
        padding-bottom: 0.9rem;
      }
    }
  }
`;
