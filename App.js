import React from 'react';
import {Image, Text} from 'react-native';
import {Container, Header, Content, Icon, Left, Body, Tabs, Tab, TabHeading} from 'native-base';
import Timeline from './Timeline';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs initialPage={1}>
          <Tab heading={<TabHeading><Icon name='ios-home-outline'></Icon></TabHeading>}>
            <Timeline />
          </Tab>
          <Tab heading={<TabHeading><Icon name='ios-search-outline'></Icon></TabHeading>}>
            <Text>Lorem</Text>
          </Tab>
          <Tab heading={<TabHeading><Icon name='ios-notifications-outline'></Icon></TabHeading>}>
            <Text>Intentionally left blank.</Text>
          </Tab>
          <Tab heading={<TabHeading><Icon name='ios-mail-outline'></Icon></TabHeading>}>
            <Text>Intentionally left blank.</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default App;