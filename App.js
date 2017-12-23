import React from 'react';
import {DrawerNavigator} from 'react-navigation';
import Homescreen from './Homescreen';
import Sidebar from './Sidebar';

const App=DrawerNavigator({
    Home:{screen:Homescreen},
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props=> <Sidebar/>
  }
);

export default App;