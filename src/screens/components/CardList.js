import { useEffect, useState } from 'react'
import { View , Image , Text , StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
import config from '../../../config'

const CardList = ({result, navigation}) => {
    const [genre , setGenre] = useState('')

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${config.API_KEY}&language=en-US`).then(res => {
            res.data.genres.map((genre) => {
                if (genre.id == result.genre_ids[0]) {
                    setGenre(genre.name)
                }
            })
        })
    }, []);

    return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('DetailFilm', {mid: result.id})} >
    <View style={style.cardResult}>
        <Image source={{ uri: `https://image.tmdb.org/t/p/original/${result.poster_path}` }} style={style.sampul} />
        <View>
            <Text style={style.titleCard}>{result.title.length <= 19 ? result.title : result.title.substring(0,19).concat('...')}</Text>
            <Text style={{ color: '#FF8700', fontSize: 12, fontFamily: 'Poppins-SemiBold' }}><Ionicon name="star-outline" color="#FF8700" size={16} />  {result.vote_average}</Text>
            <Text style={style.whiteText}><MaterialCommunityIcons name="ticket-confirmation-outline" color="#ffffff" size={16} />  {genre}</Text>
            <Text style={style.whiteText}><MaterialCommunityIcons name="calendar-blank-outline" color="#ffffff" size={16} />  { result.release_date && result.release_date.split('-')[0] || '??'}</Text>
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
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        marginBottom: 20
    },
    whiteText:{
        color: '#ffffff',
        marginTop: 2,
        fontFamily: 'Poppins-Regular',
        fontSize: 12
    }
})

export default CardList