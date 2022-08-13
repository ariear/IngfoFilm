import { useState } from "react"
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import CategoryList from "./components/CategoryList"
import HomeCardScroll from "./components/HomeCardScroll"
import InputSearch from "./components/InputSearch"
import ResultCategory from "./components/ResultCategory"

const Home = ({navigation}) => {
    const [listFilm, setListFilm] = useState([])

    return (
        <ScrollView style={style.container}>
            <StatusBar backgroundColor="#242A32" />

            <Text style={style.textMain}>What do you want to watch?</Text>
            
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')} >
                <View>
                <InputSearch iseditable={false} />
                </View>
            </TouchableWithoutFeedback>
            
            <HomeCardScroll navigation={navigation} />
            <CategoryList setListFilm={setListFilm} />
            <ResultCategory listFilm={listFilm} navigation={navigation} />
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#242A32',
        paddingHorizontal: 15,
        flex: 1
    },
    textMain:{
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        paddingVertical: 20
    }
})

export default Home