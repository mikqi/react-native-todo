// import liraries
// @flow
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Content, Icon, InputGroup, Input, Button } from 'native-base';

import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import TodoLists from './components/TodoLists';

const rowHasChanged = (r1, r2) => r1 !== r2;

// create a component
class App extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      text: '',
      dataSource: ds.cloneWithRows([]),
      todos: [],
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.setSource = this.setSource.bind(this);
  }

  setSource(todos, todosDataSource, otherState = {}) {
    this.setState({
      todos,
      dataSource: this.state.dataSource.cloneWithRows(todosDataSource),
      ...otherState,
    });
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

    this.setSource(newTodos, newTodos, { text: '' });
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
          <ListView
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={({ key, ...value }) => (
              <TodoLists
                key={key}
                {...value}
              />
            )}
          />
        </Content>
        <AppFooter />
      </Container>
    );
  }
}

export default App;
