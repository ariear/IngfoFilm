import { View , Image , Text, StyleSheet } from "react-native"

const CardReview = () => {
    return (
        <View style={style.wrapCard}>
            <View style={style.wrapPP}>
                <Image source={require('../../assets/pp.png')} style={style.pp} />
                <Text style={{ color: '#0296E5' }}>6.3</Text>
            </View>
            <View style={style.comment}>
                <Text style={style.name}>Iqbal Shafiq Rozaan</Text>
                <Text style={style.desComment}>From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government.</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    wrapCard:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    wrapPP:{
        marginRight: 15,
        alignItems: 'center'
    },
    pp:{
        marginBottom: 10
    },  
    comment:{
        width: '75%'
    },
    name:{
        color: '#ffff',
        fontWeight: '500',
        letterSpacing: 0.7,
        marginBottom: 8
    },
    desComment:{
        color: '#ffff',
        lineHeight: 19
    }
})

export default CardReview