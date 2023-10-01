import { createDrawerNavigator} from '@react-navigation/drawer';
import { ScreenA } from '../screens/screenA';
import { ScreenB } from '../screens/screenB';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomSidebarMenu from '../components/customsideBar';
import ListUsers from '../screens/ListUsers';
import FormUsers from '../screens/formUser';

const {Screen, Navigator } = createDrawerNavigator();


export default function DrawerRoutes(){
    return (
        <Navigator
        screenOptions={{
            title:"Teste",
            drawerLabel: "teste2",
            drawerIcon:()=><MaterialIcons name="home" size={20}/>,
            drawerActiveTintColor: '#112299',
            drawerInactiveTintColor: 'white',
            drawerActiveBackgroundColor : '#336699',
            drawerContentContainerStyle: {
                backgroundColor:'#336699',
                flex: 1
            },
            
            drawerLabelStyle:{
                
                color:'white'
            },
            headerShown: true,
            
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle:{
                backgroundColor: '#336699'
            }
        }}
            drawerContent={props => <CustomSidebarMenu {...props} />}

        >
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    drawerLabel:'Home',
                    drawerIcon: ()=><MaterialIcons
                    name="home"
                    size={20}

                    />
                }}
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    drawerLabel:'New',
                    drawerIcon: ()=><MaterialIcons
                    name="add"
                    size={20}

                    />
                }}
            />
            <Screen
                name='listaMembros'
      
                component={ListUsers}
                options={{
                    title:"Lista de Membros",
                    drawerLabel:'Lista de Membros/Agregados',
                    drawerIcon: ()=><MaterialIcons
                    name="group-add"
                    size={20}

                    />
                }}
            />
            <Screen
                name='formUser'
                component={FormUsers}
                options={{
                    drawerItemStyle: { height: 0 }

                }}
                />
        </Navigator>
    )
}
