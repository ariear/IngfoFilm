import { useEffect, useState } from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import Ionicon from 'react-native-vector-icons/Ionicons'
import CardList from "./components/CardList"
import NoMovie from "./components/NoMovie"
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardListLocal from "./components/CardListLocal"

const WatchList = ({navigation}) => {
    const [wishlistLocal , setWishlistLocal] = useState([])
    const [isNoMovie , setIsNoMovie] = useState(false)

    const getToLocal = async () => {
        setIsNoMovie(true)
        const films = await AsyncStorage.getItem('films')
        if (films !== null) {
            setWishlistLocal(JSON.parse(films))
            setIsNoMovie(false)
        }
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            getToLocal()  
        });
        getToLocal()
    }, [navigation]);

    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <Ionicon name="chevron-back-outline" size={25} color="#ffff" onPress={() => navigation.goBack() } />
                <Text style={{ 
                    color: '#ffffff',
                    fontWeight: '500',
                    letterSpacing: 1,
                    fontSize: 17,
                    fontFamily: 'Poppins-SemiBold'
                 }}>Watch list</Text>
                <Text></Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} >
                {
                    isNoMovie ? <NoMovie /> 
                    :
                    wishlistLocal.map(film => 
                        <CardListLocal key={film.id} result={film} navigation={navigation} />
                    )
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

export default WatchList