import slogan from "../images/slogan.png";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="page-home">
      <img className="slogan" src={slogan} alt="logo" />
      <div></div>
    </div>
  );
};

export default Home;
