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
  AsyncStorage,
} from 'react-native';


const AS_KEY = "as_key";


type Props = {};
export default class storageDemo extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      insesrtKey: "",//用于保存用户输入要插入的key
      insertValue: "", //用于保存用户输入要插入的value
      queryKey: "",//用于保存用户输入的要查询的key
      queryValue: "",//用于根据queryKey，查询到的持久化value值
    }
  }
  /*举例如何更新一个state值、其余的请自行实现*/
  updateInsertKey(input) {
    console.log("updateInsertKey:" + input);
    this.setState({
      insesrtKey: input
    })
  }


  clearScreen() {
    this.setState({
      insesrtKey: "",
      insesrtValue: "",
      queryKey: "",
      queryValue: ""
    });
  }

  //清除
  clear() {
    var _that = this;
    AsyncStorage.clear(function (err) {
      if (!err) {
        _that.setState({
          insesrtKey: "",
          insertValue: ""
        });
        alert('存储的数据已清除成功!');
      }
    });
  }
  //添加

  save() {
    AsyncStorage.setItem(this.state.insesrtKey, this.state.insertValue,
      (error) => {
        if (error) {
          return;
        } else {
          alert('存储成功');
        }
      });
  }
  //查询

  get() {

    AsyncStorage.getItem(this.state.insesrtKey, (Error, result) => {
      if (result === null) {
        alert('获取失败' + result);
      } else {
        this.setState({
          msg: <View style={styles.horizonItem}>
            <Text style={styles.textStyle}>
              value:
      </Text>
            <Text style={styles.inputStyle}>
              {this.state.queryValue + result}
            </Text>
          </View>
        });
      }
    })
  }
  //删除
  del() {
    AsyncStorage.removeItem(this.state.insesrtKey, function (error) {
      if (error) {
        alert('删除失败')
      } else {
        alert('删除成功')
      }
    });


  }


  render
    () {
    return (
      <View style={styles.container}>
        <View style={styles.up}>
          <View style={styles.horizonItem}>
            <Text style={styles.textStyle}>
              key:
            </Text>
            <TextInput style={styles.inputStyle}
              value={this.state.insesrtKey}
              onChangeText={(insesrtKey) => this.setState({ insesrtKey })}>
            </TextInput>
          </View>
          <View style={styles.horizonItem}>
            <Text style={styles.textStyle}>
              value:
            </Text>
            <TextInput style={styles.inputStyle}
              value={this.state.insertValue}
              onChangeText={(insertValue) => this.setState({ insertValue })}>
            </TextInput>
          </View>
          <Text style={styles.buttonStyle}
            onPress={this.save.bind(this)}>
            添加
          </Text>
        </View>

        <View style={styles.down}>
          <View style={styles.horizonItem}>
            <Text style={styles.textStyle}>
              key:
          </Text>
            <TextInput style={styles.inputStyle}
              onChangeText={(insesrtKey) => this.setState({ insesrtKey })}>
            </TextInput>
          </View>

          {/* <View style={styles.horizonItem}>
            <Text style={styles.textStyle}>
              value:
          </Text>
          <Text style={styles.inputStyle}>
              {this.state.queryValue}
            </Text>
          </View> */}
          {this.state.msg}

          <View style={styles.buttonSet}>
            <Text style={styles.buttonStyle}
              onPress={this.get.bind(this)}>
              查询
          </Text>
            <Text style={styles.buttonStyle}
              onPress={this.clearScreen.bind(this)}>
              清空value
          </Text>
          </View>

          <View style={styles.buttonSet}>
            <Text style={styles.buttonStyle}
              onPress={this.del.bind(this)}>
              删除
          </Text>
            <Text style={styles.buttonStyle}
              onPress={this.clear.bind(this)}>
              清空数据
          </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF',
  },
  up: {
    flex: 1,
    backgroundColor: "#E6E6FA",
  },
  down: {
    flex: 1,
    backgroundColor: "#B0C4DE",
  },

  horizonItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor:'skyblue',
  },

  inputStyle: {
    flex: 1,
    marginRight: 10,
    color: 'white',
    fontSize: 30,
  },
  textStyle: {
    backgroundColor: 'gray',
    color: '#fff',
    fontSize: 20,
    margin: 5,
    padding: 5,
  },

  textvalueStyle: {
    flex: 1,
    marginRight: 10,
    color: 'white',
    fontSize: 30,
    backgroundColor: 'gray',
    textDecorationLine: "underline",
  },
  buttonStyle: {
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    margin: 20,
  },

  buttonSet: {
    flexDirection: 'row',
    flexWrap: 'nowrap'
  }
});
