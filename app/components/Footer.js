// import liraries
import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

const AppFooter = () => (
  <Footer>
    <FooterTab>
      <Button active style={styles.active}>
        <Icon name="ios-list-outline" style={styles.whiteText} />
      </Button>
      <Button>
        <Icon name="ios-done-all-outline" />
      </Button>
      <Button>
        <Icon name="ios-trash-outline" />
      </Button>
      <Button>
        <Icon name="ios-more-outline" />
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
