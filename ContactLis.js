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
  ListView,
  Image
} from 'react-native';

let data=["Amy","Apple","Asher","Black","Bee","Brian","Daniel",
"David","Frank","Fiona","Friday","Jack","Jason","Jasper","Jasmine"];

import jsonData from './sectionData.json'

type Props = {};
export default class ContactList extends Component<Props> {

  constructor(props) {
      super(props);
      let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2,
        sectionHeaderHasChanged: (s1, s2) => s1 != s2,
      });
      this.state = {
        dataSource: ds.cloneWithRowsAndSections(jsonData)
      }
  }

  componentDidMount(){
    fetch('http://212.64.25.41:8080/listview/sectionData.json')
    .then(Response =>  Response.json())
    .then(responseData => {
      let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2,
        sectionHeaderHasChanged: (s1, s2) => s1 != s2,
      });
      this.setState({
        dataSource : ds.cloneWithRowsAndSections(responseData)
      })
    })
    .catch((error) => {console.error(error)})
  }
  
  _renderRow(rowData) {
    return (
        <View style={styles.Contact}>
          <Image source={{uri:rowData.icon}} style={styles.ContactIcon}/>
          <View style={styles.ContactMsg}>
            <Text style={styles.ContactName}>{rowData.name}</Text>
            <Text style={styles.ContactType}>{rowData.type}</Text>
          </View>   
        </View>
    )
  }
  _renderHeader(sectionData,sectionId){
      return (
        <View style={styles.sectionHeaderViewStyle}>
            <Text style={styles.IndexStyle}>{sectionId}</Text>
        </View>
        )
  }

    render() {
      return (
        <View style={styles.container}>
          <ListView
            dataSource = {this.state.dataSource}
            renderRow={this._renderRow}
            renderSectionHeader={this._renderHeader}
          />
        </View>
      );
    }
  }
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    Contact: {
      flexDirection: "row",
      padding: 10,
    },
    ContactMsg: {
      width: '80%',
      marginLeft: 12,
      borderColor: "#fff",
      borderBottomColor: "#B7B7B7",
      borderWidth: 1,
    },
    ContactName: {
      fontSize: 20,
      color: "black",
    },
    ContactIcon: {
      height: 60,
      width: 60,
      borderRadius: 30
    },
    ContactType: {
      marginTop: 6
    },
    sectionHeaderViewStyle: {
      backgroundColor: '#e8e8e8',
      height: 25,
      justifyContent: 'center',
    },
    IndexStyle:{
      width:"80%",
      fontSize:20,
      marginLeft : 10
    }
  });
