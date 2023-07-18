import About from '@/components/About';
import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import Slogan from '@/components/Slogan';

const Home = () => {
  return (
    <>
      <Header />
      <Slogan />
      <CallToAction
        text="ESTÁ BUSCANDO UM SERVIÇO DE QUALIDADE PARA REALIZAR SEUS SONHOS?"
        buttonText="Entre em contato"
      />
      <About />
      <div style={{ height: '500vh' }} />
    </>
  );
};

export default Home;
