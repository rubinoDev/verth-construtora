import Colors from '@/styles/Colors';
import styled from 'styled-components';
import { ScreenSize } from '../utils';

export const Content = styled.div`
  width: 100%;
  max-width: 1024px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    > p {
      color: ${Colors.blue};
    }
  }

  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }

  @media (${ScreenSize.laptop}) {
    > div {
      p {
        font-size: 1.25rem;
      }
      h2 {
        font-size: 2rem;
      }
    }
  }
`;
