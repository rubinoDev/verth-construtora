import { Container, Content, Paragraph, ParagraphContainer } from './styles';
import FigureItem from '../FigureItem';
import ImageBackground from '../ImageBackground';
import { MdEngineering, MdLockClock } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';

const ListingDescription = () => {
  return (
    <ImageBackground imageSrc="casa-piscina.png">
      <Content>
        <Container>
          <FigureItem text="MÃO DE OBRA ESPECIALIZADA " icon={<MdEngineering />}></FigureItem>
          <FigureItem text="SUSTENTABILIDADE " icon={<BiWorld />}></FigureItem>
          <FigureItem text="COMPROMISSO COM O CLIENTE " icon={<IoIosPeople />}></FigureItem>
          <FigureItem text="OBRAS ENTREGUES NO PRAZO " icon={<MdLockClock />}></FigureItem>
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
