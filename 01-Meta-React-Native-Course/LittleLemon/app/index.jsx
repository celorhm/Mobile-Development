import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { WelcomeScreen, LittleLemonHeader, LittleLemonFooter } from '../components/drawNavigationComponents__'
import { MenuItems } from '../components/menuItems'
import LoginScreen from "../components/LoginScreen";

//Drawer Navigation Container
const Drawer = createDrawerNavigator()

function App() {
    return (
        <>
            <View style={styles.container}>
                <LittleLemonHeader />
                <Drawer.Navigator
                    screenOptions={{ drawerPosition: 'right', drawerStyle: '' }}
                    initialRouteName='Login'
                    useLegacyImplementation
                >
                    <Drawer.Screen name="Welcome" component={WelcomeScreen} />
                    <Drawer.Screen name="MenuItems" component={MenuItems} />
                    <Drawer.Screen name="Login" component={LoginScreen} />
                </Drawer.Navigator>
            </View>
            <View>
                <LittleLemonFooter />
            </View>
        </>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tomato'
    }
})