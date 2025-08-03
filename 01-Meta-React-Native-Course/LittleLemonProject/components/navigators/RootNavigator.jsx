import { View, StyleSheet } from 'react-native'
import { WelcomeScreen } from '../screens/WelcomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Subscribe } from '../screens/SubscribeScreen'

const Stack = createNativeStackNavigator()

export const RootNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerStyle: { textAlign: 'center' } }}
        >
            <Stack.Screen name='welcome' component={WelcomeScreen} options={
                { title: 'Welcome' }
            } style={{ textAlign: 'center' }} />
            <Stack.Screen name='subscribe' component={Subscribe} />
        </Stack.Navigator>
    )
}