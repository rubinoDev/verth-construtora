import Colors from '@/styles/Colors';
import styled from 'styled-components';

export const CTAContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: ${Colors.blue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  > button {
    align-self: flex-end;
  }
`;

export const CTAText = styled.p`
  color: ${Colors.white};
  font-size: 2rem;
  font-weight: 700;
`;
