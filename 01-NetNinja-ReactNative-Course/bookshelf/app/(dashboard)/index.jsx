import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { ThemedText } from '../../components/ThemedText'
import { ThemedView } from '../../components/ThemedView'
import { useUserContextHook } from '../../hooks/useUserContext'
import { Spacer } from '../../components/Spacer'

const HomeScreen = () => {
    const { user } = useUserContextHook();

    return (
        <ThemedView safe={true}>
            <ThemedText title={true}>Home Screen</ThemedText>
            <Spacer />
            <ThemedText >Hello, {user.name}, Welcome!!!</ThemedText>
        </ThemedView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        alignItems: 'center',
    }
})