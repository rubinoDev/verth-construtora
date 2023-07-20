import { Container } from './styles';
import { MdWhatsapp } from 'react-icons/md';

const Chat = () => {
  return (
    <Container
      href="https://api.whatsapp.com/send/?phone=5519998187343&text=Ol%C3%A1+Construtora+Verth%21+%0D%0AEstou+entrando+em+contato+atrav%C3%A9s+do+site+de+voc%C3%AAs.&type=phone_number&app_absent=0"
      target="blank"
    >
      <MdWhatsapp />
    </Container>
  );
};

export default Chat;
