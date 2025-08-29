import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../../components/ThemedText'
import { ThemedView } from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'
import { Spacer } from '../../components/Spacer'
import { useUserContextHook } from '../../hooks/useUserContext'
import { useRouter } from 'expo-router'

const ProfileScreen = () => {
    const { logout } = useUserContextHook()
    const router = useRouter()


    const handleLogout = async () => {
        await logout()
    }
    return (
        <ThemedView safe={true}>
            <ThemedText title={true}>Profile Page</ThemedText>
            <Spacer />
            <ThemedView style={styles.btn}>
                <ThemedButton text={"Logout"} onPress={handleLogout} />
            </ThemedView>
        </ThemedView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',   // aligns children horizontally
        justifyContent: 'center' // aligns vertically
    }
})