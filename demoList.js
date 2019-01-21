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
//   ListView,
//   Image,
//   SectionList
// } from 'react-native';

// //  let data=["Amy","Apple","Asher","Black","Bee","Brian","Daniel",
// // "David","Frank","Fiona","Friday","Jack","Jason","Jasper","Jasmine"];
// import data from "./sectionData.json";

// type Props = {};
// export default class demoList extends Component<Props> {

  
//   constructor(props) {  
//     super(props);  
//       let ds=new ListView.DataSource({
//         rowHasChanged:(r1,r2)=>r1!==r2,
//         sectionHeaderHasChanged:(s1,s2)=>s1 !==s2,
        
//       });
//       this.state={
//         dataSource:ds.cloneWithRowsAndSections(data)
//       }
//     }

//     componentDidMount(){
//       fetch("http://212.64.25.41:8080/listview/sectionData.json")
//       .then(response=>response.json())
//       .then(
//         responseData=>{
//         let ds=new ListView.DataSource({
//           rowHasChanged:(r1,r2)=>r1!==r2,
//           sectionHeaderHasChanged:(s1,s2)=>s1 !==s2,
          
//         });
//         this.setState({
//           dataSource:ds.cloneWithRowsAndSections(responseData)
       
//        })
//       })
//       .catch((error)=>{
//       console.error(error)
      
//     } 
//   )
// }
// _renderHeader(sectionData,sectionID){
//   return(
//     <View style={styles.sectionHeaderViewStyle}>
//     <Text style={styles.IndexStyly}>{sectionID}</Text>

//     </View>
//   )
// }
// _renderRow(rowData){
//   return(
    
//     //  <TouchabeleOpacity onPress={()=>{

//     //  }}>

    
//     // <View style={styles.rowItem}>
//     //   <Image style={styles.imageStyle} 
//     //   source={rowData.icon} />
//     //   <View style={styles.columnItem}>
//     //     <Text style={styles.nameStyle}>{rowData.name}
//     //     </Text>
//     //     <Text style={styles.typeStyle}>{rowData.type}
//     //     </Text>
//     //   </View>
//     // </View>
//     // </TouchabeleOpacity>


//     <View style={styles.rowItem}>
//       <Image style={styles.imageStyle} 
//       source={{uri:rowData.icon}} />
//       <View style={styles.columnItem}>
//         <Text style={styles.nameStyle}>{rowData.name}
//         </Text>
//         <Text style={styles.typeStyle}>{rowData.type}
//         </Text>
//       </View>
  
//     </View> 
//   )
// }



//   render() {
//     return (
//       <View style={styles.container}>
//         <ListView 
//         dataSource={this.state.dataSource}
//         renderRow={this._renderRow}
//         renderSectionHeader={this_renderHeader}
//         />
//       </View>
//     );
//   }
 


// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor:"#ccc",

    
//   },
//   columnItem: {
//     height:50,
//     marginTop:-55,
//     marginLeft:60,
//     marginRight:10,
//     fontSize:16,
//     backgroundColor:"#FDFEFE",
//     padding:8,
//     borderRadius: 5,


//   },
//   imageStyle:{
//     width:50,
//     height:50,
//     borderRadius: 30,
//     margin:5,
//     marginTop:10,
//   },
//   nameStyle:{
//     marginTop:-5,

//   },
//   typeStyle:{
//     marginTop:5,
//   },
//   firstWord:{
//     marginTop:20,
//     marginLeft:55,


//   }
// });
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
  Image,
  TouchableOpacity
} from 'react-native';

let data=["Amy","Apple","Asher","Black","Bee","Brian","Daniel",
"David","Frank","Fiona","Friday","Jack","Jason","Jasper","Jasmine"];

import jsonData from './sectionData.json'

type Props = {};
export default class ContactList extends Component<Props> {

  navigation=null
  constructor(props) {
      super(props);
      navigation=this.props.navigation
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
      
        <TouchableOpacity onPress ={
        ()=>{
          navigation.navigate('Third',
          {icon: rowData.icon,name:rowData.name,type:rowData.type})
        }
      }>
        
     
        <View style={styles.Contact}>
          <Image source={{uri:rowData.icon}} style={styles.ContactIcon}/>
          <View style={styles.ContactMsg}>
            <Text style={styles.ContactName}>{rowData.name}</Text>
            <Text style={styles.ContactType}>{rowData.type}</Text>
          </View>   
        </View> 
        </TouchableOpacity>
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
