import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'
import { use, useState } from 'react'


export const LoginComponent = () => {
    const [password, onChangePassword] = useState('')
    const [email, onChangeEmail] = useState('')
    return (
        <ScrollView >
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue</Text>
            <TextInput placeholder='email' value={email} onChangeText={onChangeEmail} style={styles.input} keyboardType={'email-address'} />
            <TextInput placeholder='password' value={password} onChangeText={onChangePassword} style={styles.input} secureTextEntry={true} keyboardType={'default'} />
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 2
    },
    headerText: {
        padding: 10,
        fontSize: 30,
        color: '#efefee'
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#edefee',
        textAlign: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: '#EDEFEE',
    }

})