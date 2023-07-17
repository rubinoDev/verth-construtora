import { Bold, SloganContainer, SloganText, Test } from './styles';

const Slogan = () => {
  return (
    <Test>
      <SloganContainer>
        <SloganText>
          <Bold>Qualidade</Bold> é o
          <br /> nosso <br />
          <Bold>compromisso</Bold>
        </SloganText>
      </SloganContainer>
    </Test>
  );
};

export default Slogan;
