import { ScrollView , Image, StyleSheet, TouchableWithoutFeedback, Text , View} from 'react-native'
import { useState, useEffect } from 'react'
import axios from 'axios'
import config from '../../../config'
import HomeCardScrollSkeleton from './HomeCardScrollSkeleton'

const HomeCardScroll = ({navigation}) => {
    const [topMovie , setTopMovie] = useState([])
    const [loadingTopMovie , setLoadingTopMovie] = useState(false)

    const getTopMovie = async () => {
        setLoadingTopMovie(true)
        let wrap = []
        const fetchData = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${config.API_KEY}`)
        for (let i = 0; i < 6; i++) {
            const element = fetchData.data.results[i]
            wrap.push(element) 
        }
        setTopMovie(wrap)
        setLoadingTopMovie(false)
    }

    useEffect(() => {
        getTopMovie()
    }, []);
    

    return (
    <ScrollView horizontal={true} style={style.scrollHori} >
        {
            loadingTopMovie ?
            <View style={{ flexDirection: 'row' }} >
                <HomeCardScrollSkeleton />
                <HomeCardScrollSkeleton />
                <HomeCardScrollSkeleton />
            </View>
            :
            topMovie.map((movie, index) => 
                <TouchableWithoutFeedback onPress={() => navigation.navigate('DetailFilm', {mid: movie.id}) } key={index} >
                    <Image source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }} style={style.cardSlide} />
                </TouchableWithoutFeedback>    
            )
        }
    </ScrollView>
    )
}

const style = StyleSheet.create({
    scrollHori: {
        marginBottom: 40
    },  
    cardSlide: {
        width: 150,
        height: 220,
        borderRadius: 7,
        marginRight: 10
    }
})

export default HomeCardScroll