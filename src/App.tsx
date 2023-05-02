import 'react-native-gesture-handler';
import Routes from "./routes";
import '@azure/core-asynciterator-polyfill'

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import  {PessoaProvider}  from './context/pessoas';


Amplify.configure(awsExports);



export default function App(){
  return (
    <PessoaProvider>
      <Routes/>
    </PessoaProvider>

  )
}