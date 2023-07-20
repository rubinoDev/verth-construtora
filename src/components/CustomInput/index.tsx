import React, { HTMLProps } from 'react';

import { Container } from './styles';

interface IProps extends HTMLProps<HTMLInputElement> {
  icon: any;
  register: any;
  error: any;
}

const CustomInput = ({ icon, register, error, ...rest }: IProps) => {
  return (
    <Container error={error}>
      {icon}
      <input type="text" {...register} {...rest} />
    </Container>
  );
};

export default CustomInput;
