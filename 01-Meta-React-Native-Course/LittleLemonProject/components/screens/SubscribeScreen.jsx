import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, Alert } from 'react-native';
import { isValidElement, useState } from 'react';
import { validateEmail } from '../../utils';


const Logo = require('../../assets/little-lemon-logo-grey.png')

const LittleLemonGreyLogo = () => {
    return (
        <Image source={Logo} style={styles.image} resizeMode='contain' />
    )
}


const InputForm = () => {
    const [email, setEmail] = useState('')

    return (
        <ScrollView>
            <TextInput
                placeholder='Type your email'
                value={email}
                onChange={setEmail}
                keyboardType='email-address'
                style={{}}
            />
            <Button
                onPress={() => Alert.alert('Thanks for subscribing, stay tuned')}
                title="Subscribe"
                disabled={!(validateEmail(email))}
            />
        </ScrollView >
    )

}


export const Subscribe = ({ navigation }) => {
    // Add welcome screen code here
    return (
        <>
            <View style={styles.body}>
                <LittleLemonGreyLogo />
                <Text style={styles.innerText}>
                    Subscribe to our newsletter for our latest delicious recipies!
                </Text>

            </View>
            <View>
                <InputForm />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerText: {
        textAlign: 'center',
        fontSize: 20,
        paddingHorizontal: 20
    },
    body: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        height: 120,
        width: 120,
        alignSelf: 'center',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        marginBottom: 16,
        width: 300,
    },
    pressableBtn: {
        backgroundColor: 'forestgreen',
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 40,
        minWidth: '50%',
        alignItems: 'center',
    },
    pressableText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    disabledBtn: {
        backgroundColor: '#999',
    },
    disabledText: {
        color: '#eee',
    }

});
