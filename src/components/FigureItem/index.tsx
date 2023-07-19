import { ReactNode } from 'react';
import { Container } from './styles';

interface IFigureItemProps {
  icon: ReactNode;
  text: string;
}

const FigureItem = ({ icon, text }: IFigureItemProps) => {
  return (
    <Container>
      {icon}
      <span>{text}</span>
    </Container>
  );
};

export default FigureItem;
