import { MdOutlineEmail } from 'react-icons/md';
import { Container } from './styles';
import { IoLogoInstagram, IoLogoFacebook } from 'react-icons/io';
import { CgMail } from 'react-icons/cg';
import { TbBrandWhatsapp } from 'react-icons/tb';
const Footer = () => {
  return (
    <Container>
      <span>
        <div className="logo">
          <img src="/white-verth-logo.png" alt="Logo em branco da Construtora Verth" />
        </div>

        <div className="cnpj">
          <p>Contrutora Verth - CNPJ 2776355460888</p>
        </div>

        <div className="only-desktop">
          <MdOutlineEmail />
          <p>guilherme@verthconstrutora.com.br</p>
        </div>

        <div className="icons">
          <a href="">
            <IoLogoInstagram color="white" />
          </a>
          <a href="">
            <IoLogoFacebook color="white" />
          </a>
          <a href="mailto:rubinodev@gmail.com">
            <CgMail color="white" />
          </a>
          <a href="">
            <TbBrandWhatsapp color="white" />
          </a>
        </div>

        <div className="copyright">
          <p>Desenvolvido por skate crew. &copy; 2023 Todos os direitos reservados </p>
        </div>
      </span>
    </Container>
  );
};

export default Footer;
