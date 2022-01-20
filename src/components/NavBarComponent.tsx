import { IonButton, IonButtons } from "@ionic/react";

import "./NavBarComponent.scss";

import logo from "../images/logo-transparent.png";

interface ContainerProps {}

const NavBarComponent: React.FC<ContainerProps> = () => {
  function buttonHandler(location: string) {
    window.location.href = `#${location}`;
  }

  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className="nav-bar">
        <div className="nav-border"></div>
        <IonButtons className="ion-padding-horizontal">
          <IonButton onClick={() => buttonHandler("home")}>
            <p>HOME</p>
          </IonButton>
          <IonButton onClick={() => buttonHandler("about")}>
            <p>ABOUT</p>
          </IonButton>
          <IonButton onClick={() => buttonHandler("connect")}>
            <p>CONNECT</p>
          </IonButton>
        </IonButtons>
        <div className="nav-border"></div>
      </div>
    </div>
  );
};

export default NavBarComponent;
