import { View , Image , Text, StyleSheet } from "react-native"

const CardReview = ({review}) => {
    let avatar_path = review.author_details.avatar_path ? review.author_details.avatar_path.slice(1) : 'https://i.ibb.co/rkR23t7/Vector.png'

    return (
        <View style={style.wrapCard}>
            <View style={style.wrapPP}>
                <Image source={{ uri: avatar_path }} style={style.pp} />
                <Text style={{ color: '#0296E5' }}>{review.author_details.rating || '??'}</Text>
            </View>
            <View style={style.comment}>
                <Text style={style.name}>{review.author}</Text>
                <Text style={style.desComment}>{review.content}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    wrapCard:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 30
    },
    wrapPP:{
        marginRight: 15,
        alignItems: 'center'
    },
    pp:{
        marginBottom: 10,
        width: 45,
        height: 45,
        borderRadius: 50
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