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
  border-radius: 4px;
  border: 1px solid #cfcccc;

  > p {
    display: flex;
    align-self: center;
    padding: 1rem;
  }
`;

export const Divider = styled.div`
  height: 32px;
`;
