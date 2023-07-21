import Colors from '@/styles/Colors';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import { SuccessContainer } from './styles';

const Success = () => {
  return (
    <SuccessContainer>
      <div>
        <MdOutlineCheckCircleOutline color={Colors.green} size={50} />
        <p>Sucesso!</p>
      </div>

      <div>
        <p>Entraremos em contato</p>
        <p>Obrigado pela confiança</p>
      </div>
    </SuccessContainer>
  );
};

export default Success;
