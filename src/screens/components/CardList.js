import { View , Image , Text , StyleSheet } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const CardList = () => {
    return (
    <View style={style.cardResult}>
        <Image source={require('../../assets/card1.png')} style={{ marginRight: 15 }} />
        <View>
            <Text style={style.titleCard}>Cidade Perdida</Text>
            <Text style={{ color: '#FF8700' }}><Ionicon name="star-outline" color="#FF8700" size={16} />  9.5</Text>
            <Text style={style.whiteText}><MaterialCommunityIcons name="ticket-confirmation-outline" color="#ffffff" size={16} />  Action</Text>
            <Text style={style.whiteText}><MaterialCommunityIcons name="calendar-blank-outline" color="#ffffff" size={16} />  2020</Text>
            <Text style={style.whiteText}><MaterialCommunityIcons name="clock-time-three-outline" color="#ffffff" size={16} />  139 minutes</Text>
        </View>
    </View>
    )
}

const style = StyleSheet.create({
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

export default CardList