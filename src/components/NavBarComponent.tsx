import { IonButton, IonButtons } from "@ionic/react";

import "./NavBarComponent.scss";

import logo from "../images/logo-transparent.png";

interface ContainerProps {}

const NavBarComponent: React.FC<ContainerProps> = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="logo" />
      <IonButtons>
        <IonButton>HOME</IonButton>
        <IonButton>ABOUT</IonButton>
        <IonButton>CONNECT</IonButton>
      </IonButtons>
    </div>
  );
};

export default NavBarComponent;
