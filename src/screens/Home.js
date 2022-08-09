import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"

const Home = () => {
    return (
        <ScrollView style={style.container}>

            <Text style={style.textMain}>What do you want to watch?</Text>
            <TextInput placeholder="Search" style={style.inputSearch} />

            <ScrollView horizontal={true} style={style.scrollHori} >
                <Image source={require('../assets/card1.png')} style={style.cardSlide} />
                <Image source={require('../assets/card2.png')} style={style.cardSlide} />
                <Image source={require('../assets/card3.png')} style={style.cardSlide} />
                <Image source={require('../assets/card4.png')} style={style.cardSlide} />
            </ScrollView>

            <ScrollView horizontal={true} style={{ marginBottom: 25 }} >
                <Text style={style.textCategory} >Now playing</Text>
                <Text style={style.textCategory}>Upcoming</Text>
                <Text style={style.textCategory}>Top rated</Text>
                <Text style={style.textCategory}>Popular</Text>
                <Text style={style.textCategory}>Now playing</Text>
            </ScrollView>

            <View style={style.parentCard}>
                <Image source={require('../assets/card8.png')} style={style.cardChild} />
                <Image source={require('../assets/card7.png')} style={style.cardChild} />
                <Image source={require('../assets/card6.png')} style={style.cardChild} />
                <Image source={require('../assets/card5.png')} style={style.cardChild} />
                <Image source={require('../assets/card4.png')} style={style.cardChild} />
                <Image source={require('../assets/card3.png')} style={style.cardChild} />
                <Image source={require('../assets/card4.png')} style={style.cardChild} />
                <Image source={require('../assets/card4.png')} style={style.cardChild} />
                <Image source={require('../assets/card4.png')} style={style.cardChild} />
            </View>

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
    },
    inputSearch: {
        backgroundColor: '#3A3F47',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        color: '#ffffff',
        marginBottom: 25
    },
    scrollHori: {
        marginBottom: 40
    },  
    cardSlide: {
        width: 150,
        height: 220,
        borderRadius: 7,
        marginRight: 10
    },
    textCategory:{
        color: '#ffffff',
        marginRight: 15
    },
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

export default Home