import React from "react";
import {Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';


export function ScreenA(){
    const navigation =useNavigation();

    function openScreen(){
        navigation.navigate('screenB', {name: 'Rodrigo'})
    }


    return (
        <View style={{flex:1, backgroundColor:'red'}}>
            <Button 
             title="Ir para tela B"
             onPress={openScreen}
            />

        </View>
    )
}