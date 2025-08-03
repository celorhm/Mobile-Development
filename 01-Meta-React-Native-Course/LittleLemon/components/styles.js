import { StyleSheet } from "react-native";



const welcomeScreenstyles = {
    innerText: {
        backgroundColor: 'white'
    }
}

const footerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#ffdab9',
    },
    innerText: {
        textAlign: 'center', fontSize: 20,
        padding: 10
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    inputBox: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: '#EDEFEE',
    },
    btnContainer: {
        backgroundColor: 'salmon',
        padding: 10,
        marginVertical: 4,
        margin: 150,
        borderWidth: 2,
        borderRadius: 20
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
});
