import  {createContext} from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { LazyPessoas,Pessoas } from '../models';

let dataPessoa:LazyPessoas[] =[]
const getPessoas = async function (){
    const pessoas =  await DataStore.query(Pessoas);

    //console.info(pessoas);

    return pessoas;
}

getPessoas().then((res)=>{ dataPessoa=res});

const ContextoPessoa = createContext({}) 

export const PessoaProvider = (props) => {
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

    




  