import { Image, StyleSheet, Text, View } from "react-native"

const Cast = ({cast}) => {
    return (
        <View style={style.wrapCast}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/original/${cast.profile_path}` }} style={style.pp} />
            <Text style={style.name}>{cast.name}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    wrapCast:{
        width: '40%',
        alignItems: 'center',
        marginBottom: 30
    },
    pp:{
        width: 100,
        height: 100,
        borderRadius: 50
    },
    name: {
        color: '#ffff',
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
        marginTop: 10
    }
})

export default Cast