import Colors from '@/styles/Colors';
import styled, { css } from 'styled-components';

export const Container = styled.div<{ error: any }>`
  margin-bottom: 16px;
  height: 40px;

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
    margin: 8px 16px;
  }

  > input {
    height: 100%;
    width: 100%;
    background: transparent;
  }
`;
