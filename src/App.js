import React from 'react';
import './App.scss';
import 'bulma'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import FAQ from './components/common/FAQ'
import Contact from './components/common/Contact'
import Diet from './components/forms/Diet'

function App() {
  return (
  <BrowserRouter>
    <main>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/diet" component={Diet}/>
    <Route path="/faq" component={FAQ}/>
    <Route path="/contact" component={Contact}/>
    </Switch>
    </main>
    </BrowserRouter>

  );
}

export default App;
