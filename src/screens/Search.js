import { StyleSheet, Text, View , TextInput, Image } from "react-native"
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
            <TextInput placeholder="Search" style={style.inputSearch} />

            <View style={style.cardResult}>
                <Image source={require('../assets/card1.png')} style={{ marginRight: 15 }} />
                <View>
                    <Text style={style.titleCard}>Cidade Perdida</Text>
                    <Text style={{ color: '#FF8700' }}><Ionicon name="star-outline" color="#FF8700" size={16} />  9.5</Text>
                    <Text style={style.whiteText}><MaterialCommunityIcons name="ticket-confirmation-outline" color="#ffffff" size={16} />  Action</Text>
                    <Text style={style.whiteText}><MaterialCommunityIcons name="calendar-blank-outline" color="#ffffff" size={16} />  2020</Text>
                    <Text style={style.whiteText}><MaterialCommunityIcons name="clock-time-three-outline" color="#ffffff" size={16} />  139 minutes</Text>
                </View>
            </View>
            <View style={style.cardResult}>
                <Image source={require('../assets/card2.png')} style={{ marginRight: 15 }} />
                <View>
                    <Text style={style.titleCard}>Sonic 2 The Flash Anjir B..</Text>
                    <Text style={{ color: '#FF8700' }}><Ionicon name="star-outline" color="#FF8700" size={16} />  9.5</Text>
                    <Text style={style.whiteText}><MaterialCommunityIcons name="ticket-confirmation-outline" color="#ffffff" size={16} />  Action</Text>
                    <Text style={style.whiteText}><MaterialCommunityIcons name="calendar-blank-outline" color="#ffffff" size={16} />  2020</Text>
                    <Text style={style.whiteText}><MaterialCommunityIcons name="clock-time-three-outline" color="#ffffff" size={16} />  139 minutes</Text>
                </View>
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
    inputSearch: {
        backgroundColor: '#3A3F47',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        color: '#ffffff',
        marginBottom: 25
    },
    cardResult:{
        flexDirection: 'row',
        marginBottom: 25
    },
    titleCard:{
        color: '#ffffff',
        fontSize: 18,
        marginBottom: 20
    },
    whiteText:{
        color: '#ffffff',
        marginTop: 5
    }
})

export default Search