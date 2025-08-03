import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { LittleLemonHeader, LittleLemonFooter, WelcomeScreen } from '../../Components'
import { DisplayMenuItems } from '../sectionList1'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
const Tab = createBottomTabNavigator();

function App() {
    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'brown' }}>
                <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Welcome') {
                            iconName = focused ? 'information-circle' : 'information-circle-outline'
                        } else {
                            iconName = 'list'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />

                    }
                })}>
                    <Tab.Screen name="Welcome" component={WelcomeScreen} />
                    <Tab.Screen name="Menu" component={DisplayMenuItems} />
                </Tab.Navigator>
            </View>
            <View>
                <LittleLemonFooter />
            </View>
        </>
    )
}

export default App;
/*
<Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Welcome') {
                        iconName = focused ? 'ios-information-circle' : 'ios-information-cirlce-outline'
                    } else if (route.name === 'Menu') {
                        iconName = 'ios-list'
                    }
                    return <Ionions name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            })}>
                <Tab.Screen name="Welcome" component={'Welcome Screen'} />
                <Tab.Screen name="Menu" component={'MenuItems'} />
            </Tab.Navigator>
*/