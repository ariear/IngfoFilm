import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"
import CategoryList from "./components/CategoryList"
import HomeCardScroll from "./components/HomeCardScroll"
import InputSearch from "./components/InputSearch"
import ResultCategory from "./components/ResultCategory"

const Home = ({navigation}) => {
    return (
        <ScrollView style={style.container}>
            <StatusBar backgroundColor="#242A32" />

            <Text style={style.textMain}>What do you want to watch?</Text>
            <InputSearch />
            <HomeCardScroll navigation={navigation} />
            <CategoryList />
            <ResultCategory />
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