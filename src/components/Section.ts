import styled from 'styled-components';
import { ScreenSize } from './utils';

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
    }
  }
`;
