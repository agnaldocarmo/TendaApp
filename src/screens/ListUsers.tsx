import React from "react";
import {View,Text,Button, FlatList, StyleSheet,StatusBar} from "react-native";
import { DataStore } from '@aws-amplify/datastore';
import { LazyPessoas, Pessoas } from '../models';

type ItemProps = {nome: string, cpf: string};

async function getPessoas(){
    const pessoas =  await DataStore.query(Pessoas);

    console.info(pessoas);
    return pessoas;
}
let dataPessoa:LazyPessoas[] =[]

var PESSOAS =  getPessoas().then(res => {dataPessoa = res});

export default () => {

    const Item = ({nome,cpf}:ItemProps) => (
        <View style={styles.item}>
          <Text style={styles.title}>{nome}-{cpf}</Text>
        </View>
      );
      

    return (
        <View style={styles.screen}>
            <Button onPress={getPessoas} title="obter pessoas1"/>
            <FlatList
        data={dataPessoa}
        renderItem={({item}) => <Item nome={item.nome!} cpf={item.cpf!} />}
        keyExtractor={item => item.id}
      />

        </View>

    )
}


const styles = StyleSheet.create({
    screen:{
        backgroundColor:"green",
        flex: 1
    },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  