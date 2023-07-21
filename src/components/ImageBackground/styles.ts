import styled from 'styled-components';

interface IContainerProps {
  imageSrc: string;
}

export const Container = styled.section<IContainerProps>`
  background: ${({ imageSrc }) => `url(${imageSrc}) no-repeat`};
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  padding: 2rem;
`;

export const Overlay = styled.div`
  background-color: rgba(1, 1, 1, 0.6);
  position: absolute;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;
