import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { useUserContextHook } from '../../hooks/useUserContext'
//Components
import { ThemedView } from '../../components/ThemedView'
import { ThemedText } from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import { ThemedTextInput } from '../../components/ThemedTextInput'
import { Spacer } from '../../components/Spacer'

const LoginScreen = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const { login } = useUserContextHook()

    const handleLogin = async () => {
        setError(null)
        try {
            await login(email, password)
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
                    <ThemedButton text={"Register"} onPress={() => console.log('Register')} />
                </ThemedView>
                <Spacer />
                {error && <View><Text>{error}</Text></View>}
            </ThemedView>
        </TouchableWithoutFeedback>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: { justifyContent: 'center' },
    buttonContainer: { padding: 20, flexDirection: 'row', justifyContent: 'space-evenly' },
    textInputContainer: { alignItems: 'center' }
})

