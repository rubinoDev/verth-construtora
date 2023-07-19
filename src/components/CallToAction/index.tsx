import Colors from '@/styles/Colors';
import Button from '../Button';
import { CTAContainer, CTAText } from './styles';

interface ICallToAction {
  text: string;
  buttonText: string;
}

const CallToAction = ({ text, buttonText }: ICallToAction) => {
  return (
    <CTAContainer>
      <div>
        <div className="CTA__text-container">
          <CTAText>{text}</CTAText>
        </div>
        <Button text={buttonText} textColor={Colors.black} backgroundColor={Colors.white} />
      </div>
    </CTAContainer>
  );
};

export default CallToAction;
