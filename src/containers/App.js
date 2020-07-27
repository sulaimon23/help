import React, {
  Component
} from 'react';

import './App.css';
// import Persons from '../components/Persons/Persons';
import Payment from '../components/payment/payment';
// import Cockpit from '../components/Cockpit/Cockpit';
// import Counters from '../components/counters';
// import Header from '../components/header/header';
// import Side from '../components/side/side'
// import logo from './bg.jpg'

class App extends Component {
  render() {
    return ( 
     <Payment />
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;