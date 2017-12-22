import React from 'react';
import {Image, Text, TouchableHighlight} from 'react-native';
import {Container, Header, Icon, Left, Body, Thumbnail, Fab, Drawer} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

class Sidebar extends React.Component {
    render(){
        return(
            <Container style={{paddingLeft:20}}>
                    <Text>{'\n'}{'\n'}</Text>
                    <Grid>
                        <Row size={15}>
                            <Thumbnail source={{uri:'https://avatars1.githubusercontent.com/u/22353313?s=460&v=4'}} />
                        </Row>
                        <Row size={10} style={{flexDirection:'column'}}>
                            <Text style={{fontWeight:'700'}}>Aswin G</Text>
                            <Text style={{color:'rgba(0,0,0,0.3)'}}>@aswing1999</Text>
                        </Row>
                        <Row size={5}>
                            <Text style={{fontWeight:'700'}}>1359 </Text>
                            <Text style={{color:'rgba(0,0,0,0.3)'}}>Following    </Text>
                            <Text style={{fontWeight:'700'}}>1450 </Text>
                            <Text style={{color:'rgba(0,0,0,0.3)'}}>Followers</Text>
                        </Row>
                        <Container style={{borderBottomColor: 'black',borderBottomWidth: 1}}/>
                        <Row size={70}/>
                    </Grid>
            </Container>
        );
    }
}

export default Sidebar;