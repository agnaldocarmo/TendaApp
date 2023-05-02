import React, { useState } from 'react';
import {View,Text, Platform, TextInput, StyleSheet, Button} from 'react-native';
import {useRoute,useNavigation} from '@react-navigation/native'
import { DataStore } from '@aws-amplify/datastore';
import { Pessoas } from '../models';


import DateTimePicker from '@react-native-community/datetimepicker';

function FormUsers() {
    const navigation = useNavigation();
    const route= useRoute();

    //console.warn(route.params)
    const [pessoa , setPessoa] = useState(route.params.pessoa)
    console.warn(pessoa.nome)

    const [nome,setNome] = useState(pessoa.nome)

    console.warn(pessoa.nome);

    const [email,setEmail] = useState(pessoa.email)
    const [cpf,setCpf] = useState(pessoa.cpf)
    const [data_nasc,setData_nasc] = useState(pessoa.data_nasc)

    
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
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
                onChangeText={vnome => setNome(vnome)}
                placeholder='Informe o Nome'
                value={nome}
            />

            <Text>
                Email:
            </Text>
            <TextInput
                style={style.input}
                onChange={vemail => setEmail(vemail)}
                placeholder='Informe o E-mail'
                value={email}
            />     

            <Text>
                CPF:
            </Text>
            <TextInput
                style={style.input}
                onChange={vcpf => setCpf(cpf)}
                placeholder='Informe o CPF'
                value={cpf}
            />      
            <Text>
                Data Nascimento:
            </Text>
  
                {show && (
            <DateTimePicker
            testID="dateTimePicker"
            dateFormat='day month year'
            value={data_nasc}
            // mode={mode}
            is24Hour={true}
            onChange={onChange}
            />
        )}     

        <Button 
        title='Salvar'
        onPress={async ()=>{
            /* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
            await DataStore.save(Pessoas.copyOf(pessoa, updPessoa => {
                updPessoa.nome = nome,
                updPessoa.cpf = cpf,
                updPessoa.data_nasc = data_nasc
                //updPessoa.email = email.toString()
    // Update the values on {item} variable to update DataStore entry
            })).then(()=> {
                navigation.navigate('listaMembros');
            }
            );
            


        }
        }   
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