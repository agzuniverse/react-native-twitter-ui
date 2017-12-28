import React from 'react';
import {Image, Text} from 'react-native';
import {Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class Timeline extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri:'https://avatars1.githubusercontent.com/u/22353313?s=460&v=4'}} />
                <Body>
                  <Text style={{fontWeight:'700'}}>
                    Aswin G
                    <Text style={{color:'rgba(0,0,0,0.3)'}}>  @aswing1999</Text>
                  </Text>
                  <Text note style={{fontWeight:'100'}}>December 18, 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
              <Text>
                  Have a great day everyone!{'\n'}{'\n'}
              </Text>
                <Image source={{uri: 'https://c1.staticflickr.com/9/8475/8448486325_dc7eb0fcaf_n.jpg'}} style={{height: 150, alignSelf: 'stretch', flex: 1, resizeMode:'stretch'}}/>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Grid>
                  <Col size={4}></Col>
                  <Col size={24} style={{flexDirection:'row'}}>
                    <Icon name="ios-text-outline"/>
                    <Text style={{color:'rgba(0,0,0,0.3)', fontSize:16}}> 3</Text>
                  </Col>
                  <Col size={24} style={{flexDirection:'row'}}>
                    <Icon name="ios-repeat"/>
                    <Text style={{color:'rgba(0,0,0,0.3)', fontSize:16}}> 9</Text>
                  </Col>
                  <Col size={24} style={{flexDirection:'row'}}>
                    <Icon name="ios-heart-outline"/>
                    <Text style={{color:'rgba(0,0,0,0.3)', fontSize:16}}> 16</Text>
                  </Col>
                  <Col size={24} style={{flexDirection:'row'}}>
                    <Icon name="ios-mail-outline"/>
                  </Col>
                </Grid>
              </Left>
            </CardItem>
          </Card>


          
        <Card style={{flex: 0}}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri:'https://pbs.twimg.com/profile_images/890111871633813506/snFDZkX0_400x400.jpg'}} />
              <Body>
                <Text style={{fontWeight:'700'}}>
                  Jesus Christ
                  <Text style={{color:'rgba(0,0,0,0.3)'}}>  @thegoodgodabove</Text>
                </Text>
                <Text note style={{fontWeight:'100'}}>December 25, 2017</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
            <Text>
                It's my birthday!{'\n'}{'\n'}
            </Text>
              <Image source={{uri: 'http://s3.india.com/wp-content/uploads/2017/12/Teaser-7-1.jpg'}} style={{height: 150, alignSelf: 'stretch', flex: 1, resizeMode:'stretch'}}/>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Grid>
                <Col size={4}></Col>
                <Col size={24} style={{flexDirection:'row'}}>
                  <Icon name="ios-text-outline"/>
                  <Text style={{color:'rgba(0,0,0,0.3)', fontSize:16}}> 201</Text>
                </Col>
                <Col size={24} style={{flexDirection:'row'}}>
                  <Icon name="ios-repeat"/>
                  <Text style={{color:'rgba(0,0,0,0.3)', fontSize:16}}> 1068</Text>
                </Col>
                <Col size={24} style={{flexDirection:'row'}}>
                  <Icon name="ios-heart-outline"/>
                  <Text style={{color:'rgba(0,0,0,0.3)', fontSize:16}}> 1729</Text>
                </Col>
                <Col size={24} style={{flexDirection:'row'}}>
                  <Icon name="ios-mail-outline"/>
                </Col>
              </Grid>
            </Left>
          </CardItem>
        </Card>
      </Content>
      </Container>
    );
  }
}