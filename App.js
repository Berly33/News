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
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      inputUserName:'',
      inputpwd:'',
    }
  }
  updateUser(inputText){
    this.setState((state)=>{
      return{
        inputUserName:inputText,
      }
  });
}
onPress(){
  console.log("点击按钮："+this.state.inputUserName);
}
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle}
          placeholder={"请输入用户名"}
          onChangeText={(inputText)=>this.updateUser(inputText)}>
        </TextInput>
        <Text style={styles.textDisplayStyle}>
          您输入的用户名是：{this.state.inputUserName}
        </Text>
        <TextInput style={styles.textInputStyle}
          placeholder={"请输入密码"}
          numberOfLines={1}
          underlineColorAndroid={'transparent'}
          secureTextEntry={true}
          textAlign='center'
          >
        </TextInput>
        {/* <View style={styles.button}> 
        <Button  title="确定" color="#82E0AA"/>
        </View> */}
        <Text style={styles.button} 
        onPress={this.onPress.bind(this)}>
        确定</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E8E8',
  },
  textInputStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    width:500,
    backgroundColor:'white',
    marginBottom:5,
    width:300,
  },
  textDisplayStyle: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  button: {
    textAlign: 'center',
    width:200,
    height:40,
    top:30,
    paddingTop:13,
    backgroundColor:"#82E0AA",
  },
});
