import Colors from '@/styles/Colors';
import styled from 'styled-components';
import { ScreenSize } from '../utils';

type ContainerProps = {
  backgroundColor?: string;
  borderColor?: string;
  boxShadowColor?: string;
  success?: boolean;
};

export const FormContainer = styled.div<ContainerProps>`
  background-color: ${({ success }) => (success ? Colors.white : Colors.gray)};
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;

  > p {
    display: flex;

    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
  }

  @media (${ScreenSize.laptop}) {
    width: 30%;
    > p {
      margin-inline: auto;
      margin-bottom: 1.25rem;

      font-size: 2rem;
    }
  }
`;

export const Divider = styled.div`
  height: 32px;
`;

export const Container = styled.div`
  @media (${ScreenSize.laptop}) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
