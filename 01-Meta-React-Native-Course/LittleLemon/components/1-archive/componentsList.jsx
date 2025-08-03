import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native'
import { useState } from 'react'
const Styles = require('../styles')

export const LittleLemonHeader = () => {
    return (
        <View style={Styles.headerStyles.container}>
            <Text style={headerStyles.innerText}>
                Little Lemon.
            </Text>
        </View >
    )
}

export const LittleLemonFooter = () => {
    return (
        <View style={footerStyles.container}>
            <Text style={footerStyles.innerText}>
                All rights reserved by Little Lemon, 2022{''}
            </Text>
        </View>
    )
}

export const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'brown' }}>
            <Text style={Styles.welcomeScreenstyles.innerText}> Welcome to Little Lemon </Text>
            <Text style={welcomeScreenstyles.innerText}>
                You are logged in!!
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
            <Pressable
                onPress={() => navigation.goBack()}
            ><Text>Logout</Text></Pressable>
        </View>
    )
}
export function LoginScreen({ navigation }) {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('')

    return (
        <ScrollView>
            <Text style={{}}>Login to continue </Text>
            <TextInput
                style={styles.inputBox}
                value={email}
                onChangeText={onChangeEmail}
                placeholder={'email'}
                keyboardType={'email-address'}
            />
            <TextInput
                style={styles.inputBox}
                value={password}
                onChangeText={onChangePassword}
                placeholder={'password'}
                keyboardType={'default'}
                secureTextEntry={true}
            />
            <Pressable
                style={styles.btnContainer}
                onPress={() => navigation.navigate('Welcome')}
            >
                <Text style={styles.btnText}>Login</Text>
            </Pressable>
        </ScrollView >
    );
}
