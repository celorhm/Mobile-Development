import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import UserOnly from '../../components/auth/UsersOnly'

const DashboardLayout = () => {
    const colorScheme = useColorScheme()

    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <UserOnly>
            <Tabs screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.background,
                    paddingTop: 10,
                    height: 90
                },
                tabBarActiveTintColor: theme.iconColorFocused,
                tabBarInactiveTintColor: theme.iconColor,
                animation: 'none'

            }}>
                {/* <Tabs.Screen name='index' options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons size={24} name={focused ? 'home' : 'home-outline'} color={focused ? theme.iconColorFocused : theme.iconColor}
                        />
                    )
                }} /> */}
                <Tabs.Screen name='(books)' options={{
                    title: 'BookList',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons size={24} name={focused ? 'book' : 'book-outline'} color={focused ? theme.iconColorFocused : theme.iconColor}
                        />
                    )
                }} />
                {/* <Tabs.Screen name='profile' options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons size={24} name={focused ? 'person' : 'person-outline'} color={focused ? theme.iconColorFocused : theme.iconColor}
                        />
                    )
                }} /> */}
            </Tabs>
        </UserOnly>
    )
}

export default DashboardLayout

// const styles = StyleSheet.create({})