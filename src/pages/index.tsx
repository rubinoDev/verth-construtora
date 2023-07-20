import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import { addDoc, collection } from 'firebase/firestore';
import ListingDescription from '@/components/ListingDescription';
import Slogan from '@/components/Slogan';
import About from '@/components/About';
import SignUpForm from '@/components/SignUpForm';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { database } from '../config/firebase';

import * as zod from 'zod';

const signUpValidationSchema = zod.object({
  name: zod.string().min(1, 'Favor informe seu nome'),
  email: zod.string().email().min(1, 'Favor informe seu email'),
  phone: zod.string().min(1, 'Favor informe seu telefone')
});

type SignUpFormData = zod.infer<typeof signUpValidationSchema>;

const Home = () => {
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
    watch,
    reset,
    formState: { errors }
  } = signUpForm;

  async function handleRegister(data: SignUpFormData) {
    try {
      // Aqui chama o Banco de dados
      // Não descomenta pra testar o resend
      // await addDoc(dbInstance, data);
      const { name, email, phone } = data;

      await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({ name, email, phone })
      });
      alert('success');
    } catch (e) {
      console.log('erro', e);
    }
    reset();
  }

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
      <form onSubmit={handleSubmit(handleRegister)}>
        <FormProvider {...signUpForm}>
          <SignUpForm errors={errors} />
        </FormProvider>
      </form>
      <div style={{ height: '500vh' }} />
    </>
  );
};

export default Home;
