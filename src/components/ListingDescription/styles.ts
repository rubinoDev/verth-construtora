import styled from 'styled-components';
import { ScreenSize } from '../utils';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const ParagraphContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;
`;
export const Paragraph = styled.p`
  line-height: 1.2em;
  word-spacing: 2px;
  font-size: 1.125rem;
  color: white;

  z-index: 1;
`;

export const Content = styled.div`
  @media (${ScreenSize.laptop}) {
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 1024px;
    gap: 5rem;
  }
`;
