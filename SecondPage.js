// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
// } from 'react-native';
// export default class ThirdPage extends Component<Props> {

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>
//                     This is Second Page!
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
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import{StackNavigator} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class SecondPage extends Component<Props> {
  render() {
    const {params}=this.props.navigation.state;
    return (
        <ScrollView>
      <View style={styles.container}>
        <Image style={styles.imageStyle}
           source={require('./img/content.png')}/>

          <Text style={styles.nameStyle}>
          近期，因一篇转载文章，新三板公司虎嗅科技和今日头条闹起了纠纷。今日头条方称虎嗅转载相关文章时损害了其名誉。随后，虎嗅科技发布澄清公告，要求今日头条公开收回相关说法。据悉，今日头条已起诉虎嗅侵犯名誉权，索赔80万元，目前案件已被法院受理。敢跟今天日头条叫板，这家新三板公司胆儿挺肥的。

资料显示，今日头条隶属北京字节跳动科技有限公司（以下简称“字节跳动公司”），虎嗅网由新三板挂牌公司北京虎嗅信息科技股份有限公司（证券简称：虎嗅科技，证券代码：834527.OC）运营。从行业属性上来看，双方均属于互联网信息服务业。

今日头条起诉虎嗅名誉侵权，索赔80万元

据悉，今日头条与虎嗅网的争执源于一篇转载文章，相关媒体报道显示，12月4日，虎嗅网在自身网站及认证微信公众号等渠道发表文章《“印度版今日头条”能干涉印度大选？》，该文称今日头条将“上瘾的有害产品销往海外”，“对于中国来说，当他们面临着愈发严峻的国际局势，当他们发现，其在亚洲的影响力开始受到挑战。”

今日头条方表示，该文最早由虎嗅网认证作者、美国媒体记者艾略特•扎格曼（笔名“Ell查”）发表在美国新闻网站“technode”上。今日头条方面认为，虎嗅网在翻译、发布该条新闻时，擅自增加了英文原文中没有的内容，且这些虎嗅网添加进去的内容，几乎全部是污蔑、辱骂性质的内容。

今日头条在起诉书中称，虎嗅网发布的上述文章严重失实，尤其是将捏造的事实作为文章标题进行传播，带有极为明显的恶意。文章发布后，大量用户受到误导，进行了转发、评论。短时间内，有诸多媒体进行了转载，造成极其恶劣的影响，对今日头条造成了极大的负面影响，导致今日头条名誉贬损社会评价降低，侵犯了公司的名誉权。

据报道，今日头条已将虎嗅网告到海淀法院，要求对方赔礼道歉并赔偿80万元。目前，法院已受理该案。
          </Text>
          
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imageStyle:{
    width:300,
    height:300
  },
  nameStyle:{
    fontSize:16
  },
  typeStyle:{
    fontSize:20
  }


});
