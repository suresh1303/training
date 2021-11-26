import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Program from './components/program/program';
import Certificate from './components/program/certificate';
import PageNotFound from './components/program/pagenotfound';
import AddUser from './components/form/adduser';
import { Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return <div className="outerContainer">
    <Header />
    <Switch>
      <Route exact path="/">
        <Form/>
      </Route>
      <Route path="/program" component={Program} />
      <Route path="/certificate" component={Certificate} />
      <Route path="/adduser" component={AddUser} />
      <Route path="*" component={PageNotFound} />
    </Switch>
    <Footer />
  </div>
}

export default App;
