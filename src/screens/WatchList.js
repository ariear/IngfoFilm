import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import Ionicon from 'react-native-vector-icons/Ionicons'
import CardList from "./components/CardList"

const WatchList = () => {
    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <Ionicon name="chevron-back-outline" size={25} color="#ffff" />
                <Text style={{ 
                    color: '#ffffff',
                    fontWeight: '500',
                    letterSpacing: 1,
                    fontSize: 17
                 }}>Watch list</Text>
                <Text></Text>
            </View>

            {/* <ScrollView showsVerticalScrollIndicator={false} >
                <CardList />
                <CardList />
            </ScrollView> */}

            <View style={style.viewNotMovie}>
                <Image source={require('../assets/images/box.png')} />
                <Text style={style.textNotMovie}>There is no movie yet!</Text>
                <Text style={style.desNotMovie}>Find your movie by Type title, categories, years, etc </Text>
            </View>
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
    },
    viewNotMovie:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNotMovie:{
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10
    },
    desNotMovie:{
        width: 200,
        color: '#92929D',
        textAlign: 'center',
        paddingBottom: 50
    }
})

export default WatchList