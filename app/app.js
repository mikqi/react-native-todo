// import liraries
import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';

import AppHeader from './components/Header';
import AppFooter from './components/Footer';

// create a component
class App extends Component {
  render() {
    return (
      <Container>
        <AppHeader />
        <Content>
          <Text>Touch Me</Text>
        </Content>
        <AppFooter />
      </Container>
    );
  }
}

// make this component available to the app
export default App;
