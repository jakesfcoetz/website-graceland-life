import { IonContent, IonPage, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./css/variables.scss";

//--- Global CSS
import "./css/global.scss";

//--- Components
import NavBarComponent from "./components/NavBarComponent";
import Home from "./pages/Home";

setupIonicReact();

const App: React.FC = () => (
  <IonPage>
    <IonContent>
      <div className="main-page-container">
        <NavBarComponent />
        <Home />
      </div>
    </IonContent>
  </IonPage>
);

export default App;
