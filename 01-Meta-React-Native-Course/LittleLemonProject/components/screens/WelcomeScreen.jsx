import { View, Text, StyleSheet, Image, Pressable } from 'react-native';


const Logo = require('../../assets/little-lemon-logo.png')


const LittleLemonLogo = () => {
    return (
        <Image source={Logo} style={styles.image} resizeMode='contain' />
    )
}

export const WelcomeScreen = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <LittleLemonLogo />
                <Text style={styles.innerText}>
                    Little Lemon, your local Mediterranean Bistro
                </Text>
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.pressableBtn} onPress={() => navigation.navigate("subscribe")} on>
                    <Text style={styles.pressableText}>Newsletter</Text>
                </Pressable>
            </View >
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerText: {
        textAlign: 'center',
        fontSize: 20,
        paddingHorizontal: 20,
    },
    image: {
        height: 120,
        width: 120,
        alignSelf: 'center',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressableBtn: {
        backgroundColor: 'forestgreen',
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 40,
        minWidth: '70%',
        alignItems: 'center',
    },
    pressableText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
