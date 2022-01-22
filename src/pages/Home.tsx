//--- Ionic
import { IonCol, IonGrid, IonRow } from "@ionic/react";
//--- Resources
import slogan from "../images/slogan.png";
import "./Home.scss";
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

const Home: React.FC = () => {
  return (
    <IonGrid className="ion-page page page-home">
      <IonRow>
        <IonCol>
          <img className="slogan" src={slogan} alt="logo" />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="6" className="home-verse ion-align-self-center">
          <p className="ion-text-center">
            And they went out and preached everywhere, while the Lord kept
            working with them and confirming the message by the attesting signs
            and miracles that closely accompanied it. Amen.​
          </p>
          <p className="ion-text-right">​Mark 16:20</p>
        </IonCol>
        <IonCol size="6">
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
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-6.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-8.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Home;
