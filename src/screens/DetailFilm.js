import { useEffect, useState } from "react"
import { View , Text, StyleSheet, ImageBackground, Image, TouchableWithoutFeedback, ScrollView , ToastAndroid} from "react-native"
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
import CardReview from "./components/CardReview"
import Cast from "./components/Cast"
import config from "../../config"
import AsyncStorage from '@react-native-async-storage/async-storage';
import TitleSkeleton from "./components/TitleSkeleton"
import DescSkeleton from "./components/DescSkeleton"
import ReviewSkeleton from "./components/ReviewSkeleton"

const DetailFilm = ({route, navigation}) => {
    const {mid} = route.params

    const [iconWishlist, setIconWishlist] = useState('bookmark-outline')
    const [wishlistLocal, setWishlistLocal] = useState([])

    const [content, setContent] = useState({
        aboutMovie: true,
        reviews: false,
        cast: false
    })
    const [detailMovie , setDetailMovie] = useState({
        id: '',
        poster_path: '',
        backdrop_path: '',
        title: '',
        overview: '',
        genre: '',
        rating: '',
        status: '',
        years: ''
    })
    const [loading , setLoading] = useState(false)
    const [loadingReview,setLoadingReview] = useState(false)

    const [reviews, setReviews] = useState([])
    const [casts, setCasts] = useState([])

    const getDetailMovie = async () => {
        setLoading(true)
        const fetchData = await axios.get(`https://api.themoviedb.org/3/movie/${mid}?api_key=${config.API_KEY}&language=en-US`)
        if (fetchData.status === 200) {
            setDetailMovie({
                id: fetchData.data.id,
                poster_path: fetchData.data.poster_path,
                backdrop_path: fetchData.data.backdrop_path,
                title: fetchData.data.title,
                overview: fetchData.data.overview,
                genre: fetchData.data.genres[0].name,
                rating: fetchData.data.vote_average.toFixed(1),
                status: fetchData.data.status,
                years: fetchData.data.release_date.split('-')[0]
            })
            setLoading(false)
        }
    }

    const getReviews = async () => {
        setLoadingReview(true)
        const fetchData = await axios.get(`https://api.themoviedb.org/3/movie/${mid}/reviews?api_key=${config.API_KEY}`)
        if (fetchData.status === 200) {
            setReviews(fetchData.data.results)
            setLoadingReview(false)
        }
    }

    const getCasts = async () => {
        const fetchData = await axios.get(`https://api.themoviedb.org/3/movie/${mid}/casts?api_key=${config.API_KEY}`)
        if (fetchData.status === 200) {
            setCasts(fetchData.data.cast)
        }
    }

    const saveFilm = async () => {

        let newData = [...wishlistLocal, detailMovie]
        if (iconWishlist === 'bookmark') {
            newData = wishlistLocal.filter(film => film.id !== mid)
            await AsyncStorage.setItem('films', JSON.stringify(newData))
            setWishlistLocal(newData)
            setIconWishlist('bookmark-outline')
            ToastAndroid.show('Unsaved film to wishlist', ToastAndroid.SHORT)
        }
        if (iconWishlist !== 'bookmark') {
            await AsyncStorage.setItem('films', JSON.stringify(newData))
            setWishlistLocal(newData)
            setIconWishlist('bookmark')
            ToastAndroid.show('Saved film to wishlist', ToastAndroid.SHORT)
        }
    }

    const getData = () => {
        AsyncStorage.getItem('films').then(data => {
          if (data !== null) {
            setWishlistLocal(JSON.parse(data))
          }
        })
    }

    useEffect(() => {
        getDetailMovie()

        getData()
        wishlistLocal.forEach(film => {
            film.id == mid ? setIconWishlist('bookmark') : ''
        });
    }, [wishlistLocal]);

    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <Ionicon name="chevron-back-outline" size={25} color="#ffff" onPress={() => navigation.goBack() } />
                <Text style={{ 
                    color: '#ffffff',
                    letterSpacing: 1,
                    fontSize: 17,
                    fontFamily: 'Poppins-SemiBold'
                 }}>Detail</Text>
                <Ionicon name={iconWishlist} size={25} color="#ffff"  onPress={() => saveFilm()} />
            </View>

            <ScrollView>

            <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path}` }} resizeMode="cover" style={style.backdrop}>
                 <View style={style.inBackdrop}>
                    <Image source={{ uri: `https://image.tmdb.org/t/p/original/${detailMovie.poster_path}` }} style={style.sampul} />
                    <Text style={style.rating}><Ionicon name="star-outline" size={12} color="#FF8700" />  {detailMovie.rating || '--' }</Text>
                 </View>
            </ImageBackground>

                <Text style={style.title}>{detailMovie.title || <TitleSkeleton /> }</Text>

                <View style={style.detail}>
                    <Text style={style.textDetail}><MaterialCommunityIcons name="calendar-blank-outline" color="#92929D" size={16} />  {detailMovie.years || '----'}</Text>
                    <View style={style.lineDetail}></View>
                    <Text style={style.textDetail}><MaterialCommunityIcons name="clock-time-three-outline" color="#92929D" size={16} />  {detailMovie.status || '----' }</Text>
                    <View style={style.lineDetail}></View>
                    <Text style={style.textDetail}><MaterialCommunityIcons name="ticket-confirmation-outline" color="#92929D" size={16} />  {detailMovie.genre || '----' }</Text>
                </View>

                <View style={style.listDetail}>
                    <TouchableWithoutFeedback onPress={() => {
                        setContent({
                            aboutMovie: true,
                            reviews: false,
                            cast: false
                        })
                    }} >
                    <Text style={[style.listDetailText,
                         {
                            borderBottomWidth: content.aboutMovie ? 2 : 0 , 
                            borderColor: '#3A3F47' 
                        }]}>About Movie</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {
                        setContent({
                            aboutMovie: false,
                            reviews: true,
                            cast: false
                        })
                        getReviews()
                    }} >
                    <Text style={[style.listDetailText,
                         {
                            borderBottomWidth: content.reviews ? 2 : 0 , 
                            borderColor: '#3A3F47' 
                        }]}>Reviews</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {
                        setContent({
                            aboutMovie: false,
                            reviews: false,
                            cast: true
                        })
                        getCasts()
                    }} >
                    <Text style={[style.listDetailText,
                         {
                            borderBottomWidth: content.cast ? 2 : 0 , 
                            borderColor: '#3A3F47' 
                        }]}>Cast</Text>
                    </TouchableWithoutFeedback>
                </View>

                <View style={style.contentDetail}>
                    {
                        content.aboutMovie &&
                    <Text style={{ 
                        color: '#ffffff', 
                        marginBottom: 20,
                        fontFamily: 'Poppins-Regular' }}>{detailMovie.overview || <DescSkeleton /> }</Text>
                    }
                    {
                        content.reviews &&
                        reviews &&
                        reviews.map((review , index) =>
                            <CardReview key={index} review={review} />
                        )
                    }
                    {
                        content.reviews && 
                        loadingReview && 
                            <>
                            <ReviewSkeleton />
                            <ReviewSkeleton />
                            </>
                    }
                    {
                        content.cast && (
                            <View style={style.containerCast}>
                            {
                            casts.map(cast => 
                                <Cast cast={cast} key={cast.id} />
                                )
                            }
                            </View>
                            ) 
                    }
                </View>

                </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#242A32'
    },
    topBar:{
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    backdrop:{
        height: 200,
        justifyContent: 'flex-end'
    },
    inBackdrop:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    sampul:{
        width: 120,
        height: 180,
        borderRadius: 10,
        transform: [{translateY: 90}]
    },
    title:{
        fontSize: 18,
        color: '#ffffff',
        marginLeft: 145,
        paddingTop: 10,
        fontFamily: 'Poppins-SemiBold'
    },
    rating:{
        color: '#FF8700',
        backgroundColor: '#ffff',
        marginBottom: 10,
        paddingHorizontal: 7,
        paddingVertical: 4,
        borderRadius: 10,
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold'
    },
    detail:{
        paddingTop: 70,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textDetail:{
        color: '#92929D',
        fontFamily: 'Poppins-Medium',
        fontSize: 12
    },
    lineDetail:{
        borderWidth: 1,
        borderColor: '#92929D',
        marginHorizontal: 10
    },
    listDetail:{
        paddingTop: 30,
        paddingHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 20
    },
    listDetailText:{
        color: '#ffff',
        marginRight: 20,
        paddingBottom: 3,
        fontFamily: 'Poppins-Medium'
    },
    contentDetail:{
        paddingHorizontal: 15
    },
    containerCast:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    }
})

export default DetailFilm