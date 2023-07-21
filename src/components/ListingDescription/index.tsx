import { Container, Content, Paragraph, ParagraphContainer } from './styles';
import FigureItem from '../FigureItem';
import ImageBackground from '../ImageBackground';
import { MdEngineering, MdLockClock } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const itemsArray = [
  { text: 'MÃO DE OBRA ESPECIALIZADA', icon: <MdEngineering /> },
  { text: 'SUSTENTABILIDADE', icon: <BiWorld /> },
  { text: 'COMPROMISSO COM O CLIENTE', icon: <IoIosPeople /> },
  { text: 'OBRAS ENTREGUES NO PRAZO', icon: <MdLockClock /> }
];

const ListingDescription = () => {
  gsap.registerPlugin(ScrollTrigger);
  const itemsContainerRef = useRef<HTMLUListElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const itemsContainer = itemsContainerRef.current;
    const content = contentRef.current;

    const items = itemsContainer && itemsContainer?.querySelectorAll('div');

    items &&
      items.forEach((item, index: number) => {
        console.log(index);
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 20
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'none',
            scrollTrigger: {
              trigger: content,
              start: 'center bottom',
              end: 'top center'
            }
          }
        );
      });
  }, []);

  return (
    <ImageBackground imageSrc="casa-piscina.png">
      <Content ref={contentRef}>
        <Container ref={itemsContainerRef}>
          {itemsArray.map((item, index) => (
            <FigureItem key={index} text={item.text} icon={item.icon} />
          ))}
        </Container>
        <ParagraphContainer>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate distinctio ab sunt accusantium
            praesentium veniam minus harum ratione earum, esse excepturi perferendis velit soluta consequuntur quasi
            nisi odit molestias!
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate distinctio ab sunt accusantium
            praesentium veniam minus harum ratione earum, esse excepturi perferendis velit soluta consequuntur quasi
            nisi odit molestias!
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate distinctio ab sunt accusantium
            praesentium veniam minus harum ratione earum, esse excepturi perferendis velit soluta consequuntur quasi
            nisi odit molestias!
          </Paragraph>
        </ParagraphContainer>
      </Content>
    </ImageBackground>
  );
};

export default ListingDescription;
