import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { ThemedText } from '../../components/ThemedText'

const CreateBookScreen = () => {
    return (
        <View>
            <ThemedText title={true}>Create Book</ThemedText>
        </View>
    )
}

export default CreateBookScreen

const styles = StyleSheet.create({})