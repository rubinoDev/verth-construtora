import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import ListingDescription from '@/components/ListingDescription';
import Slogan from '@/components/Slogan';
import About from '@/components/About';

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

      <ListingDescription />
      <div style={{ height: '500vh' }} />
    </>
  );
};

export default Home;
