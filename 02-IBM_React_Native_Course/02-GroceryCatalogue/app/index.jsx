import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import { BottomTabs } from '../navigations/TabNavigations';

function App() {
    return (
        <BottomTabs />
    )
}

export default App;


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})