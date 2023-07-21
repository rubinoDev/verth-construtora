import { Container } from './styles';
import { TbGps } from 'react-icons/tb';
import { MdWhatsapp, MdOutlineEmail } from 'react-icons/md';

const UpperHeader = () => {
  return (
    <Container>
      <span>
        <div className="region">
          <TbGps />
          <p>Campinas e Região</p>
        </div>
        <div className="email">
          <MdOutlineEmail />
          <p>guilherme@verthconstrutora.com.br</p>
        </div>
        <div className="phone">
          <MdWhatsapp />
          <p>19 99642-7227</p>
        </div>
      </span>
    </Container>
  );
};

export default UpperHeader;
