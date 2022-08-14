import { StyleSheet, View , Image , Text } from 'react-native'

const NoMovie = () => {
    return (
    <View style={style.viewNotMovie}>
        <Image source={require('../../assets/images/box.png')} />
        <Text style={style.textNotMovie}>There is no movie yet!</Text>
        <Text style={style.desNotMovie}>Find your movie by Type title, categories, years, etc </Text>
    </View>
    )
}

const style = StyleSheet.create({
    viewNotMovie:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNotMovie:{
        fontFamily: 'Poppins-SemiBold',
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 2,
        paddingTop: 15
    },
    desNotMovie:{
        width: 200,
        color: '#92929D',
        textAlign: 'center',
        paddingBottom: 80,
        fontFamily: 'Poppins-Medium',
        fontSize: 12
    }
})

export default NoMovie