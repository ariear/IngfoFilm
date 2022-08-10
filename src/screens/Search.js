import { StyleSheet, Text, View } from "react-native"
import Ionicon from 'react-native-vector-icons/Ionicons'
import CardList from "./components/CardList"
import InputSearch from "./components/InputSearch"
import NotFind from "./components/NotFind"

const Search = () => {
    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <Ionicon name="chevron-back-outline" size={25} color="#ffff" />
                <Text style={{ 
                    color: '#ffffff',
                    fontWeight: '500',
                    letterSpacing: 1,
                    fontSize: 17
                 }}>Search</Text>
                <Ionicon name="alert-circle-outline" size={25} color="#ffff" />
            </View>
            
            <InputSearch />

            {/* <CardList /> */}

            <NotFind />
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