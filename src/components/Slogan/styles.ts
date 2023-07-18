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
  z-index: 2;
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

export const SloganOverlay = styled.div`
  background-color: rgba(1, 1, 1, 0.15);
  position: absolute;
  height: 100%;
  width: 100%;
`;
