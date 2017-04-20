// import liraries
// @flow
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Content, Icon, InputGroup, Input, Button } from 'native-base';

import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import TodoLists from './components/TodoLists';

const rowHasChanged = (r1, r2) => r1 !== r2;
const filterTodos = (filter, todos) => todos.filter((todo) => {
  if (filter === 'ALL') return true;
  if (filter === 'COMPLETED') return todo.isComplete;
  if (filter === 'ACTIVE') return !todo.isComplete;
});

// create a component
class App extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      text: '',
      dataSource: ds.cloneWithRows([]),
      todos: [],
      filter: 'ALL',
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
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

    this.setSource(newTodos, filterTodos(this.state.filter, newTodos), { text: '' });
  }

  handleToggleChange(key, isComplete) {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.key !== key) return todo;
      return {
        ...todo,
        isComplete,
      };
    });

    this.setSource(newTodos, filterTodos(this.state.filter, newTodos));
  }

  handleDeleteTodo(key) {
    const newTodos = this.state.todos.filter(todo => todo.key !== key);

    this.setSource(newTodos, filterTodos(this.state.filter, newTodos));
  }

  handleFilter(filter) {
    this.setSource(this.state.todos, filterTodos(filter, this.state.todos), { filter });
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
                onToggleChange={complete => this.handleToggleChange(key, complete)}
                onDeleteTodo={() => this.handleDeleteTodo(key)}
                {...value}
              />
            )}
          />
        </Content>
        <AppFooter
          onFilter={this.handleFilter}
        />
      </Container>
    );
  }
}

export default App;
