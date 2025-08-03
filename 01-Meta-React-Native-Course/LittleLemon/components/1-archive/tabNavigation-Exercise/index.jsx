import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import LoginScreen from './LoginScreen'
import { WelcomeScreen } from './components_'
import { MenuItems } from '../../menuItems'

const Tab = createBottomTabNavigator()

function App() {
    return (
        <>
            <View>
                <LoginScreen />

            </View>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Welcome') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === 'MenuItems') {
                        iconName = focused ? 'menu' : 'menu-outline'
                    } else if (route.name === 'Logout') {
                        iconName = focused ? 'close-circle' : 'close-circle'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}>
                <Tab.Screen name='Welcome' component={WelcomeScreen} />
                <Tab.Screen name='MenuItems' component={MenuItems} />
                <Tab.Screen name='Logout' component={LoginScreen} />
            </Tab.Navigator>
        </>
    )
}

export default App;