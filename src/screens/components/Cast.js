import { Image, StyleSheet, Text, View } from "react-native"

const Cast = () => {
    return (
        <View style={style.wrapCast}>
            <Image source={require('../../assets/cast.png')} />
            <Text style={style.name}>Zendaya</Text>
        </View>
    )
}

const style = StyleSheet.create({
    wrapCast:{
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    name: {
        color: '#ffff',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 10
    }
})

export default Cast