import { MdOutlineEmail, MdWhatsapp } from 'react-icons/md';
import { TbGps } from 'react-icons/tb';
import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <span>
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
      </span>
    </Container>
  );
};

export default Footer;
