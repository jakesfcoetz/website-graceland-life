//--- Resources
import "./SwiperComponent.scss";
//--- Swiper
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

const SwiperComponent: React.FC = () => {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: true,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      effect={"fade"}
      fadeEffect={{
        crossFade: true,
      }}
      navigation={true}
    >
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
