/* eslint-disable prettier/prettier */
import React from 'react';
import {Button} from 'react-native';
import {
    Text,
    View,
} from '../component/Themed';
 
const LoginScreen = ({navigation})=> {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>登录页面</Text>
            <Button title={"登录"} onPress={()=>{
                navigation.navigate('TabNav');
            }} />
        </View>
    );
};
 
export default LoginScreen;