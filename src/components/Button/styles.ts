import styled from 'styled-components';
import { IButton } from '.';

export const ButtonElement = styled.button<IButton>`
  border-radius: 4px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  text-transform: uppercase;
  font-size: 1.125rem;
  padding: 12px 24px;
`;
