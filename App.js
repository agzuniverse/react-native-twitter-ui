import React from 'react';
import {DrawerNavigator} from 'react-navigation';
import Tabscreen from './Tabscreen';
import Sidebar from './Sidebar';

const App=DrawerNavigator(
  {
    Home:{screen:Tabscreen},
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props=> <Sidebar/>
  }
);

export default App;