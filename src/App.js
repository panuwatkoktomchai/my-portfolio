import React, { Suspense, lazy } from 'react';
import Navbar from 'components/Navbar'
import LoadingOverlay from 'components/LoadingOverlay'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './i18n';

const Homepage = lazy(() => import('view/Home'))

function App() {
  return (
    <Router>
      <nav>
        <Navbar></Navbar>
      </nav>
      <section>
      <Suspense fallback={<LoadingOverlay/>}>
        <Switch>
          <Route path="/home" component={Homepage} key="Home-page"/>
        </Switch>
      </Suspense>
      </section>
    </Router>
  );
}

export default App;
