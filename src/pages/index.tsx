import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import ListingDescription from '@/components/ListingDescription';
import Slogan from '@/components/Slogan';
import About from '@/components/About';
import SignUpForm from '@/components/SignUpForm';
import Chat from '@/components/Chat';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import { scrollToForm } from '@/utils/scrollToForm';

import { addDoc, collection } from 'firebase/firestore';
import { database } from '../config/firebase';

import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

const signUpValidationSchema = zod.object({
  name: zod.string().min(1, 'Favor informe seu nome'),
  email: zod.string().email().min(1, 'Favor informe seu email'),
  phone: zod.string().min(1, 'Favor informe seu telefone')
});

type SignUpFormData = zod.infer<typeof signUpValidationSchema>;

const Home = () => {
  const [success, setSuccess] = useState(false);
  const dbInstance = collection(database, 'leads');

  const signUpForm = useForm<SignUpFormData>({
    resolver: zodResolver(signUpValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: undefined
    }
  });

  const {
    handleSubmit,
    reset,
    formState: { errors }
  } = signUpForm;

  async function handleRegister(data: SignUpFormData) {
    try {
      await addDoc(dbInstance, data);
      const { name, email, phone } = data;

      await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({ name, email, phone })
      });

      setSuccess(true);
    } catch (e) {
      console.log('erro', e);
    }
    reset();
  }

  return (
    <>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <Header />
        <Slogan />
        <CallToAction
          text="ESTÁ BUSCANDO UM SERVIÇO DE QUALIDADE PARA REALIZAR SEUS SONHOS?"
          buttonText="Entre em contato"
          handleButtonClick={scrollToForm}
        />
        <About />

        <ListingDescription />
        <Carousel />
        <CallToAction text="CANSADO DE CONSTRUTORA AMADORA?" buttonText="Entre em contato" hasButton={false} />
        <form onSubmit={handleSubmit(handleRegister)}>
          <FormProvider {...signUpForm}>
            <SignUpForm errors={errors} success={success} />
          </FormProvider>
        </form>
        <Footer />

        <Chat></Chat>
      </StyleSheetManager>
    </>
  );
};

export default Home;
