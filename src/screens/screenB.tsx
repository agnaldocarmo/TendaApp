import React from "react";
import { useRoute , useNavigation} from "@react-navigation/native";
import {View,Text, Button} from 'react-native';

type ParamsProps = {
    name: string;
}

export function ScreenB(){
    const navigation = useNavigation();
    const route = useRoute();
    const {name } = route.params as ParamsProps;

    return (
        <View style={{flex:1, backgroundColor:'blue', alignItems:'center', justifyContent:'center'}}>
            <Text>{name}
                </Text>
                <Button title="Voltar" onPress={()=> navigation.goBack()} />
        </View>
    )
}