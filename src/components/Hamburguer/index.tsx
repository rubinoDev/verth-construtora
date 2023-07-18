import { Container, IHamburguerProps } from './styles';

const Hamburguer = ({ isOpened }: IHamburguerProps) => (
  <Container isOpened={isOpened}>
    <div className="burger burger1" />
    <div className="burger burger2" />
    <div className="burger burger3" />
  </Container>
);

export default Hamburguer;
