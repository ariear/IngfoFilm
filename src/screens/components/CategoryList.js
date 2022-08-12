import { useState } from "react"
import { ScrollView , StyleSheet, Text } from "react-native"

const CategoryList = () => {
    const [listCategory] = useState([
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
            id: 3,
            category: 'Popular',
            slug: 'popular'
        },
        {
            id: 4,
            category: 'Upcoming',
            slug: 'upcoming'
        },
    ])

    return (
    <ScrollView horizontal={true} style={{ marginBottom: 25 }} >
        {
            listCategory.map(listCategory => 
                <Text key={listCategory.id} style={style.textCategory} >{listCategory.category}</Text>
            )
        }
    </ScrollView>
    )
}

const style = StyleSheet.create({
    textCategory:{
        color: '#ffffff',
        marginRight: 15
    }
})

export default CategoryList