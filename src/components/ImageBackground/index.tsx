import React, { ReactNode } from 'react';

import { Container, Overlay } from './styles';

interface IImageBackgroundProps {
  children: ReactNode;
  imageSrc: string;
  hasOverlay?: boolean;
  id?: string;
}

const ImageBackground = ({ children, imageSrc, hasOverlay = true, id = 'block-id' }: IImageBackgroundProps) => {
  return (
    <Container imageSrc={imageSrc} id={id}>
      {hasOverlay && <Overlay />}
      {children}
    </Container>
  );
};

export default ImageBackground;
