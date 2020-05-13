import React from 'react';
import './App.scss';
import 'bulma'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import FAQ from './components/common/FAQ'
import Contact from './components/common/Contact'
import Diet from './components/forms/Diet'
import Footer from './components/common/Footer'
import ScrollToTop from './components/navigation/Navigation'

function App() {
  return (
  <BrowserRouter>
  <ScrollToTop/>
    <main>
    <Navbar/>
    <Switch>
    <Route exact path="/pcos-launch" component={Home}/>
    <Route path="/diet" component={Diet}/>
    <Route path="/faq" component={FAQ}/>
    <Route path="/contact" component={Contact}/>
    </Switch>
    </main>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
