import React, { Suspense, lazy } from 'react';
import Navbar from 'components/Navbar'
import LoadingOverlay from 'components/LoadingOverlay'
import Footer from 'components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import './i18n';

const Homepage = lazy(() => import('view/Home'))
const CV = lazy(() => import('view/Cv'))
const ContactMe = lazy(() => import('view/ContactMe'))
const Hobbie = lazy(() => import('view/Hobbies'))
const Project = lazy(() => import('view/project'))
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
          <Route path="/contact" component={ContactMe} key="contactme"/>
          <Route path="/hobbies" component={Hobbie} key="hobies"/>
          <Route path="/project" component={Project} key="hobies"/>
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
