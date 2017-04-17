// import liraries
import React, { Component } from 'react';
import { Header, Button, Left, Right, Icon, Body, Title } from 'native-base';

const AppHeader = () => (
  <Header style={styles.header}>
    <Left>
      { /* <Button transparent>
        <Icon name="menu" style={styles.text} />
      </Button> */}
    </Left>
    <Body>
      <Title style={styles.text}>Todo App</Title>
    </Body>
    <Right />
  </Header>
  );

const styles = {
  header: {
    backgroundColor: '#d71149',
  },
  text: {
    color: '#f5f5f5',
  },
};

export default AppHeader;
