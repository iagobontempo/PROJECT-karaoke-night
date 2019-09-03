import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Main from './components/main/Main';
import Login from './components/login/Login';
import Register from './components/register/Register';
import NewSong from './components/newSong/NewSong';
import OwnerDashboard from './components/ownerDashboard/OwnerDashboard';
import OwnerLogin from './components/ownerLogin/OwnerLogin';
import Play from './components/play/Play';
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
        <Route exact path='/:place/new' component={NewSong} />
        <Route exact path='/:place/control' component={OwnerDashboard} />
        <Route exact path='/owner' component={OwnerLogin} />
        <Route exact path='/:place/play' component={Play} />
        <Redirect from='*' to='/' />
      </Switch>
      <Footer />

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
