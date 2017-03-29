import React, { Component } from 'react';

import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Card from './Components/Card';

import './App.css';

class App extends Component {
  render() {
    return (
        <Container>
            <Card />
        </Container>
    );
  }
}

export default App;
