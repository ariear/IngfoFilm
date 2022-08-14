import axios from "axios"
import { useEffect, useState } from "react"
import { ScrollView , StyleSheet, Text } from "react-native"
import config from "../../../config"

const CategoryList = ({setListFilm}) => {
    const [listCategory] = useState([
        {
            id: 3,
            category: 'Popular',
            slug: 'popular'
        },
        {
            id: 1,
            category: 'Top rated',
            slug: 'top_rated'
        },
        {
            id: 2,
            category: 'Now playing',
            slug: 'now_playing'
        },
        {
            id: 4,
            category: 'Upcoming',
            slug: 'upcoming'
        },
    ])
    const [by, setBy] = useState('popular')

    const getListFilm = async (by = 'popular') => {
        setListFilm([])
        const fetchData = await axios.get(`https://api.themoviedb.org/3/movie/${by}?api_key=${config.API_KEY}&language=en-US&page=1`)
        if (fetchData.status === 200) {
            setListFilm(fetchData.data.results)
        }
    }

    useEffect(() => {
        getListFilm()
    }, []);

    return (
    <ScrollView horizontal={true} style={{ marginBottom: 25 }} >
        {
            listCategory.map(listCategory => 
                <Text key={listCategory.id} style={[style.textCategory, {
                    borderBottomWidth: listCategory.slug == by ? 2 : 0,
                    borderColor: '#3A3F47'
                }]} onPress={() => {
                    getListFilm(listCategory.slug)
                    setBy(listCategory.slug) 
                }} 
                 >{listCategory.category}</Text>
            )
        }
    </ScrollView>
    )
}

const style = StyleSheet.create({
    textCategory:{
        color: '#ffffff',
        marginRight: 15,
        paddingBottom: 7,
        fontFamily: 'Poppins-Medium'
    }
})

export default CategoryList