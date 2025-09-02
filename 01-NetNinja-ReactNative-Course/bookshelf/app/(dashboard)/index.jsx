import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

// Custom Components
import { ThemedText } from '../../components/ThemedText'
import { ThemedView } from '../../components/ThemedView'
import { Spacer } from '../../components/Spacer'

// Hooks
import { useUserContext } from '../../hooks/useUserContext'


// HomeScreen Component Definition
const HomeScreen = () => {
    const { user } = useUserContext();

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