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
    ScrollView,
    Image,
    TouchableOpacity,
    Navigator

} from 'react-native';
import SecondPage from './SecondPage';
import {
    StackNavigator
} from 'react-navigation';

let Dimensions = require('Dimensions');
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

import ImageData from "./BadgeData.json";
export default class Rainbow extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = { currentPage: 1 };
    }

    static defaultProps = {
        duration: 1000,
    }
    componentDidMount() {
        this._startTimer();

    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    // const MyNavigator = StackNavigator({
    //     p1: {screen: page1},
    //     p2: {screen: page2},
    // }, {
    //     initialRouteName: 'p1',
    // });
    
    onPress(){
        
        this.props.navigation.navigate('Fourth');
      }
      onPress1(){
        
        this.props.navigation.navigate('five');
      }

    render() {
        return (
            <View style={styles.commend}>
                <View style={styles.rainbow}>
                    <ScrollView
                        ref='scrollView'
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        onMomentumScrollEnd={(e) => { this._onAnimationEnd(e) }}
                        onScrollBeginDrag={() => { this._onScrollBeginDrag() }}
                        onScrollEndDrag={() => { this._onScrollEndDrag() }}
                    >
                        {this._renderAllImage()}
                    </ScrollView>
                    <View style={styles.news}>
                        {this._renderAllIndicator()}
                    </View>
                </View>
                <ScrollView showVerticalScrollIndicator={true}>
                    <View style={styles.content}>


                        <View style={styles.title}>
                            <TouchableOpacity onPress={
                                () => {
                                    this.props.navigation.navigate('Fourth'
                                       )
                                }
                            }>

                                <Text style={styles.title1}>
                                    敢跟今日头条叫板 这家新三板公司胆儿挺肥!
                            </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress1={
                                () => {
                                    this.props.navigation.navigate('five')
                                }
                            }>
                            <Text style={styles.title7}>
                                好演员的春天来了《我就是演员》被评为今日头条盛典年度综艺
                            </Text>
                            </TouchableOpacity>

                            <Text style={styles.title1}>
                                台湾列车脱轨是人为?还是列车本身问题?你关心的几大问题有回应了!
                            </Text>

                            <Text style={styles.title3}>
                                他做了12年新闻记者最近辞职了 原因是AI的冲击!
                            </Text>

                            <Text style={styles.title3}>
                                微软发布Microsoft News 提供全新的新闻阅读服务
                            </Text>


                            <Text style={styles.title5}>
                                重磅!37位专家预测2019媒体发展新趋势 | 尼曼新闻实验室发布
                            </Text>

                            <Text style={styles.title5}>
                                西安最新登记小学:行知,鱼化及莲湖区各小学终于有消息啦!
                            </Text>

                            <Text style={styles.title5}>
                                西安最新登记小学:行知,鱼化及莲湖区各小学终于有消息啦!
                            </Text>

                            <Text style={styles.title5}>
                                西安最新登记小学:行知,鱼化及莲湖区各小学终于有消息啦!
                            </Text>

                            <Text style={styles.title5}>
                                西安最新登记小学:行知,鱼化及莲湖区各小学终于有消息啦!
                            </Text>

                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
    _onScrollBeginDrag() {
        console.log("开始拖拽");
        this.timer && clearTimeout(this.timer);
    }
    _onScrollEndDrag() {
        console.log("停止拖拽");
        this.timer && this._startTimer();
    }
    _renderAllImage() {
        let allImage = [];
        let imgsArr = ImageData.data;
        for (let i = 0; i < imgsArr.length; i++) {
            let imgsItem = imgsArr[i];
            allImage.push(
                <Image key={i} source={{ uri: imgsItem.icon }} style={styles.imageStyle} />
            );
        }
        return allImage;
    }

    _onAnimationEnd(e) {
        let offsetX = e.nativeEvent.contentOffset.x;
        let pageIndex = Math.floor(offsetX / ScreenWidth);
        this.setState({ currentPage: pageIndex });
    }
    _renderAllIndicator() {
        let indicatorArr = [];
        let style;
        let imgsArr = ImageData.data;
        for (let i = 0; i < imgsArr.length; i++) {
            style = (i == this.state.currentPage) ? { color: 'orange' } : { color: 'white' };
            indicatorArr.push(
                <Text key={i} style={[{ fontSize: 30 }, style]}>
                    &bull;
        </Text>
            );
        }
        return indicatorArr;


    }
    _startTimer() {
        let scrollView = this.refs.scrollView;
        this.timer = setInterval(
            () => {
                console.log('开启定时器');
                let imageCount = ImageData.data.length;
                let activePage = 0;
                if (this.state.currentPage >= imageCount + 1) {
                    activePage = 0;
                } else {
                    activePage = this.state.currentPage + 1;
                }
                this.setState({ currentPage: activePage });
                let offsetX = activePage * ScreenWidth;
                scrollView.scrollResponderScrollTo({ x: offsetX, y: 0, animated: true });
            },
            this.props.duration
        );
    }

}

const styles = StyleSheet.create({
    rainbow: {
        //backgroundColor: '#dddddd'
    },

    imageStyle: {
        height: 150,
        width: ScreenWidth
    },
    news: {
        height: 25,
        width: ScreenWidth,
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
        bottom: 0,

        //flexDirection: 'row',
        alignItems: 'center',
    },
    content: {

        flexDirection: 'row',

    },
    Avatar: {
        flex: 1,
        width: 950,
        height: 1750,
    },
    title: {
        flex: 100,
    },
    title1: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#6495ED',
        backgroundColor: "#585858"
    },
    title7: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 30,
        fontWeight: 'bold',
        color: '#6495ED',
        backgroundColor: "#585858"
    },
    title2: {
        fontSize: 16,
        marginLeft: 10,
        backgroundColor: "#585858",
        marginTop: 10,
    },
    Avatar1: {
        width: 50,
        height: 50,
        marginTop: 15,
        marginLeft: 5,
    },
    Avatar4: {
        width: 50,
        height: 50,
        marginLeft: 5,
        marginTop: 15,
    },
    Avatar5: {
        width: 50,
        height: 50,
        marginLeft: 5,
        marginTop: 15,
    },
    Avatar6: {
        width: 50,
        height: 50,
        marginLeft: 5,
        marginTop: 15,
    },
    img: {
        marginTop: 10,
        marginLeft: 10,
    },
    img1: {
        marginTop: 20,
        marginLeft: 10,
    },
    Avatar2: {
        width: 50,
        height: 50,
        marginLeft: 5,
        marginTop: 15,
    },
    title3: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#6495ED',
        backgroundColor: "#585858"
    },

    title4: {
        fontSize: 16,
        marginLeft: 10,
        backgroundColor: "white",
        marginTop: 10,
    },
    all: {

        flexDirection: 'column',

    },
    centent1: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 10,
    },
    left1: {
        marginLeft: 5,
    },


    imageStyle1: {
        height: 120,
        width: 120,
    },
    Avatar3: {
        width: 50,
        height: 50,
        marginLeft: 5,
        marginTop: 15,
    },
    title5: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#6495ED',
        backgroundColor: "#585858"
    },
    title6: {
        fontSize: 16,
        marginLeft: 10,
        backgroundColor: "white",
        marginTop: 10,
    },
    big: {
        flexDirection: 'column',

    },
    centent2: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 5,
    },
    left: {
        marginLeft: 5,
    },
    right: {
        marginLeft: 5,

    },
    center: {
        marginLeft: 5,

    },
    imageStyle2: {
        height: 85,
        width: 85,
    },
});
