import Colors from '@/styles/Colors';
import styled from 'styled-components';
import { ScreenSize } from '../utils';

export const Bold = styled.span`
  font-weight: 700;
`;

export const SloganText = styled.p`
  line-height: 2.875rem;
  font-size: 2.5rem;
  text-align: center;
  color: ${Colors.white};
  z-index: 2;
  text-transform: uppercase;

  @media (${ScreenSize.laptop}) {
    font-size: 4rem;
    line-height: 5.875rem;
  }
`;
