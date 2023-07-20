import styled from 'styled-components';
import { IButton } from '.';

export const ButtonElement = styled.button<IButton>`
  border-radius: 4px;
  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  text-transform: uppercase;
  font-size: 1.25rem;
  padding: 12px 40px;
  transition: filter 0.3s ease;

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
