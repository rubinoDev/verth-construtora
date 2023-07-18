import { useState } from 'react';
import { Container, NavContainer, NavItem } from './styles';
import Hamburguer from '../Hamburguer';

const navData = [
  { text: 'INÍCIO' },
  { text: 'SOBRE A VERTH' },
  { text: 'OBRAS' },
  { text: 'PORTIFÓLIO' },
  { text: 'CONTATO' }
];

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Container>
      <div>
        <img src="/logo.png" alt="Logo da Construtora Verth" />
        <button type="button" onClick={() => setIsOpened(curr => !curr)}>
          <Hamburguer isOpened={isOpened} />
        </button>
      </div>

      <NavContainer isOpened={isOpened}>
        <ul>
          {navData.map((item, index) => (
            <NavItem key={index}>{item.text}</NavItem>
          ))}
        </ul>
      </NavContainer>
    </Container>
  );
};

export default Header;
