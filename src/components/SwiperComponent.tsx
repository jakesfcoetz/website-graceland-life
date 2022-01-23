//--- Resources
import "./SwiperComponent.scss";
import carousel1 from "../images/carousel/1.jpg";
import carousel2 from "../images/carousel/2.jpg";
import carousel3 from "../images/carousel/3.jpg";
import carousel4 from "../images/carousel/4.jpg";
import carousel5 from "../images/carousel/5.jpg";
import carousel6 from "../images/carousel/6.jpg";
import carousel7 from "../images/carousel/7.jpg";
import carousel8 from "../images/carousel/8.jpg";
import carousel9 from "../images/carousel/9.jpg";
import carousel10 from "../images/carousel/10.jpg";
import carousel11 from "../images/carousel/11.jpg";
import carousel12 from "../images/carousel/12.jpg";
import carousel13 from "../images/carousel/13.jpg";
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
        <img src={carousel1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carousel2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carousel3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carousel4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carousel5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carousel6} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carousel7} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carousel8} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carousel9} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carousel10} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carousel11} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carousel12} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carousel13} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
