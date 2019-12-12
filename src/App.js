import React, { Suspense, lazy } from 'react';
import Navbar from 'components/Navbar'
import LoadingOverlay from 'components/LoadingOverlay'
import Footer from 'components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './i18n';

const Homepage = lazy(() => import('view/Home'))
const CV = lazy(() => import('view/Cv'))

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
          <Route path="/cv" component={CV} key="cv"/>
          <Route path="/" component={Homepage} key="Home"/>
        </Switch>
      </Suspense>
      </section>
      <footer>
        <Footer/>
      </footer>
    </Router>
  );
}

export default App;
