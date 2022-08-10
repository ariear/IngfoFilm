import { StyleSheet , View , Image , Text} from 'react-native'

const NotFind = () => {
    return (
        <View style={style.viewNotMovie}>
            <Image source={require('../../assets/images/searchcloud.png')} />
            <Text style={style.textNotMovie}>we are sorry, we can not find the movie :(</Text>
            <Text style={style.desNotMovie}>Find your movie by Type title </Text>
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
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        marginTop: 15,
        marginBottom: 10,
        paddingHorizontal: 40,
        textAlign: 'center'
    },
    desNotMovie:{
        color: '#92929D',
        textAlign: 'center',
        paddingBottom: 100
    }
})

export default NotFind