import { SafeAreaView, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { VegetablesScreen } from '../screens/VegetableScreen'
import { DairyScreen } from '../screens/DairyScreen'
import { FruitsScreen } from '../screens/FruitsScreen'
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator()


export const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={
            ({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name === "veggies") {
                        iconName = focused ? 'layers' : 'layers-outline'
                    } else if (route.name === "dairy") {
                        iconName = focused ? 'reorder-four' : 'reorder-four-outline';
                    } else if (route.name === "fruits") {
                        iconName = focused ? 'filter-circle' : 'filter-circle-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarInactiveTintColor: 'darkgray'
            })
        }>
            <Tab.Screen name="veggies" component={VegetablesScreen} options={
                { title: 'Vegetable' }
            } />
            <Tab.Screen name="fruits" component={FruitsScreen} options={
                { title: 'Fruits' }
            } />
            <Tab.Screen name="dairy" component={DairyScreen} options={
                { title: 'Dairy Products' }
            } />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})