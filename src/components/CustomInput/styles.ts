import Colors from '@/styles/Colors';
import styled, { css } from 'styled-components';
import { ScreenSize } from '../utils';

export const Container = styled.div<{ error: any }>`
  margin-bottom: 1rem;
  height: 2.5rem;

  display: flex;
  align-items: center;

  background: ${Colors.white};

  ${props =>
    props.error &&
    css`
      border: 2px solid red;
    `}

  border-radius: 4px;
  > svg {
    margin: 0.5rem 1rem;
  }

  > input {
    height: 100%;
    width: 100%;
    background: transparent;
  }

  @media (${ScreenSize.laptop}) {
    margin-bottom: 1.25rem;
    height: 3rem;
    font-size: 1.2rem;

    ::placeholder {
      font-size: 1rem;
    }
  }
`;
