import Colors from '@/styles/Colors';
import Button from '../Button';
import { CTAContainer, CTAText } from './styles';

export interface ICallToAction {
  text?: string;
  buttonText?: string;
  hasButton?: boolean;
}

const CallToAction = ({ text, buttonText, hasButton = true }: ICallToAction) => {
  return (
    <CTAContainer hasButton={hasButton}>
      <div>
        <div className="CTA__text-container">
          <CTAText>{text}</CTAText>
        </div>
        {hasButton && <Button text={buttonText} textColor={Colors.black} backgroundColor={Colors.white} />}
      </div>
    </CTAContainer>
  );
};

export default CallToAction;
