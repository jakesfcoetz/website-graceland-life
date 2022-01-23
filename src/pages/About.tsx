import { IonCol, IonGrid, IonRow } from "@ionic/react";
//--- Resources
import "./About.scss";
import founders from "../images/founders.jpg";

const About: React.FC = () => {
  return (
    <div id="about" className="page-about">
      <div className="page-content">
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <h2>
                Graceland Life is a non-profit, inter-denominational,
                multi-cultural ministry with a heart to preach the Gospel and to
                reach out to those who are in need irrespective of who they are.
                Sharing the Love of the Father with the whole world.
              </h2>
            </IonCol>
            <IonCol size="12">
              <hr />
            </IonCol>
            <IonCol
              size="12"
              sizeSm="5"
              className="ion-padding ion-align-self-center ion-text-center"
            >
              <img className="founder-img" src={founders} alt="" />
            </IonCol>
            <IonCol
              size="12"
              sizeSm="7"
              className="ion-padding ion-align-self-center"
            >
              <h1>Jacques & Madie Coetzee</h1>
              <h2>
                As founders of Graceland Life, our hearts are to minister the
                Love of the Father and proclaim Heaven on Earth. To heal the
                sick, raise the dead, preach the Truth of Jesus Christ and to
                live a lifestyle that represents Christ in our everyday lives.
                All by the Grace of God.
              </h2>
            </IonCol>
            <IonCol size="12">
              <hr />
            </IonCol>
            <IonCol size="12">
              <h2>
                ​I shall not die, but live, And declare the works of the Lord. -
                Psalms 118:17
              </h2>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </div>
  );
};

export default About;
