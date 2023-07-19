import styled from 'styled-components';
import { ScreenSize } from '../utils';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  img {
    width: 50%;
    display: none;
  }

  header {
    width: 100%;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: flex-start;
    gap: 0.3rem;
    text-transform: uppercase;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    line-height: 1.2em;
    word-spacing: 2px;
    font-size: 1.125rem;

    button {
      margin-top: 1rem;
    }
  }

  @media (${ScreenSize.laptop}) {
    img {
      display: block;
      width: 11rem;
    }
  }
`;
