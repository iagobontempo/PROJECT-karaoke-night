import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Main from './components/main/Main';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Places from './components/places/Places';

import GlobalStyle from './style/GlobalStyle'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Places} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/:place/' component={Main} />
        <Redirect from='*' to='/' />
      </Switch>
      <Footer />

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
