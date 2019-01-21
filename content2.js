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
export default class content2 extends Component<Props> {
  render() {
    const {params}=this.props.navigation.state;
    return (
        <ScrollView>
      <View style={styles.container}>
        <Image style={styles.imageStyle}
           source={require('./img/ct2.png')}/>

          <Text style={styles.nameStyle}>
          12月23日，“我是头条·2018年今日头条年度盛典”在北京水立方举办。作为今日头条一年一度最大的线下品牌活动，“头条盛典”已经发展成为文娱领域最具影响力的盛典之一。本次盛典汇聚了百余位今日头条平台上热度最高的明星名人，共颁发年度人物、公益项目、音乐人、影视剧、综艺节目等26项荣誉。《我就是演员》获“今日头条年度综艺”。

盛典由汪涵和谢楠担任主持，Angelababy杨颖、蔡徐坤、关晓彤、江疏影、李易峰、罗志祥、吴亦凡、杨紫、周冬雨等明星，以及刘永好、李斌、武大靖、奚梦瑶等财经、科技、体育、时尚界名人纷纷出席现场，并领取年度荣誉。

10-好演员的春天来了! 《我就是演员》被评为今日头条盛典年度综艺309.png

《我就是演员》获“今日头条年度综艺”

2017年，一档演技竞演类励志综艺爆红，让大家对演员的评判标准重新聚焦在演技上。2018年，这档节目回归，并改名为《我就是演员》，由张国立担任推荐人，章子怡、徐峥、吴秀波担任常驻演技导师。

这一季的《我就是演员》，不仅有韩雪、任素汐、范湉湉、刘欢等实力派演员同台飙戏，更有陈凯歌、贾樟柯、许鞍华、陈冲等知名导演的参与，他们不仅提出了更专业的表演建议，更亲自上阵执导短片，充分提高了节目的精彩程度与专业性。

《我就是演员》采用全新的节目模式，是一部突破性的原创佳作。它既是一档传播舞台戏剧魅力的综艺，更是一次正本清源的演员信念之旅。节目在今日头条关注度高达5亿，导师和嘉宾的累计热度过亿，代表国产综艺走出国门。

扶持优质内容，是今日头条平台发展的重要方向。此前，今日头条官方曾发布“闪耀计划”：一方面是百亿流量扶持优质的明星内容合作，另一方面是百亿流量扶持优质的影视项目宣发，将从流量倾斜、深度运营、热点发酵、完善生态等四大方向，助力优质娱乐内容产业健康发展。2018年今日头条上娱乐内容发布增幅高达173%,头部娱乐创作者超过8000人,日均娱乐消费用户高达4500万。今日头条与《一出好戏》的合作,微访谈和话题阅读量超1.4亿,内容总曝光量8200w,多产品联动整体播放量4.35亿，这也充分反映了今日头条的平台上娱乐内容传播的广泛度。
          </Text>
          
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
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
