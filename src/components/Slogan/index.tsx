import { useEffect, useRef } from 'react';
import ImageBackground from '../ImageBackground';
import { Bold, SloganText } from './styles';
import { gsap } from 'gsap';

const Slogan = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const text = textRef.current;
    gsap.fromTo(
      text,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1.5
      }
    ),
      [];
  });
  return (
    <ImageBackground imageSrc="/house-bg.png">
      <SloganText ref={textRef}>
        <Bold>Qualidade</Bold> é o
        <br /> nosso <br />
        <Bold>compromisso</Bold>
      </SloganText>
    </ImageBackground>
  );
};

export default Slogan;
