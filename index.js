
// import App from './App';
// import chat from './chat';
// import Rainbow from './Rainbow';
// import moments from './moments';
// import storageDemo from './storageDemo';
// import test from './test';
// import demoList from './demoList';


//AppRegistry.registerComponent('Login', () => App);
//AppRegistry.registerComponent('Login', () => chat);
//AppRegistry.registerComponent('Login', () => Rainbow);
//AppRegistry.registerComponent('Login', () => moments);
//AppRegistry.registerComponent('Login', () => storageDemo);
//AppRegistry.registerComponent('Login', () => test);
//AppRegistry.registerComponent('Login', () => demoList);



// import { AppRegistry } from 'react-native';
// import App from './App';

//import demoList from './demoList';
//import secondPage from './secondPage';

// const simpleApp = StackNavigator({
//     Login:{screen:demoLogin},
//     Second:{screen: demoList},
//     Third:{screen:ContactDetail},      
//     });




// AppRegistry.registerComponent('Login', () => simpleApp);
import{StackNavigator} from 'react-navigation'
import React from 'react';
import { AppRegistry,Image} from 'react-native';
import ContactDetail from './ContactDetail';
import demoLogin from './demoLogin';
import chat from './chat';
import moments from './moments';
import demoList from './demoList';
import FirstPage from './FirstPage';
import demoWeb from './demoWeb';
import SecondPage from './SecondPage';
import content2 from './content2';
import {
    TabNavigator,
} from 'react-navigation';

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];

console.disableYellowBox = true // 关闭全部黄色警告

const SimpleAppNavigator = TabNavigator({
    page1: {
			screen: moments,//组件名
			navigationOptions:{
					tabBarLabel:'首页',
					tabBarIcon:({tintColor})=>(
					<Image
						source={require('./img/chat.jpg')}
						style={{width:20,height:20,resizeMode:'stretch'}}
						/>//image组件
					)
					}
			},
    // page2: {
	// 		screen: SecondPage,
	// 		navigationOptions:{
	// 				tabBarLabel:'页面2',
	// 				tabBarIcon:({tintColor})=>(
	// 				<Image
	// 					source={require('./img/chat.jpg')}
	// 					style={{width:20,height:20,resizeMode:'stretch'}}
	// 					/>)
	// 			}
	// 		},
    page3: {
        screen: FirstPage,
        navigationOptions:{
            tabBarLabel:'上传',
            tabBarIcon:({tintColor})=>(
            <Image
                source={require('./img/person.jpg')}
                style={{width:20,height:20,resizeMode:'stretch'}}
                />//image组件
            )
            }
    
    },

    page4: {
        screen: chat,
        navigationOptions:{
            tabBarLabel:'客服',
            tabBarIcon:({tintColor})=>(
            <Image
                source={require('./img/fd.jpg')}
                style={{width:20,height:20,resizeMode:'stretch'}}
                />//image组件
            )
            }
    }
	},
	{
        initialRouteName: 'page1',//初始页面
        tabBarPosition:'bottom',
		swipeEnabled: true,//滑动
		animationEnabled: true,
		lazy: false,//用那个加载那个
		tabBarOptions:{
			style:{
				backgroundColor:'skyblue'
			},
			showIcon:true,//是否显示图片
		}
	});

    const simpleApp = StackNavigator({
        Login:{screen:demoLogin},
        Second:{screen: SimpleAppNavigator},
        Third:{screen:ContactDetail}, 
        Fourth:{screen:SecondPage},
        five:{screen:content2},     
        });
// AppRegistry.registerComponent('Login', () => SimpleAppNavigator);
   AppRegistry.registerComponent('Login', () => simpleApp);
   //AppRegistry.registerComponent('Login', () => demoWeb);
   //AppRegistry.registerComponent('Login', () => FirstPage);
  // AppRegistry.registerComponent('Login', () => moments);

