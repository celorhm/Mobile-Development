import { View, StyleSheet } from 'react-native'

export const Spacer = ({ height = 100, width = '100%', style, ...props }) => {
    return (
        <View style={[{ width: width, height: height }, style]} {...props} />
    )
}

// const styles = StyleSheet.create({
//     space: {
//         width: width,
//         height: height
//     }
// })