import { View , Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const ResultCategory = ({listFilm, navigation}) => {
    return (
    <View style={style.parentCard}>
        {
            listFilm.map(film => 
                <TouchableWithoutFeedback key={film.id} onPress={() => navigation.navigate('DetailFilm', {mid: film.id}) } >
                    <Image source={{ uri: `https://image.tmdb.org/t/p/original/${film.poster_path}` }} style={style.cardChild} />
                </TouchableWithoutFeedback>
            )
        }
    </View>
    )
}

const style = StyleSheet.create({
    parentCard:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },  
    cardChild: {
        width: '30%',
        height: 150,
        marginBottom: 15,
        borderRadius: 15
    }
})

export default ResultCategory