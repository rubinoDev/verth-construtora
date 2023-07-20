import Section from '../Section';
import { Content } from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = () => {
  return (
    <Section>
      <Content>
        <div>
          <p>Qualidade garantida</p>
          <h2>Confira nossas obras</h2>
        </div>

        <Swiper
          rewind={true}
          cssMode={true}
          slidesPerView={'auto'}
          spaceBetween={30}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          className="mySwiper"
        >
          {[...Array(9)].map((_, index) => (
            <SwiperSlide key={index}>
              <img src="/logo.png" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Content>
    </Section>
  );
};

export default Carousel;
