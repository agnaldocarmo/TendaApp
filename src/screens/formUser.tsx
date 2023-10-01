import React, { useState,useEffect } from 'react';
import {View,Text, Platform, TextInput, StyleSheet, Button} from 'react-native';
import {useRoute,useNavigation} from '@react-navigation/native'
import { DataStore } from '@aws-amplify/datastore';
import { LazyPessoas, Pessoas } from '../models';

type ParamsProps = {
    pessoa: Pessoas;
}

import DateTimePicker from '@react-native-community/datetimepicker';

function FormUsers() {
    const navigation = useNavigation();
    const route= useRoute();
    var params = route.params as ParamsProps;
    console.warn(params.pessoa.nome)

    const [pessoa , setPessoa] = useState()


    useEffect(() => {
        /**
         * This keeps `post` fresh.
         */
        const sub = DataStore.observeQuery(Pessoas, (c) =>
            c.id.eq(params.pessoa.id)
        ).subscribe(({ items }) => {
            console.warn('mounted')
            setPessoa(items[0]);
        });
        
        return () => {
          sub.unsubscribe();
        };
      }, []);


    //console.warn("teste "+params.pessoa.nome)



    
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode: React.SetStateAction<string>) => {
        if (Platform.OS === 'android') {
            setShow(false);
        // for iOS, add a button that closes the picker
        }
            setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };    

    return (
        <View style={style.form}>
            <Text>
                Nome:
            </Text>
            <TextInput
                style={style.input}
                onChangeText={(text) => {
                    /**
                     * Each keypress updates the post in local React state.
                     */
                    setPessoa(
                      Pessoas.copyOf(pessoa, (draft) => {
                        draft.nome = text;
                      })
                    );
                  }}
                placeholder='Informe o Nome'
                value={pessoa.nome?.toString()}
            />

            <Text>
                Email:
            </Text>
            <TextInput
                style={style.input}
                onChangeText={(text) => {
                    /**
                     * Each keypress updates the post in local React state.
                     */
                    setPessoa(
                      Pessoas.copyOf(pessoa, (draft) => {
                        draft.email = text;
                      })
                    );
                  }}

                placeholder='Informe o E-mail'
                value={params.pessoa.email?.toString()}
            />     

            <Text>
                CPF:
            </Text>
            <TextInput
                style={style.input}
                onChangeText={(text) => {
                    /**
                     * Each keypress updates the post in local React state.
                     */
                    setPessoa(
                      Pessoas.copyOf(pessoa, (draft) => {
                        draft.cpf = text;
                      })
                    );
                  }}
                placeholder='Informe o CPF'
                value={params.pessoa.cpf?.toString()}
            />      
            <Text>
                Data Nascimento:
            </Text>
  
                {show && (
            <DateTimePicker
            testID="dateTimePicker"
            dateFormat='day month year'
            value={ new Date(pessoa.data_nasc?.toString())}
           // mode={mode}
            is24Hour={true}
            onChange={onChange}
            />
        )}     

        <Button 
        title='Salvar'
        
        onPress={async () => {
            /**
             * This post is already up-to-date because `observeQuery` updated it.
             */
            if (!pessoa) {
              return;
            }
            const savedPost = await DataStore.save(pessoa);
            console.log('Post saved: ', savedPost);
            navigation.navigate('listaMembros');
          }}

        />

  

        </View>
    );
}

const style = StyleSheet.create({
    form:{
        padding:12
    },
    input:{
        height: 40,
        borderColor: 'gray',
        marginBottom: 10,
    }
})

export default FormUsers;

function setDate(currentDate: any) {
    throw new Error('Function not implemented.');
}
