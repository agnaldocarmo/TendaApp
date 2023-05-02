import React,{ useContext, useState }  from "react";
import {View,Text,Button,TouchableHighlight,Alert, FlatList, StyleSheet,StatusBar} from "react-native";
import { DataStore } from '@aws-amplify/datastore';
import { LazyPessoas, Pessoas } from '../models';
import { ListItem,Avatar } from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import  ContextoPessoa  from '../context/pessoas';



type ItemProps = {nome: string, cpf: string};


export default () => {
  const navigation =useNavigation();

  const {state} = useContext(ContextoPessoa)

  const Item = ({nome,cpf}:ItemProps) => (
      <View style={styles.item}>
        <Text style={styles.title}>{nome}-{cpf}</Text>
      </View>
    );
    

  return (
      <View style={styles.screen}>
          <FlatList
      data={state.dataPessoa}
      renderItem={({item, index, separators}) => (
      <ListItem bottomDivider onPress={()=>navigation.navigate("formUser",{pessoa:item})}>

    {!item.cpf?.toString()
      ?  <Avatar
      rounded
      icon={{
        name: 'person-outline',
        type: 'material',
        size: 26,
      }}
      containerStyle={{ backgroundColor: '#c2c2c2' }}
    />
      : <Avatar
      rounded
      source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
    />
    }
        
        
        <ListItem.Content>
          <ListItem.Title>{item.nome} </ListItem.Title>
          <ListItem.Subtitle>{item.cpf}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron 
        reverse = {false}
        size = {10}
        
        name= "edit"
        type="material"
        raised={true}
        color={'#336699'}

         />
                 <ListItem.Chevron 
        reverse = {false}
        raised = {true}
        size = {10}
        color={'red'}
        type="material"
        name="delete"
        onPress={async ()=>{
          Alert.alert('Excluir pessoa',"Deseja realmente excluir?",[
            {
              text:'Sim',
              async onPress(){
                const modelToDelete = await DataStore.query(Pessoas, item.id);
                DataStore.delete(modelToDelete as LazyPessoas);
                getPessoas().then(res => {setdPessoa(res)});
                console.info("removido")
              }
            }
            ,{
              text:'Não'
            }

          ])

        }
        }


         />
      </ListItem>


      )}
      //renderItem={({item}) => <Item nome={item.nome!} cpf={item.cpf!} />}
      keyExtractor={item => item.id}
    />

      </View>

  )
}


const styles = StyleSheet.create({
    screen:{
        backgroundColor:"white",
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
  