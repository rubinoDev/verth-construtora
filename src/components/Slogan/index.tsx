import { Bold, SloganContainer, SloganOverlay, SloganText } from './styles';

const Slogan = () => {
  return (
    <SloganContainer>
      <SloganOverlay />
      <SloganText>
        <Bold>Qualidade</Bold> é o
        <br /> nosso <br />
        <Bold>compromisso</Bold>
      </SloganText>
    </SloganContainer>
  );
};

export default Slogan;
