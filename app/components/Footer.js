// import liraries
import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

const AppFooter = props => (
  <Footer>
    <FooterTab>
      <Button>
        <Text>{props.remainTodos} count</Text>
      </Button>
      <Button
        style={props.filter === 'ALL' && styles.active}
        onPress={() => props.onFilter('ALL')}
      >
        <Icon
          style={props.filter === 'ALL' && styles.whiteText}
          name="ios-list-outline"
        />
      </Button>
      <Button
        style={props.filter === 'ACTIVE' && styles.active}
        onPress={() => props.onFilter('ACTIVE')}
      >
        <Icon
          style={props.filter === 'ACTIVE' && styles.whiteText}
          name="ios-create-outline"
        />
      </Button>
      <Button
        style={props.filter === 'COMPLETED' && styles.active}
        onPress={() => props.onFilter('COMPLETED')}
      >
        <Icon
          style={props.filter === 'COMPLETED' && styles.whiteText}
          name="ios-done-all-outline"
        />
      </Button>
    </FooterTab>
  </Footer>
  );

const styles = {
  active: {
    borderRadius: 0,
    backgroundColor: 'rgba(215, 17, 73, .6)',
  },
  whiteText: {
    color: '#f3f3f3',
  },
};

export default AppFooter;
