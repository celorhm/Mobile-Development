import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'

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
            await register(email, password, username)
            router.navigate('index')
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
                    <ThemedButton text={"Sign In"} onPress={() => router.navigate('login')} />
                </ThemedView>

                <Spacer />
                {error && <ThemedView style={styles.errorContainer}><Text style={styles.errorMessage}>{error}</Text></ThemedView>}
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
    errorContainer: {
        backgroundColor: '#ffebee',
        padding: 16,
        borderRadius: 8,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    errorMessage: {
        color: '#d32f2f',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
    },
})

