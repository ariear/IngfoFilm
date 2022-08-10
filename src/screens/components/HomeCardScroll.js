import { ScrollView , Image, StyleSheet } from 'react-native'

const HomeCardScroll = () => {
    return (
    <ScrollView horizontal={true} style={style.scrollHori} >
        <Image source={require('../../assets/card1.png')} style={style.cardSlide} />
        <Image source={require('../../assets/card2.png')} style={style.cardSlide} />
        <Image source={require('../../assets/card3.png')} style={style.cardSlide} />
        <Image source={require('../../assets/card4.png')} style={style.cardSlide} />
    </ScrollView>
    )
}

const style = StyleSheet.create({
    scrollHori: {
        marginBottom: 40
    },  
    cardSlide: {
        width: 150,
        height: 220,
        borderRadius: 7,
        marginRight: 10
    }
})

export default HomeCardScroll