// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
// } from 'react-native';
// export default class FirstPage extends Component {

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>
//                     This is First Page!
//                 </Text>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     textView: {
//         fontSize: 16,
//         textAlign: 'center',
//         margin: 10,
//         color:'red'
//     },
// });
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  AlertIOS
} from 'react-native';
 
//图片选择器
// var ImagePicker = require('react-native-image-picker');
import  ImagePicker from 'react-native-image-picker';
//图片选择器参数设置
var options = {
  title: '请选择图片来源',
  cancelButtonTitle:'取消',
  takePhotoButtonTitle:'拍照',
  chooseFromLibraryButtonTitle:'相册图片',
  customButtons: [
    {name: 'hangge', title: 'hangge.com图片'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
 
//默认应用的容器组件
type Props = {};
export default class App extends Component {
   //构造函数
   constructor(props) {
      super(props);
      this.state = {
          avatarSource: null,
          text: ''
      };
   }
 
   //渲染
   render() {
      return (
        <View>
      <View style={styles.container}>
        <Text style={styles.item} onPress={this.choosePic.bind(this)}>选择照片</Text>
        <Image source={this.state.avatarSource} style={styles.image} />
      </View>
        <View style={{paddingTop: 250}}>
        <TextInput
          style={{height: 40}}
          placeholder="心情。。。"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
      <Text style = {styles.buttonStyle}>
          确定
          </Text>
     </View>
      );
   }
 
   //选择照片按钮点击
   choosePic() {
      ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('用户取消了选择！');
      }
      else if (response.error) {
        alert("ImagePicker发生错误：" + response.error);
      }
      else if (response.customButton) {
        alert("自定义按钮点击：" + response.customButton);
      }
      else {
        let source = { uri: response.uri };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          avatarSource: source
        });
      }
    });
   }
 }
 
//样式定义
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop:25
  },
  item:{
    margin:15,
    height:30,
    borderWidth:1,
    padding:6,
    borderColor:'#ddd',
    textAlign:'center'
  },
  image:{
   height:198,
   width:300,
   alignSelf:'center',
 },
 buttonStyle:{
    backgroundColor:'gray',
    color:'white',
    textAlign:'center',
    fontSize:30,
    margin:20,
  }
});
 
