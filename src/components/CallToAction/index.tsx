import Colors from '@/styles/Colors';
import Button from '../Button';
import { CTAButton, CTAContainer, CTAText } from './styles';

interface ICallToAction {
  text: string;
  buttonText: string;
}

const CallToAction = ({ text, buttonText }: ICallToAction) => {
  return (
    <CTAContainer>
      <CTAText>{text}</CTAText>
      <Button text={buttonText} textColor={Colors.black} backgroundColor={Colors.white} />
    </CTAContainer>
  );
};

export default CallToAction;
