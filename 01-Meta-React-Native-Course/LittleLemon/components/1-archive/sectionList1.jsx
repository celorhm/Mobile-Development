import { View, Text, StyleSheet, SectionList } from 'react-native'

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            'Hummus',
            'Moutabal',
            'Falafel',
            'Marinated Olives',
            'Kofta',
            'Eggplant Salad',
        ],
    },
    {
        title: 'Main Dishes',
        data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
    },
    {
        title: 'Sides',
        data: [
            'Fries',
            'Buttered Rice',
            'Bread Sticks',
            'Pita Pocket',
            'Lentil Soup',
            'Greek Salad',
            'Rice Pilaf',
        ],
    },
    {
        title: 'Desserts',
        data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
    },
    {
        title: 'African Dishes',
        data: ['Banku & Okro', 'Omutuo & Groundnut Soup', 'Beans & Gari', 'Fufu & Soup'],
    },
];
const Item = ({ name }) => (
    <View style={menuStyles.menuItemContainer}>
        <Text style={menuStyles.menuItemText}>{name}</Text>
    </View>
)


export const DisplayMenuItems = () => {
    return (
        <View style={menuStyles.menuContainer}>
            <Text style={menuStyles.menuItemHeadingText}>Menu Items </Text>

            <SectionList
                sections={menuItemsToDisplay}
                renderItem={({ item }) => <Item name={item} />}
                renderSectionHeader={({ section: { title } }) => <Text style={menuStyles.sectionHeader}>{title}</Text>}
                ListFooterComponent={() => <Text style={menuStyles.footerText}>All Rights Reserved by Little Lemon 2022 </Text>}
                ItemSeparatorComponent={() => <View style={menuStyles.separator} />}
            ></SectionList>
        </View>
    )
}


const menuStyles = StyleSheet.create({
    menuContainer: {
        flex: 0.95,
        backgroundColor: '#7fff00'
    },
    menuItemHeadingText: {
        textAlign: 'center',
        fontWeight: 'bold', color: 'white'
    },
    menuItemContainer: {
        paddingHorizontal: 40, paddingVertical: 20, backgroundColor: '#04290cff'
    },
    sectionHeader: {
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#ffebcd',
        fontSize: 20
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    footerText: {
        color: '#EDEFEE',
        fontSize: 20,
        flexWrap: 'wrap',
        textAlign: 'center'
    },
    menuItemText: {
        color: 'white',
        fontSize: 15
    }
})
