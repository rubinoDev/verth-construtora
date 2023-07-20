import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, phone }) => (
  <div>
    <h1>Nova inscrição</h1>
    <p>Você recebeu uma inscrição do {name}</p>
    <p>Email: {email}</p>
    <p>Telefone: {phone}</p>
  </div>
);
