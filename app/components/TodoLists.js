// import lirariest
import React, { Component } from 'react';
import { Switch } from 'react-native';
import { List, ListItem, Text } from 'native-base';

// create a component
const TodoLists = props => (
  <List>
    <ListItem>
      <Switch value={props.isComplete} />
      <Text style={{ marginLeft: 10 }}>{props.text}</Text>
    </ListItem>
  </List>
  );

// make this component available to the app
export default TodoLists;
