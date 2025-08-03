import { View, Text } from 'react-native'

export const LittleLemonHeader = () => {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.innerText}>
                Little Lemon.
            </Text>
        </View >
    )
}

export const LittleLemonFooter = () => {
    return (
        <View style={footerStyles.container}>
            <Text style={footerStyles.innerText}>
                Little Lemon footer.
            </Text>
        </View >
    )
}

export const WelcomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={welcomeScreenstyles.innerText}> Welcome to Little Lemon </Text>
            <Text style={welcomeScreenstyles.innerText}>
                You are logged in!!
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </View>
    )
}

const welcomeScreenstyles = {
    innerText: {
        textAlign: 'center',
        fontSize: 30
    }
}