import { View , Image, StyleSheet } from 'react-native'

const ResultCategory = () => {
    return (
        <View style={style.parentCard}>
            <Image source={require('../../assets/card8.png')} style={style.cardChild} />
            <Image source={require('../../assets/card7.png')} style={style.cardChild} />
            <Image source={require('../../assets/card6.png')} style={style.cardChild} />
            <Image source={require('../../assets/card5.png')} style={style.cardChild} />
            <Image source={require('../../assets/card4.png')} style={style.cardChild} />
            <Image source={require('../../assets/card3.png')} style={style.cardChild} />
            <Image source={require('../../assets/card4.png')} style={style.cardChild} />
            <Image source={require('../../assets/card4.png')} style={style.cardChild} />
            <Image source={require('../../assets/card4.png')} style={style.cardChild} />
    </View>
    )
}

const style = StyleSheet.create({
    parentCard:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },  
    cardChild: {
        width: '30%',
        height: 150,
        marginBottom: 15
    }
})

export default ResultCategory