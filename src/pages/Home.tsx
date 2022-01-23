//--- Resources
import slogan from "../images/slogan.png";
import "./Home.scss";
//--- Components
import SwiperComponent from "../components/SwiperComponent";

const Home: React.FC = () => {
  return (
    <div id="home" className="page-home">
      <div>
        <img className="slogan" src={slogan} alt="logo" />
      </div>
      <div className="container-home-bottom-row">
        <div className="container-verse">
          <h3>
            And they went out and preached everywhere, while the Lord kept
            working with them and confirming the message by the attesting signs
            and miracles that closely accompanied it.
            <br />
            Amen.
          </h3>
          <p>Mark 16:20</p>
        </div>
        <div className="container-swiper">
          <SwiperComponent></SwiperComponent>
        </div>
      </div>
    </div>
  );
};

export default Home;
