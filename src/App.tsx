import 'react-native-gesture-handler';
import Routes from "./routes";
import '@azure/core-asynciterator-polyfill'

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);


export default function App(){
  return (
    <Routes />
  )

}