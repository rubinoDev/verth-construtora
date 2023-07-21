import Colors from '@/styles/Colors';
import Button from '../Button';
import Section from '../Section';
import { AboutContainer, Container } from './styles';
import { scrollToForm } from '@/utils/scrollToForm';

const About = () => {
  return (
    <Section id="about">
      <Container>
        <AboutContainer>
          <header>
            <img src="/logo.png" alt="Logo da Construtora Verth" />
            <h2>Quem somos nós</h2>
          </header>
          <main>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita, error voluptates perferendis
              cupiditate laboriosam debitis amet, ab, impedit alias accusantium eius maxime praesentium optio odio!
              Modi, consequatur fugit. Aliquam!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita, error voluptates perferendis
              cupiditate laboriosam debitis amet, ab, impedit alias accusantium eius maxime praesentium optio odio!
              Modi, consequatur fugit. Aliquam!
            </p>

            <Button text="Saiba mais" backgroundColor={Colors.blue} textColor={Colors.white} onClick={scrollToForm} />
          </main>
        </AboutContainer>

        <img className="building" src="/building.png" alt="Logo da Construtora Verth" />
      </Container>
    </Section>
  );
};

export default About;
