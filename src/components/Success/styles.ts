import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  font-size: 1.125rem;

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }

  div:last-child {
    p {
      font-size: 1.125rem;
    }
  }
`;
