import { View, Text, Image } from 'react-native'




const HeaderComponent = () => {
    return (
        <>
            <View style={styles.container}>
                Welcome
            </View>
            <View style={styles.body}>
                <ImageComponent />
                <Text style={styles.innerText}> </Text>
                Little Lemon, your local Mediterranean Bistro
            </View></>
    )
}

/**
            <Text style={styles.innerText}></Text>
                    </View>
                    
                    </View > */