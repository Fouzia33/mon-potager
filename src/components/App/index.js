// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// == Import css
import './styles.scss';

// == Import Components
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import Connect from 'src/containers/Connect';
import Footer from 'src/containers/Footer';
import PlantsList from 'src/containers/PlantsList';
import NotFound from 'src/components/NotFound';
import SignUp from 'src/containers/SignUp';
import Events from 'src/containers/Events';
import Cgu from 'src/components/Cgu';
import MentionsLegales from 'src/components/MentionsLegales';
import QuiSommesNous from 'src/components/QuiSommesNous';
import Unsubscribe from '../Unsubscribe';

// == App component
const App = ({ fetchPlants }) => {
  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <div className="app">

      <Header />

      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/plantes" exact>
          <PlantsList />
        </Route>

        <Route path="/connexion" exact>
          <Connect />
        </Route>

        <Route path="/inscription" exact>
          <SignUp />
        </Route>

        <Route path="/desinscription" exact>
          <Unsubscribe />
        </Route>

        <Route path="/evenements" exact>
          <Events />
        </Route>

        <Route path="/cgu" exact>
          <Cgu />
        </Route>

        <Route path="/mentions-legales" exact>
          <MentionsLegales />
        </Route>
        <Route path="/qui-sommes-nous" exact>
          <QuiSommesNous />
        </Route>

        <Route>
          <NotFound />
        </Route>

      </Switch>

      <Footer />

    </div>
  );
};

// == Export
export default App;
