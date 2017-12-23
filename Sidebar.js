import React from 'react';
import {Image, Text, TouchableHighlight} from 'react-native';
import {Container, Thumbnail, Icon} from 'native-base';
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
                        <Container style={{borderBottomColor: 'rgba(0,0,0,0.1)',borderBottomWidth: 1, marginLeft:-20}}/>
                        <Row size={3}/>
                        <Row size={7} style={{flexDirection:'row'}}>
                            <Icon style={{fontSize:22}} name='person'/>
                            <Text style={{fontSize:16}}>  Profile</Text>
                        </Row>
                        <Row size={7} style={{flexDirection:'row'}}>
                            <Icon style={{fontSize:22}} name='list-box'/>
                            <Text style={{fontSize:16}}>  Lists</Text>
                        </Row>
                        <Row size={7} style={{flexDirection:'row'}}>
                            <Icon style={{fontSize:22}} name='flash'/>
                            <Text style={{fontSize:16}}>  Moments</Text>
                        </Row>
                        <Row size={7} style={{flexDirection:'row'}}>
                            <Icon style={{fontSize:22}} name='ios-browsers'/>
                            <Text style={{fontSize:16}}>  Highlights</Text>
                        </Row>
                        <Container style={{borderBottomColor: 'rgba(0,0,0,0.1)',borderBottomWidth: 1, marginLeft:-20}}/>
                        <Row size={3}/>
                        <Row size={7}>
                            <Text style={{fontSize:16}}>Settings and privacy</Text>
                        </Row>
                        <Row size={7}>
                            <Text style={{fontSize:16}}>Help Center</Text>
                        </Row>
                        <Row size={15}/>
                        <Container style={{borderBottomColor: 'rgba(0,0,0,0.1)',borderBottomWidth: 1, marginLeft:-20}}/>
                        <Row size={3}/>
                        <Row size={7}>
                            <Col size={20}>
                                <Icon style={{fontSize:22,color:'rgb(0,132,180)'}} name='moon'/>
                            </Col>
                            <Col size={60}/>
                            <Col size={20}>
                                <Icon style={{fontSize:22,color:'rgb(0,132,180)'}} name='qr-scanner'/>
                            </Col>
                        </Row>
                    </Grid>
            </Container>
        );
    }
}

export default Sidebar;