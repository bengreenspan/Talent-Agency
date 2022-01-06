import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Clients from './Clients';
import Talents from './Talents';
import Client from './Client';
import Talent from './Talent';
import store, { loadTalents, loadClients, loadClientTalent } from './store';
import {Provider, connect} from 'react-redux';
import {HashRouter, Route, Link} from 'react-router-dom';


class _App extends Component{
  constructor(){
    super();

  }

async componentDidMount(){
}

  render(){
    return (
      <HashRouter>
      <ul>
        <h2>Clients</h2>
       <Route component= {Client} path='/clients/:id' exact />
       <Route component= {Clients} path='/' exact />
          <h2>Talents</h2>
          <Route component= {Talent} path='/talents/:id' exact />
          <Route component= {Talents} path='/' exact />
      </ul>
      </HashRouter>
      
    );
  }
}

const mapStateToProps = ({clients, talents}) => ({clients, talents});

const mapDispatchToProps = (dispatch) => { 
  return {
    loadClients: () => dispatch(loadClients()),
    loadTalents: () => dispatch(loadTalents()),
    loadClientTalent: () => dispatch(loadClientTalent()),
    // load: async()=> {
    // dispatch(loadTalents(Talents));
    // dispatch(loadClients(Clients));
    // dispatch(loadClientTalent(clientTalent));
  }
  };


const App = connect(mapStateToProps, mapDispatchToProps)(_App)
render(<Provider store={store}> <App /> </Provider> , document.querySelector('#root'));
