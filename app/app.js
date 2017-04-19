// import liraries
// @flow
import React, { Component } from 'react';
import { Container, Content, Icon, InputGroup, Input, Button } from 'native-base';

import AppHeader from './components/Header';
import AppFooter from './components/Footer';

// create a component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      todos: [],
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo() {
    const newTodos = [
      ...this.state.todos,
      {
        key: new Date(),
        text: this.state.text,
        isComplete: false,
      },
    ];

    this.setState({ todos: newTodos, text: '' });
  }

  render() {
    return (
      <Container>
        <AppHeader />
        <Content>
          <InputGroup>
            <Input
              value={this.state.text}
              placeholder="What your next plan?"
              onSubmitEditing={this.handleAddTodo}
              onChangeText={text => this.setState({ text })}
            />
            <Button
              transparent
              onPress={this.handleAddTodo}
              style={{ marginTop: 2 }}
            >
              <Icon name="ios-add-circle" style={{ color: '#d71149', fontSize: 30 }} />
            </Button>
          </InputGroup>
        </Content>
        <AppFooter />
      </Container>
    );
  }
}

export default App;
