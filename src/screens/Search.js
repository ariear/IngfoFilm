import axios from "axios"
import { useEffect, useState } from "react"
import { Linking, ScrollView, StyleSheet, Text, View } from "react-native"
import Ionicon from 'react-native-vector-icons/Ionicons'
import CardList from "./components/CardList"
import InputSearch from "./components/InputSearch"
import NotFind from "./components/NotFind"
import config from "../../config"
import NowPlaying from "./components/NowPlaying"

const Search = ({navigation}) => {
    const [searchResults , setSearchResults] = useState([])
    const [query , setQuery] = useState('')
    const [isNotFind , setIsNotFind] = useState(false)
    const [isSearch , setIsSearch] = useState(false)

    const searchFilm = async () => {
        if (query == '') return false

        setIsSearch(true)
        setSearchResults([])
        const fetchData = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${config.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
        if (fetchData.status === 200) {
            fetchData.data.results.length === 0 ? setIsNotFind(true) : setIsNotFind(false)
            if (fetchData.data.results) return setSearchResults(fetchData.data.results)
        }
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            setQuery('')
            setSearchResults([])
            setIsSearch(false)
            setIsNotFind(false)
        });
    }, [navigation]);

    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <Ionicon name="chevron-back-outline" size={25} color="#ffff" onPress={() => navigation.goBack()} />
                <Text style={{ 
                    color: '#ffffff',
                    fontWeight: '500',
                    letterSpacing: 1,
                    fontSize: 17,
                    fontFamily: 'Poppins-SemiBold'
                 }}>Search</Text>
                <Ionicon name="alert-circle-outline" size={25} color="#ffff" onPress={() => Linking.openURL('https://github.com/ariear/IngfoFilm/issues')} />
            </View>
            
            <InputSearch iseditable={true} searchFilm={searchFilm} query={query} setQuery={setQuery} />

            { isNotFind && 
                <ScrollView>
                    <NotFind /> 
                </ScrollView>
            }
            
            <ScrollView showsVerticalScrollIndicator={false} >
            {
                searchResults &&
                searchResults.map(result => 
                    <CardList key={result.id} result={result} navigation={navigation} />
                )
            }
            {
                !isSearch && <NowPlaying />
            }
            </ScrollView>
            
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#242A32',
        paddingHorizontal: 15
    },
    topBar:{
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Search