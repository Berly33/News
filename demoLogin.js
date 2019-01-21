// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity
// } from 'react-native';
// import {StackNavigator} from 'react-navigation';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
// const userName = 'lwl';
// const PWD = '123';



// export default class demoLogin extends Component {
  
//   constructor(props){
//     super(props);
//     this.state = {
//       inputedNum:'',
//       inputedPW:null, 
//     }
//   }

//   static navigationOptions = ({navigation}) => ({
//     headerTitle: `Welcome`,
//   });
  
//   updateNum(newText) {
//     this.setState({
//         inputedName:newText,
//       });
//   }

//   updatePwd(newText) {
//     this.setState({
//         inputedPW:newText,
//     });
//   }

//   onPress(){
//     console.log("inputedPW:"+this.state.inputedPW);
//     console.log("inputedName:"+this.state.inputedName);
//     this.props.navigation.navigate('Second',{user: this.state.inputedName,pwd:this.state.inputedPW});
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput style = {styles.textInputStyle} 
//           placeholder={'请输入用户名'}
//           onChangeText = {(newText)=>this.updateNum(newText)}>
//         </TextInput>

//         <Text style = {styles.textDisplayStyle}>
//         您输入的用户名是：{this.state.inputedName}
//         </Text>

//         <TextInput style={styles.textInputStyle}
//           placeholder={'请输入密码'}
//           secureTextEntry ={true}
//           onChangeText = {(newText)=>this.updatePwd(newText)}>
//         </TextInput>

//         <TouchableOpacity onPress ={
//           ()=>{
//             this.props.navigation.navigate('Second',
//             {user: this.state.inputedName,pwd:this.state.inputedPW})
//           }
//         }>
//           <Text style = {styles.buttonStyle}>
//           确定
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   textInputStyle:{
//     backgroundColor:'gray',
//     fontSize:20,
//     margin:20,
//   },
//   textDisplayStyle:{
//     fontSize:20,
//     margin:20,
//   },
//   buttonStyle:{
//     backgroundColor:'gray',
//     color:'white',
//     textAlign:'center',
//     fontSize:30,
//     margin:20,
//   }
// });
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid
} from 'react-native';
import {StackNavigator} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const userName = 'changduo';
const PWD = 'admin';



export default class demoLogin extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      inputedNum:'',
      inputedPW:'', 
    }
  }

  static navigationOptions = ({navigation}) => ({
    headerTitle: `News`,
  });
  
  updateNum=(newText)=> {
    this.inputedNum=newText;
     
  }

  updatePwd=(newText)=> {
    this.inputedPW=newText;
   
  }

  login=()=>{
    if (this.inputedNum == '1' && this.inputedPW == '1') {
      this.props.navigation.navigate('Second',{user: this.state.inputedNum,pwd:this.state.inputedPW});
      ToastAndroid.show('登录成功',ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('登录失败',ToastAndroid.SHORT);
    }
    // console.log("inputedPW:"+this.state.inputedPW);
    // console.log("inputedName:"+this.state.inputedName);
   // this.props.navigation.navigate('Second',{user: this.state.inputedNum,pwd:this.state.inputedPW});
  }
 

  render() {
    return (
      <View style={styles.container}>
      {/* <View style={styles.title}>
      <Text style = {styles.titlestyle}>照</Text>
      <Text style = {styles.titlestyle1}>片</Text>
      <Text style = {styles.titlestyle2}>墙</Text>
      </View> */}
      <Image style={styles.imageStyle3}
            source={require('./img/zhaopian.jpg')}>
          </Image>
        <TextInput style = {styles.textInputStyle} 
          placeholder={'请输入用户名'}
          onChangeText = {(newText)=>this.updateNum(newText)}
          underlineColorAndroid={'transparent'}>
        </TextInput>

        {/* <Text style = {styles.textDisplayStyle}>
        您输入的用户名是：{this.state.inputedName}
        </Text> */}

        <TextInput style={styles.textInputStyle}
          placeholder={'请输入密码'}
          secureTextEntry ={true}
          onChangeText = {(newText)=>this.updatePwd(newText)}
          underlineColorAndroid={'transparent'}>
        </TextInput>

        <TouchableOpacity onPress ={this.login
          // ()=>{
          //   this.props.navigation.navigate('Second',
          //   {user: this.state.inputedName,pwd:this.state.inputedPW})
          // } 
        }>
          <Text style = {styles.buttonStyle}>
          确定
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInputStyle:{
    backgroundColor:'#E4F4F4',
    borderRadius: 5,
    fontSize:20,
    margin:20,
  },
  textDisplayStyle:{
    fontSize:20,
    margin:20,
  },
  buttonStyle:{
    backgroundColor:'#15F7CE',
    color:'white',
    textAlign:'center',
    fontSize:30,
    margin:20,
    borderRadius: 5,
  },
  // title:{
  //   marginTop:-50,
  // },
  // titlestyle:{
  //   fontSize:30,
  //   marginLeft:130,
  // },
  // titlestyle1:{
  //   fontSize:30,
  //   marginLeft:100,
  // },
  // titlestyle2:{
  //   fontSize:30,
  //   marginLeft:150,
  // },
  imageStyle3:{
    width:105,
    height:100,
    borderRadius: 100,
    marginTop:-50,
    marginBottom:50,
    marginLeft:130,
   
  }
});
