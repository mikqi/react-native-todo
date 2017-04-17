// import liraries
import React, { Component } from 'react';
import { Container, Content, Icon, InputGroup, Input, Button } from 'native-base';

import AppHeader from './components/Header';
import AppFooter from './components/Footer';

// create a component
class App extends Component {
  render() {
    return (
      <Container>
        <AppHeader />
        <Content>
          <InputGroup>
            <Input placeholder="What your next plan?" />
            <Button transparent style={{ marginTop: 2 }}>
              <Icon name="ios-add-circle" style={{ color: '#d71149', fontSize: 30 }} />
            </Button>
          </InputGroup>
        </Content>
        <AppFooter />
      </Container>
    );
  }
}

// make this component available to the app
export default App;
