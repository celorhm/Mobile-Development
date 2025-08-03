import { useState } from "react";
import { View, Text, SectionList, ScrollView, Pressable } from 'react-native'

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
];



const Item = ({ name }) => <View style={{ padding: 10 }}><Text style={{ color: 'yellow', fontSize: 20 }}>{name}</Text></View>

export const MenuItems = () => {
    const [showMenu, setShowMenu] = useState(true)
    console.log(showMenu)
    return (
        <>
            <View>
                <Pressable onPress={() => setShowMenu(!showMenu)} style={{ fontSize: 22, padding: 10, marginVertical: 8, margin: 40, borderWidth: 2, borderRadius: 12 }}>
                    <Text style={{ textAlign: 'center', fontSize: 23, backgroundColor: '#ffc0cb' }}>{showMenu ? 'Home' : 'View Menu'}</Text>
                </Pressable>
                {!showMenu && (
                    <>
                        <Text style={{ textAlign: 'center', fontSize: 30, backgroundColor: 'plum' }}>Menu Items</Text>
                        <SectionList
                            sections={menuItemsToDisplay}
                            renderItem={({ item }) => <Item name={item} />}
                            renderSectionHeader={({ section: { title } }) => <Text style={{ color: 'brown', textAlign: 'center', fontSize: 25, backgroundColor: 'peru' }}>{title}</Text>}
                        ></SectionList>
                    </>

                )}

            </View>
        </>
    );
}