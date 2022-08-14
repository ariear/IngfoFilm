import axios from "axios"
import { useEffect, useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import config from "../../../config"

const NowPlaying = () => {
    const [nowplayingFilm, setnowplayingFilm ] = useState([])

    const getNowPlayingFilm = async () => {
        const fetchData = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${config.API_KEY}&language=en-US&page=1`)
        if (fetchData.status === 200) {
            setnowplayingFilm(fetchData.data.results)
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
                    nowplayingFilm &&
                    nowplayingFilm.map(film => 
                        <Image source={{ uri: `https://image.tmdb.org/t/p/original/${film.poster_path}` }} key={film.id} style={style.cardChild} />
                    )
                }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    textTitle:{
        fontSize: 18,
        color: '#ffff',
        fontWeight: '500',
        marginBottom: 20
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