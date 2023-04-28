import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { ScreenA } from '../screens/screenA';
import { ScreenB } from '../screens/screenB';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {Screen, Navigator } = createBottomTabNavigator();


export default function TabRoutes(){
    return (
        <Navigator
        
        screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
        }}
        >
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon : ({color,size}) =>(
                        <MaterialIcons 
                        name="home"
                        color={color}
                        size={size}
                        />
                    )
                }}
             
            ></Screen>
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    tabBarLabel: 'Novo',
                    tabBarIcon : ({color,size}) =>(
                        <MaterialIcons 
                        name="add"
                        color={color}
                        size={size}
                        />
                    )
                }}
            ></Screen>
        </Navigator>
    )
}
