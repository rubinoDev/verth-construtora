import Colors from '@/styles/Colors';
import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  height: 3.5rem;
  width: 3.5rem;
  font-size: 2rem;
  border-radius: 50%;
  background-color: ${Colors.green};
  align-items: center;
  justify-content: center;
  color: ${Colors.white};
  z-index: 2;
  box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.1);
`;
