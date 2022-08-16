import axios from "axios"
import { useEffect, useState } from "react"
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native"
import config from "../../../config"
import ResultCategorySkeleton from "./ResultCategorySkeleton"

const NowPlaying = ({navigation}) => {
    const [nowplayingFilm, setnowplayingFilm ] = useState([])
    const [isLoading , setIsLoading] = useState(false)

    const getNowPlayingFilm = async () => {
        setIsLoading(true)
        const fetchData = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${config.API_KEY}&language=en-US&page=1`)
        if (fetchData.status === 200) {
            setnowplayingFilm(fetchData.data.results)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getNowPlayingFilm()
    }, []);

    return (
        <View>
            <Text style={style.textTitle}>Now Playing</Text>

            <View style={style.parentCard}>
                {
                    isLoading ? 
                    <>
                    <ResultCategorySkeleton /> 
                    <ResultCategorySkeleton /> 
                    <ResultCategorySkeleton /> 
                    <ResultCategorySkeleton /> 
                    <ResultCategorySkeleton /> 
                    <ResultCategorySkeleton /> 
                    <ResultCategorySkeleton /> 
                    <ResultCategorySkeleton /> 
                    <ResultCategorySkeleton /> 
                    </>
                    :
                    nowplayingFilm.map(film => 
                        <TouchableWithoutFeedback key={film.id} onPress={() => navigation.navigate('DetailFilm', {mid: film.id})} >
                            <Image source={{ uri: `https://image.tmdb.org/t/p/original/${film.poster_path}` }} style={style.cardChild} />
                        </TouchableWithoutFeedback>
                    )
                }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    textTitle:{
        fontSize: 16,
        color: '#ffff',
        marginBottom: 20,
        fontFamily: 'Poppins-Medium'
    },
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

export default NowPlaying