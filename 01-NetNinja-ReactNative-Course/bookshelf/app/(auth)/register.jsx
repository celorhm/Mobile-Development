import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'

//Components
import { ThemedView } from '../../components/ThemedView'
import { ThemedText } from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import { ThemedTextInput } from '../../components/ThemedTextInput'
import { Spacer } from '../../components/Spacer'
import { useUserContextHook } from '../../hooks/useUserContext'

const RegistractionScreen = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const [username, setUsername] = useState()
    const { user, register } = useUserContextHook()


    const handleRegistration = async () => {
        setError(null)
        try {
            await register(email, password)
            console.log('Current user is ', user)
        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView safe={true} style={styles.container}>
                <ThemedText title={true}>Create Account</ThemedText>
                <Spacer />
                <ThemedView style={styles.textInputContainer}>
                    <ThemedTextInput placeholder={"Username"} onChangeText={setUsername} value={username} />
                    <Spacer height={25} />
                    <ThemedTextInput placeholder={"Email"} onChangeText={setEmail} keyboardType="email-address" value={email} />
                    <Spacer height={25} />
                    <ThemedTextInput placeholder={"Password"} onChangeText={setPassword} secureTextEntry />
                </ThemedView>
                <ThemedView style={styles.buttonContainer}>
                    <ThemedButton text={"Sign Up"} onPress={handleRegistration} />
                    <ThemedButton text={"Sign In"} onPress={() => console.log('Register')} />
                </ThemedView>

                {error && <><Spacer /> <Text style={styles.errorMessage}>{error}</Text></>}
            </ThemedView>
        </TouchableWithoutFeedback>

    )
}

export default RegistractionScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    buttonContainer: {
        padding: 20, flexDirection: 'row', justifyContent: 'space-evenly'
    },
    textInputContainer: {
        alignItems: 'center'
    },
    errorMessage: {
        fontSize: 20,
        textAlign: 'center',
        color: 'tomato',
        padding: 16,
        backgroundColor: '#f5c1c8',
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1

    }
})

