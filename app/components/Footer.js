// import liraries
import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

const AppFooter = props => (
  <Footer>
    <FooterTab>
      <Button onPress={() => props.onFilter('ALL')}>
        <Text>{props.remainTodos} count</Text>
      </Button>
      <Button onPress={() => props.onFilter('ALL')}>
        <Icon name="ios-list-outline" />
      </Button>
      <Button onPress={() => props.onFilter('ACTIVE')}>
        <Icon name="ios-create-outline" />
      </Button>
      <Button onPress={() => props.onFilter('COMPLETED')}>
        <Icon name="ios-done-all-outline" />
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
