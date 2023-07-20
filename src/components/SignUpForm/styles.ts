import styled from 'styled-components';

type ContainerProps = {
  backgroundColor?: string;
  borderColor?: string;
  boxShadowColor?: string;
};

export const Container = styled.div<ContainerProps>`
  background-color: #e2e1e1;
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
`;

export const Divider = styled.div`
  height: 32px;
`;
