/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  ScrollView
} from 'react-native';
import { blue } from './node_modules/ansi-colors';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      msg: null,
    }
  }
  updateUser(inputText){
    this.setState({
      
        text:inputText,
    

  });
}
// componentWillMount(){
//   console.log("componentWillMount");
// }
// componentWillUnmount(){
//   console.log("componentWillUnmount");
// }
// componentDidMount(){
//   console.log("componentDidMount");
// }

  go = () => {
    this.setState({
      msg: <View>
        {this.state.msg}
      <View style={styles.send}>
        <Image style={styles.imageStyle5} source={require('./img/2.jpg')}>

       </Image>
       
        <Text style={styles.text}>
          {this.state.text}
        </Text>
        
      </View>
      </View>
    });
  }
  render() {
    return (
      
      <View style={styles.container}>
      <ScrollView style = {styles.scrollViewStyle}
      >
        <View style={styles.chatRecord}>
          <Image style={styles.imageStyle}
            source={require('./img/tx.png')}>
          </Image>
          <View style={styles.colorStyle}>
            <Text style={styles.textStyle}>
              你好
          </Text>
          </View>
        </View>
        <View style={styles.chatRecord2}>
          <Image style={styles.imageStyle2}
            source={require('./img/2.jpg')}>
          </Image>
          <View style={styles.colorStyle2}>
            <Text style={styles.textStyle2}>
              你好
          </Text>
          </View>
        </View>
        <View style={styles.chatRecord3}>
          <Image style={styles.imageStyle3}
            source={require('./img/tx.png')}>
          </Image>
          <View style={styles.colorStyle3}>
            <Text style={styles.textStyle3}>
              有什么可以为您服务？
          </Text>
          </View>
        </View>
        <View style={styles.chatRecord4}>
          {this.state.msg}
        </View>
        </ScrollView>
       
        <View style={styles.chatInput}>
          <TextInput style={styles.textInputStyle}
            onChangeText={(text) => this.updateUser(text)}>
          </TextInput>
            {/* <Button title="发送" color="#ccc"/> */}
            <Text style={styles.go} onPress={this.go}>
              发送
            </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E8E8',
    margin: 5,
  },
  chatRecord: {
    flex: 2,
    flexDirection: 'row',

  },
  imageStyle: {
    width: 70,
    height: 70,
    marginTop: 35,
    marginLeft: 5,
    borderRadius: 50,
  },
  colorStyle: {
    marginTop: 65,
    marginLeft: 10,
    width: 45,
    height: 35,
    backgroundColor: '#2ECC71',
    borderRadius: 5,
  },
  textStyle: {
    marginTop: 8,
    marginLeft: 3,
    fontSize: 16,
    fontWeight: 'bold',
  },

  chatRecord2: {
    flex: 2,
  },

  imageStyle2: {
    width: 70,
    height: 70,
    marginTop: 35,
    marginRight: 5,
    borderRadius: 50,
    alignSelf: 'flex-end',
  },
  colorStyle2: {
    marginTop: -45,
    marginLeft: 220,
    width: 45,
    height: 35,
    backgroundColor: '#2ECC71',
    borderRadius: 5,
  },
  textStyle2: {
    marginTop: 8,
    marginLeft: 3,
    fontSize: 16,
    fontWeight: 'bold',

  },
  chatRecord3: {
    flex: 2,
  },
  imageStyle3: {
    width: 70,
    height: 70,
    marginTop: 35,
    marginLeft: 5,
    borderRadius: 50,
  },
  colorStyle3: {
    width: 180,
    height: 35,
    backgroundColor: '#2ECC71',
    marginTop: -45,
    marginLeft: 85,
    borderRadius: 5,
  },
  textStyle3: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 3,
  },
  chatRecord4: {
    flex: 2,

  },
  imageStyle4: {
    width: 70,
    height: 70,
    marginTop: 35,
    marginRight: 5,
    borderRadius: 50,
    alignSelf: 'flex-end',
  },
  textStyle4: {
    marginTop: -45,
    marginLeft: 220,
    fontSize: 20,
    fontWeight: 'bold',
  },
  chatInput: {
    backgroundColor: 'pink',
  },
  textInputStyle: {
    fontSize: 16,
    margin: 18,
    backgroundColor: 'white',
    marginBottom: 5,
    width: 230,
    height: 40,
  },
  go: {
    marginLeft: 255,
    marginTop: -50,
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
    fontSize: 16,

  },
  imageStyle5: {
    width: 70,
    height: 70,
    
    borderRadius: 50,
    alignSelf: 'flex-end',
  },
send:{
  justifyContent:'flex-end',
  marginBottom:35,
},
text: {
  fontSize: 16,
  marginRight:80,
  marginTop:-45,
  fontWeight: 'bold',
  alignSelf: 'flex-end',
  backgroundColor: '#2ECC71',
  borderRadius: 5,
  height: 35,
  paddingTop:10,

},
  
});
