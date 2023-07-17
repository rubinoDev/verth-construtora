import Colors from '@/styles/Colors';
import styled from 'styled-components';

export const Bold = styled.span`
  font-weight: 700;
`;

export const SloganText = styled.p`
  line-height: 2.875rem;
  font-size: 2.5rem;
  text-align: center;
  color: ${Colors.white};
`;

export const SloganContainer = styled.div`
  background: url('/house-bg.png') no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Test = styled.div`
  height: 200vh;
`;
