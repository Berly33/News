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
  ScrollView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Rainbow extends Component<Props> {
  render() {
    return (
      <ScrollView style = {styles.scrollViewStyle}
      stickyHeaderIndices={[0]}>
      
      <ScrollView style = {styles.scrollViewStyle}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      
        {this.renderItem()}
        </ScrollView>
      
      {this.renderItem()}
      </ScrollView>
    );
  }

  renderItem() { 
    // 数组 
    var itemAry = [];
     // 颜色数组
      var colorAry = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo','purple']; 
      // 遍历 
      for (var i = 0; i<colorAry.length; i++) { 
        itemAry.push( 
        <View key={i} 
              style={[styles.itemStyle, {backgroundColor: colorAry[i]}]}>
        </View>);
        } 
         return itemAry;
      }




}

const styles = StyleSheet.create({
  scrollViewStyle: {
    backgroundColor: 'gray',
  },
  itemStyle: {
    width:500,
    height:200,
  
  },

});
