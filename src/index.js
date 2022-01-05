import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Clients from './Clients';
import Talents from './Talents';
import Client from './Client';
import Talent from './Talent';
import store, { loaded, loadTalents, loadClients, setView } from './store';
import {Provider, connect} from 'react-redux';
import {HashRouter, Route, Link} from 'react-router-dom';


class _App extends Component{
  constructor(){
    super();

  }

async componentDidMount(){
this.props.load();
window.addEventListener('hashchange', ()=> {
  this.props.setView(window.location.hash.slice(1))
});
this.props.setView(window.location.hash.slice(1))
}

  render(){
    const { loading, view } = this.props;
    if(loading){
      return '....loading';
    }
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

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => { 
  return {
    load: async()=> {
    const clients = (await axios.get('/api/clients')).data;
    const talents = (await axios.get('/api/talents')).data;
    dispatch(loaded());
    dispatch(loadTalents(talents));
    dispatch(loadClients(clients));
  },
  setView: function (view) {
    dispatch(setView(view));
  }
  }
};


const App = connect(mapStateToProps, mapDispatchToProps)(_App)
render(<Provider store={store}> <App /> </Provider> , document.querySelector('#root'));
