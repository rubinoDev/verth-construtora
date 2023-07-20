import styled from 'styled-components';
import { ScreenSize } from './utils';
import Colors from '@/styles/Colors';

export default styled.section`
  display: flex;
  flex-direction: column;
  padding: 5rem 1rem;

  .building {
    display: none;
  }

  @media (${ScreenSize.laptop}) {
    flex-direction: row;

    .building {
      display: block;
      width: 40%;
    }
  }
`;
