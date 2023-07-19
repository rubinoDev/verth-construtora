import React, { ReactNode } from 'react';

import { Container, Overlay } from './styles';

interface IImageBackgroundProps {
  children: ReactNode;
  imageSrc: string;
  hasOverlay?: boolean;
}

const ImageBackground = ({ children, imageSrc, hasOverlay = true }: IImageBackgroundProps) => {
  return (
    <Container imageSrc={imageSrc}>
      {hasOverlay && <Overlay />}
      {children}
    </Container>
  );
};

export default ImageBackground;
