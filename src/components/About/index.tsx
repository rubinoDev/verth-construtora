import Colors from '@/styles/Colors';
import Button from '../Button';
import Section from '../Section';
import { AboutContainer } from './styles';

const About = () => {
  return (
    <Section>
      <AboutContainer>
        <header>
          <img src="/logo.png" alt="Logo da Construtora Verth" />
          <h2>Quem somos nós</h2>
        </header>
        <main>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita, error voluptates perferendis
            cupiditate laboriosam debitis amet, ab, impedit alias accusantium eius maxime praesentium optio odio! Modi,
            consequatur fugit. Aliquam!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita, error voluptates perferendis
            cupiditate laboriosam debitis amet, ab, impedit alias accusantium eius maxime praesentium optio odio! Modi,
            consequatur fugit. Aliquam!
          </p>

          <Button text="Saiba mais" backgroundColor={Colors.blue} textColor={Colors.white} />
        </main>
      </AboutContainer>

      <img className="building" src="/building.png" alt="Logo da Construtora Verth" />
    </Section>
  );
};

export default About;
