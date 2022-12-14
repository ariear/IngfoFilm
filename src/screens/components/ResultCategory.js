import { View , Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import ResultCategorySkeleton from './ResultCategorySkeleton'

const ResultCategory = ({listFilm, navigation, isResultsLoading}) => {
    return (
    <View style={style.parentCard}>
        {
            isResultsLoading ? 
            <>
            <ResultCategorySkeleton /> 
            <ResultCategorySkeleton /> 
            <ResultCategorySkeleton /> 
            <ResultCategorySkeleton /> 
            <ResultCategorySkeleton /> 
            <ResultCategorySkeleton /> 
            </>
            :
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