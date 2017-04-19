// import lirariest
import React, { Component } from 'react';
import { Switch } from 'react-native';
import { Left, Right, List, ListItem, Text, Button, Icon } from 'native-base';

const style = {
  text: {
    marginLeft: 10,
  },
  completed: {
    marginLeft: 10,
    textDecorationLine: 'line-through',
    color: '#ddd',
  },
};

// create a component
const TodoLists = props => (
  <List>
    <ListItem>
      <Left>
        <Switch
          value={props.isComplete}
          onValueChange={props.onToggleChange}
        />
        <Text
          style={props.isComplete ?
        style.completed :
        style.text}
        >
          {props.text}
        </Text>
      </Left>
      <Right>
        <Button
          transparent
          danger
          onPress={props.onDeleteTodo}
        >
          <Icon name="ios-trash-outline" />
        </Button>
      </Right>
    </ListItem>
  </List>
  );

// make this component available to the app
export default TodoLists;
