import { Container } from './styles';
import { TbGps } from 'react-icons/tb';
import { MdWhatsapp, MdOutlineEmail } from 'react-icons/md';

const UperHeader = () => {
  return (
    <Container>
      <div className="only-desktop">
        <TbGps />
        <p>Campinas e Região</p>
      </div>
      <div>
        <MdOutlineEmail />
        <p>guilherme@verthconstrutora.com.br</p>
      </div>
      <div>
        <MdWhatsapp />
        <p>19 99642-7227</p>
      </div>
    </Container>
  );
};

export default UperHeader;
