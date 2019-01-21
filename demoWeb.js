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
  WebView,
  Dimensions
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
const {width, height} = Dimensions.get('window');
// const url = "https://news.sina.com.cn/";
export default class demoWeb extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

        <WebView
          style={{width:width,height:height}}
          //source={{uri:url}}
          source={require('./text.html')}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={false}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
