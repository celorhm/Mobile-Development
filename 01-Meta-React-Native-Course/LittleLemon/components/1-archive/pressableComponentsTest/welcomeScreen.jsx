import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable } from 'react-native';

export function WelcomeScreen({ navigation }) {
    const [firstName, onChangeFirstName] = useState('');

    return (
        <ScrollView style={styles.container}>
            <Text>Welcome to Little Lemon</Text>
            <Text>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
            </Text>
            <Pressable
                onPress={() => navigation.navigate('MenuScreen')}
            >
                <Text style={styles.buttonText}>Show Menu</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    pressButton: {
        backgroundColor: 'brown',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
});
