import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import { BrowserRouter, Route} from 'react-router-dom';


import './App.scss'
import Chants from './chants/chants.component'
import Vp from './vp/vp.component'
import About from './About/about.component'
import Faq from './FAQ/faq.component'
import Footer from './Footer/Footer.component'
import HeaderClass from './Header/headerClass.component'
import Home from './Home/Home.component'
const client = new ApolloClient({
  uri: 'http://data.angelcitybrigade.net/graphql/',
})

function App() {
  return (
    <ApolloProvider client = {client}>
      <BrowserRouter>
      <HeaderClass />
      <Route exact path="/" component={Home}/>
      <Route  path="/about" component={About}/>
      <Route  path="/chants" component={Chants}/>
      <Route  path="/viewing-parties" component={Vp}/>
      <Route  path="/faq" component={Faq}/>
      <Footer/>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
