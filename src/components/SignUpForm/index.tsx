import React from 'react';

import { useFormContext } from 'react-hook-form';
import Colors from '../../styles/Colors';
import CustomInput from '../CustomInput';

import { FaUser, FaPhone } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { Container } from './styles';
import Section from '../Section';
import Button from '../Button';

interface ISignUpForm {
  errors: any;
  backgroundColor?: string;
  borderColor?: string;
  boxShadowColor?: string;
  success: boolean;
}

const SignUpForm = ({
  errors,
  backgroundColor = '#95b4e9',
  borderColor = '#6894E0',
  boxShadowColor = 'rgba(90,241,214,0.8)',
  success
}: ISignUpForm) => {
  const { register } = useFormContext();

  return (
    <Section>
      <Container backgroundColor={backgroundColor} borderColor={borderColor} boxShadowColor={boxShadowColor}>
        {!success && (
          <>
            <p>Entre em contato</p>
            <CustomInput
              icon={<FaUser />}
              error={errors.name?.message}
              placeholder="DIGITE SEU NOME"
              register={register('name', { required: true })}
            />
            <CustomInput
              icon={<HiMail />}
              error={errors.email?.message}
              placeholder="INFORME SEU MELHOR E-MAIL"
              register={register('email', { required: true })}
            />
            <CustomInput
              icon={<FaPhone />}
              error={errors.phone?.message}
              placeholder="SEU WHATSAPP COM DDD"
              register={register('phone', { required: true })}
              type="text"
            />

            <Button text="ENVIAR" backgroundColor={Colors.green} textColor={Colors.black} />
          </>
        )}
        {success && <img src="/p.png"></img>}
      </Container>
    </Section>
  );
};

export default SignUpForm;
