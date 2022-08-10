import { ScrollView , StyleSheet, Text } from "react-native"

const CategoryList = () => {
    return (
    <ScrollView horizontal={true} style={{ marginBottom: 25 }} >
        <Text style={style.textCategory} >Now playing</Text>
        <Text style={style.textCategory}>Upcoming</Text>
        <Text style={style.textCategory}>Top rated</Text>
        <Text style={style.textCategory}>Popular</Text>
        <Text style={style.textCategory}>Now playing</Text>
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