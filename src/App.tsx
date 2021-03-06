import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Start from './pages/Start';
import Continue from './pages/continue';
import NewGame from './pages/new';
import GameFuel from './pages/game-fuel';
import GameUpgrade from './pages/game-upgrade';
import GameSurvivor from './pages/game-survivor';
import EndGame from './pages/end';
import PostGame from './pages/post';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/fonts.css';
import './theme/variables.css';
import './theme/variables.scss';
import './theme/print.scss';

import Print from 'pages/Print';
import Make from 'pages/Make';
import Who from 'pages/info/who';
import Why from 'pages/info/why';
import Contact from 'pages/info/contact';
import More from 'pages/info/more';
import Loss from 'pages/loss';
import Support from 'pages/info/support';
import Buy from 'pages/info/buy';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const App: React.FC = () => {

  return (
    <IonApp>
    <GoogleReCaptchaProvider
        reCaptchaKey="6LdBqgAVAAAAANesMZ5jG7nbK_w03ToXCNx0SO3A">

      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/print" component={Print} />
          <Route path="/make" component={Make} />
          <Route path="/who" exact component={Who} />
          <Route path="/why" exact component={Why} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/more" exact component={More} />
          <Route path="/support" exact component={Support} />
          <Route path="/buy" exact component={Buy} />
          {Continue}
          {NewGame}
          {EndGame}
          {GameFuel}
          {GameUpgrade}
          {GameSurvivor}
          {PostGame}
          {Loss}
          <Route path="/" component={Start} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
      </GoogleReCaptchaProvider>
    </IonApp>
  );
};

export default App;
