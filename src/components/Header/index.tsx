import { useCallback, useRef, useState } from 'react';
import { Container, HeaderWrapper, NavContainer, NavItem } from './styles';
import Hamburguer from '../Hamburguer';
import UperHeader from '../UpperHeader';

const navData = [
  { text: 'INÍCIO', name: 'header' },
  { text: 'SOBRE A VERTH', name: 'about' },
  { text: 'OBRAS', name: 'carousel' },
  { text: 'PORTIFÓLIO', name: 'listing-description' },
  { text: 'CONTATO', name: 'form' }
];

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const headerRef = useRef<HTMLSpanElement>(null);

  const scrollToSection = useCallback((e: any) => {
    const element = document.querySelector(`#${e.target?.title}`);

    if (!(element && headerRef && headerRef.current)) return;

    const y = element.getBoundingClientRect()?.top + window.scrollY - headerRef.current.clientHeight;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });

    setIsOpened(false);
  }, []);

  return (
    <HeaderWrapper ref={headerRef} id="header-comp">
      <UperHeader />
      <Container>
        <div>
          <div>
            <img src="/logo.png" alt="Logo da Construtora Verth" onClick={scrollToSection} title="header" />
            <button type="button" onClick={() => setIsOpened(curr => !curr)} className="desktop-only">
              <Hamburguer isOpened={isOpened} />
            </button>
          </div>

          <NavContainer isOpened={isOpened}>
            <ul>
              {navData.map((item, index) => (
                <NavItem key={index} title={item.name} onClick={scrollToSection}>
                  {item.text}
                </NavItem>
              ))}
            </ul>
          </NavContainer>
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
