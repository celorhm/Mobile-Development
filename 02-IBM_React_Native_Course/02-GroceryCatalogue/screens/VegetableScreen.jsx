
// import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import { styles } from '../navigation/DrawerNavigator';

const Item = ({ name, price, image }) => {
    return (
        <View>
            <Text>{name}</Text>
            {/* <Text>{price}</Text>
            <Image source={image} resizeMethod='contain' /> */}
        </View>)
}
export const VegetablesScreen = () => {
    const vegetables = [
        { name: 'Carrot', price: '$1.00', image: 'https://images.unsplash.com/photo-1510442393143-041057d09394?q=80&w=1031&auto=format&fit=crop' },
        { name: 'Cucumber', price: '$0.90', image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?q=80&w=1974&auto=format&fit=crop' },
        { name: 'Cabbage', price: '$1.00', image: 'https://images.unsplash.com/photo-1519897831810-a9a01aceccd1?q=80&w=1931&auto=format&fit=crop' },
        { name: 'Broccoli', price: '$0.90', image: 'https://images.unsplash.com/photo-1723976525220-a5c4f8a879b6?q=80&w=1974&auto=format&fit=crop' },
        { name: 'Bell Peppers', price: '$1.00', image: 'https://images.unsplash.com/photo-1465362261089-a2ab269caa45?q=80&w=2070&auto=format&fit=crop' },
        { name: 'Tomato', price: '$0.90', image: 'https://images.unsplash.com/photo-1570543375343-63fe3d67761b?q=80&w=1776&auto=format&fit=crop' },
    ];

    return (
        <>
            <Text>Fresh Vegetables from the farm</Text>
            <FlatList
                data={vegetables}
                renderItem={({ item }) => { <Item name={item.name}></Item> }}
            ></FlatList>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})