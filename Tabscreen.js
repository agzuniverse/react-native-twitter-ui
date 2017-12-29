import React from 'react';
import {Image, Text, TouchableNativeFeedback, TouchableHighlight} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {Container, Header, Icon, Left, Body, Thumbnail, Fab, Form, Item, Input} from 'native-base';
import Timeline from './Timeline';

const Mainscreen=TabNavigator(
  {
      Home:{
        screen: Timeline,
        navigationOptions:{
          tabBarIcon: ({tintColor}) => <Icon name='home' style={{color:tintColor}}/>
        }
      },
      Search:{
        screen: props => <Container onFocus style={{backgroundColor:'rgba(0,132,180,0.5)'}}></Container>,
        navigationOptions:{
          tabBarIcon: ({tintColor}) => <Icon name='search' style={{color:tintColor}}/>
        }
      },
      Notifications:{
        screen: props => <Container style={{backgroundColor:'rgba(0,132,180,0.5)'}}></Container>,
        navigationOptions:{
          tabBarIcon: ({tintColor}) => <Icon name='notifications' style={{color:tintColor}}/>
        }
      },
      Messages:{
        screen: props => <Container style={{backgroundColor:'rgba(0,132,180,0.5)'}}></Container>,
        navigationOptions:{
          tabBarIcon: ({tintColor}) => <Icon name='mail' style={{color:tintColor}}/>
        }
      }
  },
  {
    tabBarOptions:{
      showIcon:true,
      showLabel:false,
      style:{
        backgroundColor:'rgba(255,255,255,0.87)'
      },
      labelStyle:{
        color:'black'
      },
      indicatorStyle:{
        backgroundColor:'rgb(0,132,180)'
      },
      activeTintColor:'rgb(0,132,180)',
      inactiveTintColor:'rgba(0,0,0,0.7)'
    }
  }
);

class Tabscreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      header:<Text style={{color:'rgba(0,0,0,0.87)', fontWeight:'700', fontSize:16}}>{'\n'}  Home</Text>,
      globalStateUpdate: newState => this.setState(newState)
    };
  }

  render() {
    return (
      <Container>
        <Header hasTabs style={{height:90, backgroundColor:'rgba(255,255,255,0.87)'}} >
          <Left style={{flexDirection:'row'}}>
          <TouchableHighlight onPress={()=>this.props.navigation.navigate('DrawerOpen')} underlayColor='grey'>
            <Thumbnail source={{uri:'https://avatars1.githubusercontent.com/u/22353313?s=460&v=4'}} />
          </TouchableHighlight>
            {this.state.header}
          </Left>
          <Body/>
        </Header>
        <TouchableNativeFeedback>
          <Fab style={{backgroundColor:'rgb(0,132,180)'}} position='bottomRight'>
            <Icon name='ios-paper-plane'/>
          </Fab>
        </TouchableNativeFeedback>
        <Mainscreen screenProps={{globalStateUpdate:this.state.globalStateUpdate}} 
        onNavigationStateChange={(prevState, currentState) => {
            if(currentState.routes[currentState.index].routeName!='Search'){
              this.setState({header:<Text style={{color:'rgba(0,0,0,0.87)', fontWeight:'700', fontSize:16}}>{'\n'}   {currentState.routes[currentState.index].routeName}</Text>})
            }
            else{
              this.setState({header:<Form><Item rounded bordered style={{backgroundColor:'rgba(255,255,255,0.87)', width:225, marginLeft:10}}><Input placeholder="Search..."/></Item></Form>})
            }
          }}/>
      </Container>
    );
  }
}

export default Tabscreen;