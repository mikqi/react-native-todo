// import lirariest
import React, { Component } from 'react';
import { Switch } from 'react-native';
import { List, ListItem, Text } from 'native-base';

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
    </ListItem>
  </List>
  );

// make this component available to the app
export default TodoLists;
