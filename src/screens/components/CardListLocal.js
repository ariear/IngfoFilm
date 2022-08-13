import { View , Image , Text , StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const CardListLocal = ({result, navigation}) => {
    return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('DetailFilm', {mid: result.id})} >
    <View style={style.cardResult}>
        <Image source={{ uri: `https://image.tmdb.org/t/p/original/${result.poster_path}` }} style={style.sampul} />
        <View>
            <Text style={style.titleCard}>{result.title.substring(0,21).concat('...')}</Text>
            <Text style={{ color: '#FF8700' }}><Ionicon name="star-outline" color="#FF8700" size={16} />  {result.rating}</Text>
            <Text style={style.whiteText}><MaterialCommunityIcons name="ticket-confirmation-outline" color="#ffffff" size={16} />  {result.genre}</Text>
            <Text style={style.whiteText}><MaterialCommunityIcons name="calendar-blank-outline" color="#ffffff" size={16} />  {result.years || '??'}</Text>
        </View>
    </View>
    </TouchableWithoutFeedback>
    )
}

const style = StyleSheet.create({
    cardResult:{
        flexDirection: 'row',
        marginBottom: 25
    },
    sampul:{
        width: 100,
        height: 150,
        marginRight: 15,
        borderRadius: 15
    },
    titleCard:{
        color: '#ffffff',
        fontSize: 18,
        marginBottom: 20
    },
    whiteText:{
        color: '#ffffff',
        marginTop: 5
    }
})

export default CardListLocal