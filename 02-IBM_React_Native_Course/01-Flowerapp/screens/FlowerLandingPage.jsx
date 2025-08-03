import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'

export const FlowerLandingPage = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Blooming Flowers</Text>
                    <Text style={styles.subHeaderText}>Fresh and beautiful flowers delivered to your doorstep.</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1463043254199-7a3efd782ad1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} resizeMethod='contain' style={styles.image} />
                </View>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.textInput} placeholder='Search for flowers...' />
                </View>
                <View>
                    <View style={styles.featuredSection}>
                        <Text style={styles.sectionTitle}>Featured Flowers</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.flowerCard}>
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1686125616977-34f6d5979eb1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                                    style={styles.flowerImage}
                                />
                                <Text style={styles.flowerTitle}>White Base</Text>
                            </View>
                            <View style={styles.flowerCard}>
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1579847621515-b40fcc20831e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                                    style={styles.flowerImage}
                                />
                                <Text style={styles.flowerTitle}>Lily</Text>
                            </View>
                            <View style={styles.flowerCard}>
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1487435636644-3ad040f0195b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                                    style={styles.flowerImage}
                                />
                                <Text style={styles.flowerTitle}>Tulip</Text>
                            </View>
                            <View style={styles.flowerCard}>
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1556216750-2108e1e54e9a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                                    style={styles.flowerImage}
                                />
                                <Text style={styles.flowerTitle}>Orchid</Text>
                            </View>
                            <View style={styles.flowerCard}>
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1695112691738-5227cabb206f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                                    style={styles.flowerImage}
                                />
                                <Text style={styles.flowerTitle}>Chrysanthemums</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => alert('Shop Now')}>
                            <Text style={styles.buttonText}>Show Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'lightgray'
    },
    header: {
        alignItems: 'center',
        marginBottom: 10
    },
    headerText: {
        fontSize: 38,
        fontWeight: 'bold'
    },
    subHeaderText: {
        fontSize: 27,
        fontWeight: 'hold',
        color: '#f56c6c'
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 5,
    },
    searchContainer: {
        marginBottom: 10,
    },
    textInput: {
        height: 90,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 25,
    },
    featuredSection: {
        marginBottom: 10,

    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    flowerCard: {
        marginRight: 10,
        alignItems: 'center',
    },
    flowerImage: {
        width: 270,
        height: 210,
        borderRadius: 5,
    },
    flowerTitle: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#f56c6c',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
})