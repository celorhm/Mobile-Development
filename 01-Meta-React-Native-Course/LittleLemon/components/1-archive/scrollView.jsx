import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'


const menuItem = [' Marinated Olives \n Carrot \n Bread Sticks \n Lentil Burger \n Panna Cotaa \n Buttered Rice \n Smoked Salmon \n Eggplant Salad \n Kofta \n Fries \n Rice Pilaf \n Baklava \n Falafel \n']

export const MenuItems = ({ navigation }) => {
    return (
        <View style={styles.menuItem_container}>
            <ScrollView style={styles.srollArea_container} horizontal={false}> indicatorStyle={'black'}

                <Text style={styles.scrollArea_outerText} >
                    View Menu Items.
                </Text>

                <Text style={styles.itemList}>
                    {menuItem[0]}
                </Text>
            </ScrollView>
            <Pressable onPress={() => navigation.goBack()}><Text>Go Back</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    header_container: { backgroundColor: '#F4CE14', flex: 0.2 },
    header_innerText: { fontWeight: 'bold', fontSize: 30, textAlign: 'center', margin: 10 },
    footer_container: { backgroundColor: '#F4CE14', color: 'black' },
    footer_innerText: { fontSize: 18, color: 'black', textAlign: 'center' },
    welcome_outerText: { padding: 40, fontSize: 30, textAlign: 'center', color: '#EDEFEE' },
    welcome_innerText: { padding: 20, fontSize: 30, textAlign: 'center', color: 'white', marginVertical: 8 },
    menuItem_container: { flex: 0.75 },
    srollArea_container: { padding: 40, backgroundColor: 'black' },
    scrollArea_outerText: { fontSize: 40, flexWrap: 'wrap', color: 'white', fontWeight: 'bold' },
    itemList: { fontSize: 40, flexWrap: 'wrap', color: 'white' }
})