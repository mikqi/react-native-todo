// import liraries
import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';

// create a component
class App extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>Touch Me</Text>
        </Content>
      </Container>
    );
  }
}

// make this component available to the app
export default App;
