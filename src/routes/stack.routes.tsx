import {Header, createStackNavigator} from '@react-navigation/stack';
import { ScreenA } from '../screens/screenA';
import { ScreenB } from '../screens/screenB';

const {Screen, Navigator } = createStackNavigator();


export default function StackRoutes(){
    return (
        <Navigator>
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    title: 'Teala A',
                    headerTitleAlign : 'center',
                    headerStyle:{
                        backgroundColor: 'red'
                    },
                    headerTintColor: '#FFF'

                }}
            ></Screen>
            <Screen
                name='screenB'
                component={ScreenB}
            ></Screen>
        </Navigator>
    )
}
