import { CTAButton, CTAContainer, CTAText } from './styles';

interface ICallToAction {
  text: string;
  buttonText: string;
}

const CallToAction = ({ text, buttonText }: ICallToAction) => {
  return (
    <CTAContainer>
      <CTAText>{text}</CTAText>
      <CTAButton>{buttonText}</CTAButton>
    </CTAContainer>
  );
};

export default CallToAction;
