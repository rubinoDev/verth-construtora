import ImageBackground from '../ImageBackground';
import { Bold, SloganText } from './styles';

const Slogan = () => {
  return (
    <ImageBackground imageSrc="/house-bg.png">
      <SloganText>
        <Bold>Qualidade</Bold> é o
        <br /> nosso <br />
        <Bold>compromisso</Bold>
      </SloganText>
    </ImageBackground>
  );
};

export default Slogan;
