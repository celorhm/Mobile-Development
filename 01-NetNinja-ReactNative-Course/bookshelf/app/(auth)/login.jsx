import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { useUserContextHook } from '../../hooks/useUserContext'
//Components
import { ThemedView } from '../../components/ThemedView'
import { ThemedText } from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import { ThemedTextInput } from '../../components/ThemedTextInput'
import { Spacer } from '../../components/Spacer'
import { useRouter } from 'expo-router'

const LoginScreen = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const router = useRouter();

    const { login } = useUserContextHook()

    const handleLogin = async () => {
        setError(null)
        try {
            await login(email, password)
            router.navigate('/')
        } catch (error) {
            setError(error.message)

        }
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView safe={true} style={styles.container}>
                <ThemedText title={true}>Login</ThemedText>
                <Spacer />
                <ThemedView style={styles.textInputContainer}>
                    <ThemedTextInput placeholder={"Email"} onChangeText={setEmail} keyboardType="email-address" value={email} />
                    <Spacer height={50} />
                    <ThemedTextInput placeholder={"Password"} onChangeText={setPassword} secureTextEntry />
                </ThemedView>
                <ThemedView style={styles.buttonContainer}>
                    <ThemedButton text={"Login"} onPress={handleLogin} />
                    <ThemedButton text={"Register"} onPress={() => router.navigate('register')} />
                </ThemedView>
                <Spacer />
                {error && <ThemedView style={styles.errorContainer}><Text style={styles.errorMessage}>{error}</Text></ThemedView>}
            </ThemedView>
        </TouchableWithoutFeedback>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: { justifyContent: 'center' },

    buttonContainer: { padding: 20, flexDirection: 'row', justifyContent: 'space-evenly' },

    textInputContainer: { alignItems: 'center' },

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

