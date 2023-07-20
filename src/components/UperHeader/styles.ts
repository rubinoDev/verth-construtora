import styled from 'styled-components';
import Colors from '@/styles/Colors';

export const Container = styled.span`
  width: 100%;
  background: ${Colors.blue};
  display: flex;

  justify-content: space-between;
  padding: 0.5rem;

  > div {
    display: flex;

    gap: 0.5rem;

    align-items: center;
    font-weight: 700;
    color: ${Colors.white};
  }

  > div.only-desktop {
    display: none;
  }
`;
