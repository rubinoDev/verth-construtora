import { ButtonElement } from './styles';

export interface IButton {
  text?: string;
  onClick?: () => void;
  textColor: string;
  backgroundColor: string;
}

const Button = ({ text, onClick, textColor, backgroundColor }: IButton) => {
  return (
    <ButtonElement onClick={onClick} textColor={textColor} backgroundColor={backgroundColor}>
      {text}
    </ButtonElement>
  );
};

export default Button;
