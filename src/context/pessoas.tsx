import  {JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, createContext} from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { LazyPessoas,Pessoas } from '../models';

let dataPessoa:LazyPessoas[] =[]

const ContextoPessoa = createContext({}) 

export const getPessoas = async function (){
    const pessoas =  await DataStore.query(Pessoas);
    console.warn('catch pessoa!')
    return pessoas;
}


export const PessoaProvider = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {

    return (
        <ContextoPessoa.Provider value={{
            state:{
                dataPessoa
            }
        }}>
         {props.children}
        </ContextoPessoa.Provider>
    )
}

export default ContextoPessoa

    




  