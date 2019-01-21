import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
export default class FourthPage extends Component<Props> {
    static navigationOptions = {
        tabBarLabel: '朋友圈',
        tabBarIcon:({tintColor})=>(
            <Image
                source={require('./img/fd.jpg')}
                style={{width:20,height:20,}}
                />)
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    This is Fourth Page!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    textView: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color:'red'
    },
});
