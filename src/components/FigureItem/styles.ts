import styled from 'styled-components';
import Colors from '@/styles/Colors';
export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  background: ${Colors.white};
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  font-size: 2.5rem;
  z-index: 1;
  > span {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;
