import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import { Button } from 'react-native-web';
import { WelcomeScreen } from './welcomeScreen';

export function LoginScreen() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [loggedIn, onLogin] = useState(false)

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            {loggedIn ? (
                <>
                    <Text style={styles.regularText}>You are logged in!! </Text>
                    <WelcomeScreen />
                </>
            ) : (
                <>
                    console.log(loggedIn)
                    <Text style={styles.regularText}>Login to continue </Text>
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
                        onPress={() => onLogin(!loggedIn)}
                    >
                        <Text style={styles.btnText}>Login</Text>
                    </Pressable>
                </>
            )

            }

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    inputBox: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: '#EDEFEE',
    },
    btnContainer: {
        backgroundColor: 'salmon',
        padding: 10,
        marginVertical: 4,
        margin: 150,
        borderWidth: 2,
        borderRadius: 20
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
});
