import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import { BrowserRouter, Route} from 'react-router-dom';

import './App.scss'
import Chants from './chants/chants.component'


const client = new ApolloClient({
  uri: 'http://localhost/acb/graphql',
})

function App() {
  return (
    <ApolloProvider client = {client}>
      <div className="row header">
        <div className="col-2 logo">LOGO</div>
        <div className="col nav">
          <div className="row nav-wrap">
            <div className="col nav-item">Home</div>
            <div className="col nav-item">Shop</div>
            <div className="col nav-item">Chants</div>
            <div className="col-md-auto nav-item">Viewing Parties</div>
            <div className="col nav-item">Contact Us</div>
            <div className="col nav-item">About Us</div>
            <div className="col nav-item">FAQ</div>
          </div>
        </div>
      </div>
      <BrowserRouter>
      <Route exact path="/" component={Chants}/>
      <Route  path="/chants" component={Chants}/>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
