import React from 'react';
import {Image, Text, TouchableHighlight, ScrollView} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import {Container, Header, Icon, Left, Body, Thumbnail, Tabs, Tab, TabHeading, Fab, Drawer} from 'native-base';
import Timeline from './Timeline';
import Sidebar from './Sidebar';

class HomeScreen extends React.Component {

  render() {
    return (
      <Container>
        <Header hasTabs style={{height:100, backgroundColor:'rgba(255,255,255,0.87)'}} >
          <Left style={{flexDirection:'row'}}>
          <TouchableHighlight onPress={()=>this.props.navigation.navigate('DrawerOpen')} underlayColor='white'>
            <Thumbnail source={{uri:'https://avatars1.githubusercontent.com/u/22353313?s=460&v=4'}} />
          </TouchableHighlight>
            <Text style={{color:'rgba(0,0,0,0.87)', fontWeight:'700', fontSize:16}}>{'\n'}   Home</Text>
          </Left>
          <Body/>
        </Header>
        <Tabs style={{backgroundColor:'rgb(0,132,180)'}} initialPage={1}>
          <Tab heading={<TabHeading><Icon name='ios-home-outline'></Icon></TabHeading>}>
            <Timeline />
          </Tab>
          <Tab heading={<TabHeading><Icon name='ios-search-outline'></Icon></TabHeading>}>
            <Text>Lorem</Text>
          </Tab>
          <Tab heading={<TabHeading><Icon name='ios-notifications-outline'></Icon></TabHeading>}>
            <Text>  Intentionally left blank.</Text>
          </Tab>
          <Tab heading={<TabHeading><Icon name='ios-mail-outline'></Icon></TabHeading>}>
            <Text>  Intentionally left blank.</Text>
          </Tab>
        </Tabs>
        <Fab style={{backgroundColor:'rgb(0,132,180)'}} position='bottomRight'>
          <Icon name='ios-paper-plane'/>
        </Fab>
      </Container>
    );
  }
}

const App=DrawerNavigator({
    Home:{screen:HomeScreen},
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props=> <Sidebar/>
  }
);

export default App;