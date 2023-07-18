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
`;

export const CTAText = styled.p`
  color: ${Colors.white};
  font-size: 2rem;
  font-weight: 700;
`;

export const CTAButton = styled.button`
  border-radius: 4px;
  align-self: flex-end;
  background-color: ${Colors.white};
  color: ${Colors.black};
  text-transform: uppercase;
  font-size: 1.125rem;
  padding: 12px 24px;
`;
