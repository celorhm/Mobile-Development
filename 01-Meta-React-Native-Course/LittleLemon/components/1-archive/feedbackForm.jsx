import { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'

export const FeedbackForm = () => {
    // Setting Local State
    const [firstName, onChangeFirstName] = useState('')
    const [lasttName, onChangelastName] = useState('')
    const [message, onChangeMessage] = useState('')
    const [phoneNumber, onChangePhoneNumber] = useState('')

    return (
        <ScrollView style={inputStyles.container}>
            <Text>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear your experience with us!
            </Text>
            <TextInput style={inputStyles.inputBox} value={firstName} onChangeText={onChangeFirstName} placeholder="First Name" />
            <TextInput style={inputStyles.inputBox} value={lasttName} onChangeText={onChangelastName} placeholder="Last Name" />
            <TextInput style={inputStyles.inputBox} value={phoneNumber} onChange={onChangePhoneNumber} placeholder="Enter Phone Number" keyboardType="phone-pad" />
            <TextInput style={inputStyles.messageInputBox} value={message} onChangeText={onChangeMessage} placeholder="Message" maxLength={250} />
        </ScrollView>
    )
}

const inputStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495e57'
    },
    inputBox: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#f4ce14'
    },
    messageInputBox: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#f4ce14'
    }

})