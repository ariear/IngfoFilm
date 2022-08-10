import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import Ionicon from 'react-native-vector-icons/Ionicons'
import CardList from "./components/CardList"
import NoMovie from "./components/NoMovie"

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

            <NoMovie />
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

export default WatchList