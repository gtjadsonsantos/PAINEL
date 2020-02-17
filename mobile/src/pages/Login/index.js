import React from 'react';
import { WebView } from 'react-native-webview';


export default function Login ({navigation}){
    const url = navigation.getParam('url_aplication');
    return <WebView style={{flex: 1}} source={{uri: url}} /> 
}


